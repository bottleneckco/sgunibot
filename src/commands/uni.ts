import { padEnd } from 'lodash';
import moment from 'moment-timezone';

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
    const now = moment.tz('Asia/Singapore');
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
        const currentPeriodEnd = moment.tz(
          currentPeriod.date_end,
          'Asia/Singapore'
        );

        message += `\`${padEnd(currentPeriod.type, 10)}\` ${moment
          .tz(currentPeriodEnd, 'Asia/Singapore')
          .diff(now, 'days')}d remaining _(till ${currentPeriodEnd.format(
          'D MMM YYYY'
        )})_\n`;
      }

      if (nextPeriod) {
        message += `\`${padEnd(nextPeriod.type, 10)}\` in ${moment
          .tz(nextPeriod.date_start, 'Asia/Singapore')
          .diff(now, 'days')}d\n`;
      }

      if (
        currentPeriod?.type !== 'vacation' &&
        nextPeriod?.type !== 'vacation'
      ) {
        message += `\`vacation  \` in ${daysToVacation}d`;
      }

      message += '\n\n';
    }

    ctx.replyWithMarkdown(message);
  },
};

export default uni;
