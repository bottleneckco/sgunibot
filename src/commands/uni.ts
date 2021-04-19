import { padEnd } from 'lodash';
import moment from 'moment';

import { PeriodType } from '../../term_data/types';
import getStatus from '../getStatus';
import { Command } from '../types';

const PERIOD_EMOJI_MAP: Record<PeriodType, string> = {
  exam: '📝',
  recess: '📘',
  vacation: '🏖',
  class: '📚',
};

const uni: Command = {
  initialHandler: async (ctx) => {
    const now = moment();
    const currentStatus = getStatus(now);

    let message = '';

    for (const [uni, status] of Object.entries(currentStatus)) {
      const {
        term,
        daysToVacation,
        nextPeriod,
        currentPeriod,
        prevPeriod,
      } = status;

      message += `*${uni}*\n`;
      message += `${term.label}\n`;

      if (currentPeriod) {
        const currentPeriodEnd = moment(currentPeriod.date_end);

        message += `\`${padEnd(currentPeriod.type, 10)}\` ${moment(
          currentPeriodEnd
        ).diff(now, 'days')}d remaining _(till ${currentPeriodEnd.format(
          'D MMM YYYY'
        )})_\n`;
      }

      if (nextPeriod) {
        message += `\`${padEnd(nextPeriod.type, 10)}\` in ${moment(
          nextPeriod.date_start
        ).diff(now, 'days')}d\n`;
      }

      message += `\`vacation  \` -${daysToVacation}d`;

      message += '\n\n';
    }

    ctx.replyWithMarkdown(message);
  },
};

export default uni;
