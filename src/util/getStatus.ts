import axios from 'axios';
import { find, findLast, first, flatMap, last } from 'lodash';
import moment, { Moment } from 'moment-timezone';

const UNIVERSITIES: Record<string, string> = {
  DigiPen: 'https://foldaway.github.io/school-semesters/DigiPen.json',
  NTU: 'https://foldaway.github.io/school-semesters/NTU.json',
  NUS: 'https://foldaway.github.io/school-semesters/NUS.json',
  SMU: 'https://foldaway.github.io/school-semesters/SMU.json',
  SUSS: 'https://foldaway.github.io/school-semesters/SUSS.json',
  SUTD: 'https://foldaway.github.io/school-semesters/SUTD.json',
};

const getTermBounds = (term: SchoolSemesters.Term) => {
  return {
    date_start: first(term.periods)?.date_start,
    date_end: last(term.periods)?.date_end,
  };
};

const getDaysToPeriod = (
  date: Moment,
  term: SchoolSemesters.Term,
  periodType: SchoolSemesters.PeriodType
) => {
  const period = find(term.periods, (period) => period.type === periodType);

  if (!period) {
    throw new Error(`no ${periodType} period!`);
  }

  return moment.tz(period.date_start, 'Asia/Singapore').diff(date, 'days');
};

const getDaysToVacation = (date: Moment, term: SchoolSemesters.Term) => {
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
    term: SchoolSemesters.Term;
    daysToVacation: number;
    prevPeriod: SchoolSemesters.Period | null;
    currentPeriod: SchoolSemesters.Period | null;
    nextPeriod: SchoolSemesters.Period | null;
  };
};

export default async function getStatus(
  date = moment.tz('Asia/Singapore')
): Promise<Status> {
  const result: Status = {};

  for (const [, url] of Object.entries(UNIVERSITIES)) {
    const response = await axios.get<SchoolSemesters.Uni>(url);

    let currentTerm: SchoolSemesters.Term | null = null;
    let prevPeriod: SchoolSemesters.Period | null = null;
    let nextPeriod: SchoolSemesters.Period | null = null;
    let currentPeriod: SchoolSemesters.Period | null = null;

    const termsFlattened = flatMap(response.data.terms, (term) => {
      return term.periods.map((period) => {
        const termPeriodPair = {
          term,
          period,
        };

        return termPeriodPair;
      });
    });

    let prevPeriodIndex = -1;
    let currentPeriodIndex = -1;

    for (const [index, termPeriodPair] of termsFlattened.entries()) {
      const { term, period } = termPeriodPair;

      if (date.isAfter(moment.tz(period.date_end, 'Asia/Singapore'), 'days')) {
        prevPeriod = period;
        prevPeriodIndex = index;
        currentTerm = term;
      } else if (
        date.isBetween(
          moment.tz(period.date_start, 'Asia/Singapore'),
          moment.tz(period.date_end, 'Asia/Singapore'),
          'days',
          '[]'
        )
      ) {
        currentPeriod = period;
        currentPeriodIndex = index;
        currentTerm = term;
      } else {
        break;
      }
    }

    const nextPeriodIndex =
      currentPeriodIndex === -1 ? prevPeriodIndex + 1 : currentPeriodIndex + 1;

    nextPeriod = termsFlattened[nextPeriodIndex]?.period ?? null;

    if (currentTerm != null) {
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
