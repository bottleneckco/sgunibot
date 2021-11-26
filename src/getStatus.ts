import axios from 'axios';
import { find, findLast, first, last } from 'lodash';
import moment, { Moment } from 'moment-timezone';

const UNIVERSITIES: Record<string, string> = {
  DigiPen: 'https://fourthclasshonours.github.io/school-semesters/DigiPen.json',
  NTU: 'https://fourthclasshonours.github.io/school-semesters/NTU.json',
  NUS: 'https://fourthclasshonours.github.io/school-semesters/NUS.json',
  SMU: 'https://fourthclasshonours.github.io/school-semesters/SMU.json',
  SUSS: 'https://fourthclasshonours.github.io/school-semesters/SUSS.json',
  SUTD: 'https://fourthclasshonours.github.io/school-semesters/SUTD.json',
};

const getTermBounds = (term: App.Term) => {
  return {
    date_start: first(term.periods)?.date_start,
    date_end: last(term.periods)?.date_end,
  };
};

const getDaysToPeriod = (
  date: Moment,
  term: App.Term,
  periodType: App.PeriodType
) => {
  const period = find(term.periods, (period) => period.type === periodType);

  if (!period) {
    throw new Error(`no ${periodType} period!`);
  }

  return moment.tz(period.date_start, 'Asia/Singapore').diff(date, 'days');
};

const getDaysToVacation = (date: Moment, term: App.Term) => {
  const vacation = findLast(
    term.periods,
    (period) => period.type === 'vacation'
  );

  if (!vacation) {
    throw new Error('this term has no vacation');
  }

  return moment.tz(vacation.date_start, 'Asia/Singapore').diff(date, 'days');
};

type Status = {
  [uni: string]: {
    term: App.Term;
    daysToVacation: number;
    prevPeriod: App.Period | null;
    currentPeriod: App.Period | null;
    nextPeriod: App.Period | null;
  };
};

export default async function getStatus(
  date = moment.tz('Asia/Singapore')
): Promise<Status> {
  const result: Status = {};

  for (const [, url] of Object.entries(UNIVERSITIES)) {
    const response = await axios.get<App.Uni>(url);

    let currentTerm: App.Term | null = null;
    let prevPeriod: App.Period | null = null;
    let nextPeriod: App.Period | null = null;
    let currentPeriod: App.Period | null = null;

    for (const term of response.data.terms) {
      const termBounds = getTermBounds(term);

      if (
        date.isBetween(
          moment.tz(termBounds.date_start, 'Asia/Singapore'),
          moment.tz(termBounds.date_end, 'Asia/Singapore'),
          'days',
          '[]'
        )
      ) {
        currentTerm = term;
      }

      for (const [index, period] of term.periods.entries()) {
        if (
          date.isBetween(
            moment.tz(period.date_start, 'Asia/Singapore'),
            moment.tz(period.date_end, 'Asia/Singapore'),
            'days',
            '[]'
          )
        ) {
          currentPeriod = period;
          prevPeriod = term.periods[index - 1];
          nextPeriod = term.periods[index + 1];
          break;
        }
      }

      if (currentTerm !== null) {
        break;
      }
    }

    if (currentTerm !== null) {
      result[response.data.name] = {
        term: currentTerm,
        daysToVacation: getDaysToVacation(date, currentTerm),
        prevPeriod,
        nextPeriod,
        currentPeriod,
      };
    }
  }

  return result;
}
