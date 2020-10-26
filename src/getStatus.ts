import { find, findLast, first, last } from 'lodash';
import moment, { Moment } from 'moment';

import DigiPen from '../term_data/DigiPen';
import NTU from '../term_data/NTU';
import NUS from '../term_data/NUS';
import SMU from '../term_data/SMU';
import { Period, PeriodType, Term } from '../term_data/types';

const UNIVERSITIES = [SMU, NUS, NTU, DigiPen];

const getTermBounds = (term: Term) => {
  return {
    date_start: first(term.periods)?.date_start,
    date_end: last(term.periods)?.date_end,
  };
};

const getDaysToPeriod = (date: Moment, term: Term, periodType: PeriodType) => {
  const period = find(term.periods, (period) => period.type === periodType);

  if (!period) {
    throw new Error(`no ${periodType} period!`);
  }

  return moment(period.date_start).diff(date, 'days');
};

const getDaysToVacation = (date: Moment, term: Term) => {
  const vacation = findLast(
    term.periods,
    (period) => period.type === 'vacation'
  );

  if (!vacation) {
    throw new Error('this term has no vacation');
  }

  return moment(vacation.date_start).diff(date, 'days');
};

type Status = {
  [uni: string]: {
    term: Term;
    daysToVacation: number;
    prevPeriod: Period | null;
    currentPeriod: Period | null;
    nextPeriod: Period | null;
  };
};

export default function getStatus(date = moment()): Status {
  const result: Status = {};

  for (const school of UNIVERSITIES) {
    let currentTerm: Term | null = null;
    let prevPeriod: Period | null = null;
    let nextPeriod: Period | null = null;
    let currentPeriod: Period | null = null;

    for (const term of school.terms) {
      const termBounds = getTermBounds(term);

      if (date.isBetween(termBounds.date_start, termBounds.date_end, 'days')) {
        currentTerm = term;
      }

      for (const [index, period] of term.periods.entries()) {
        if (date.isBetween(period.date_start, period.date_end, 'day')) {
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
      result[school.name] = {
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
