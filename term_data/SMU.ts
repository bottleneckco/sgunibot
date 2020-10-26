import { Uni } from './types';

const SMU: Uni = {
  name: 'Singapore Management University',
  terms: [
    {
      label: 'AY2020-21 Term 1',
      periods: [
        {
          type: 'class',
          date_start: '2020-08-17',
          date_end: '2020-10-04',
        },
        {
          type: 'recess',
          date_start: '2020-10-05',
          date_end: '2020-10-11',
        },
        {
          type: 'class',
          date_start: '2020-10-12',
          date_end: '2020-11-22',
        },
        {
          type: 'exam',
          date_start: '2020-11-23',
          date_end: '2020-12-06',
        },
        {
          type: 'vacation',
          date_start: '2020-12-07',
          date_end: '2021-01-10',
        },
      ],
    },
    {
      label: 'AY2020-21 Term 2',
      periods: [
        {
          type: 'class',
          date_start: '2021-01-11',
          date_end: '2021-02-28',
        },
        {
          type: 'recess',
          date_start: '2021-03-01',
          date_end: '2021-03-07',
        },
        {
          type: 'class',
          date_start: '2021-03-08',
          date_end: '2021-04-18',
        },
        {
          type: 'exam',
          date_start: '2021-04-19',
          date_end: '2021-05-02',
        },
        {
          type: 'vacation',
          date_start: '2021-05-03',
          date_end: '2021-08-15',
        },
      ],
    },
  ],
};

export default SMU;
