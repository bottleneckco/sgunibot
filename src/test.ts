import padEnd from 'lodash/padEnd';
import moment from 'moment-timezone';

import getStatus from './getStatus';

async function run() {
  const now = moment();

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

    message += `*${uni}*\n`;
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

      message += '`';
      message += padEnd(currentPeriod.type, 9);
      message += '`';
      message += ' ';
      message += '(ongoing, ';
      message += moment.tz(currentPeriodEnd, 'Asia/Singapore').from(now, true);
      message += ' to go)';
      message += '\n';
    }

    if (nextPeriod) {
      message += '`';
      message += padEnd(nextPeriod.type, 9);
      message += '`';
      message += ' ';
      message += '(';
      message += moment.tz(nextPeriod.date_start, 'Asia/Singapore').from(now);
      message += ')';
      message += '\n';
    }

    if (currentPeriod?.type !== 'vacation' && nextPeriod?.type !== 'vacation') {
      message += `\`vacation \` (in ${daysToVacation} days)`;
    }

    message += '\n\n';
  }

  console.log(message);
}

run()
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
