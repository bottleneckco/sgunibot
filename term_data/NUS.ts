import { Uni } from './types';

const NUS: Uni = {
  name: 'National University of Singapore',
  terms: [
    {
      label: 'AY2020/2021 Semester 1',
      periods: [
        {
          type: 'class',
          date_start: '2020-08-10',
          date_end: '2020-09-18',
        },
        {
          type: 'recess',
          date_start: '2020-09-19',
          date_end: '2020-09-27',
        },
        {
          type: 'class',
          date_start: '2020-09-28',
          date_end: '2020-11-13',
        },
        {
          type: 'recess',
          date_start: '2020-11-14',
          date_end: '2020-11-20',
        },
        {
          type: 'exam',
          date_start: '2020-11-21',
          date_end: '2020-12-05',
        },
        {
          type: 'vacation',
          date_start: '2020-12-06',
          date_end: '2021-01-10',
        },
      ],
    },
    {
      label: 'AY2020/2021 Semester 2',
      periods: [
        {
          type: 'class',
          date_start: '2021-01-11',
          date_end: '2021-02-19',
        },
        {
          type: 'recess',
          date_start: '2021-02-20',
          date_end: '2021-02-28',
        },
        {
          type: 'class',
          date_start: '2021-03-01',
          date_end: '2021-04-16',
        },
        {
          type: 'recess',
          date_start: '2021-04-17',
          date_end: '2021-04-23',
        },
        {
          type: 'exam',
          date_start: '2021-04-24',
          date_end: '2021-05-08',
        },
        {
          type: 'vacation',
          date_start: '2021-05-09',
          date_end: '2021-08-01',
        },
      ],
    },
  ],
};

export default NUS;
