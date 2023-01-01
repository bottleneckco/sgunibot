import { padEnd } from 'lodash';
import moment from 'moment-timezone';

import getStatus from '../util/getStatus';

const PADDING_LENGTH = 12;

function getPeriodMessage(period: SchoolSemesters.Period): string {
  if (period.week_no != null) {
    return padEnd(`class wk ${period.week_no}`, PADDING_LENGTH);
  }

  return padEnd(period.type, PADDING_LENGTH);
}

const UniCommand: App.CommandDefinition = {
  name: 'uni',
  initialState: undefined,
  stages: [
    {
      type: 'text',
      trigger: {
        type: 'command',
      },
      async handle() {
        const now = moment.tz('Asia/Singapore');
        const currentStatus = await getStatus(now);

        let message = '';

        for (const [uni, status] of Object.entries(currentStatus)) {
          const {
            term,
            daysToVacation,
            nextPeriod,
            currentPeriod,
            prevPeriod,
          } = status;

          message += `<b>${uni}</b>\n`;
          message += `${term.label}\n`;

          if (currentPeriod) {
            const currentPeriodEnd = moment.tz(
              currentPeriod.date_end,
              'Asia/Singapore'
            );

            // Fixes diff counting by using inclusive end
            currentPeriodEnd.set('hour', 23);
            currentPeriodEnd.set('minute', 59);
            currentPeriodEnd.set('second', 59);

            message += '<pre>';
            message += getPeriodMessage(currentPeriod);
            message += '</pre>';
            message += ' ';
            message += '(ongoing, ';
            message += moment
              .tz(currentPeriodEnd, 'Asia/Singapore')
              .from(now, true);
            message += ' to go)';
            message += '\n';
          }

          if (nextPeriod) {
            message += '<pre>';
            message += getPeriodMessage(nextPeriod);
            message += '</pre>';
            message += ' ';
            message += '(';
            message += moment
              .tz(nextPeriod.date_start, 'Asia/Singapore')
              .from(now);
            message += ')';
            message += '\n';
          }

          if (
            currentPeriod?.type !== 'vacation' &&
            nextPeriod?.type !== 'vacation'
          ) {
            message += `<pre>${padEnd(
              'vacation',
              PADDING_LENGTH
            )}</pre> (in ${daysToVacation} days)`;
          }

          message += '\n\n';
        }

        return {
          responses: [
            {
              type: 'text',
              text: message,
              options: {
                parse_mode: 'HTML',
              },
            },
          ],
        };
      },
    },
  ],
};

export default UniCommand;
