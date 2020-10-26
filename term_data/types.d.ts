export type PeriodType = 'class' | 'recess' | 'exam' | 'vacation';

export interface Period {
  date_start: string;
  date_end: string;
  type: PeriodType;
}

// Used to represent a term or semester
export interface Term {
  label: string;
  periods: Period[];
}

export interface Uni {
  name: string;
  terms: Term[];
}
