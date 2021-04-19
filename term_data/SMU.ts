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
    {
      label: 'AY2021-22 Term 1',
      periods: [
        {
          type: 'class',
          date_start: '2021-08-16',
          date_end: '2021-10-03',
        },
        {
          type: 'recess',
          date_start: '2021-10-04',
          date_end: '2021-10-10',
        },
        {
          type: 'class',
          date_start: '2021-10-11',
          date_end: '2021-11-21',
        },
        {
          type: 'exam',
          date_start: '2021-11-22',
          date_end: '2021-12-03',
        },
        {
          type: 'vacation',
          date_start: '2021-11-06',
          date_end: '2022-01-09',
        },
      ],
    },
    {
      label: 'AY2021-22 Term 2',
      periods: [
        {
          type: 'class',
          date_start: '2022-01-10',
          date_end: '2022-02-27',
        },
        {
          type: 'recess',
          date_start: '2022-02-28',
          date_end: '2022-03-06',
        },
        {
          type: 'class',
          date_start: '2022-03-07',
          date_end: '2022-04-17',
        },
        {
          type: 'exam',
          date_start: '2022-04-18',
          date_end: '2022-05-01',
        },
        {
          type: 'vacation',
          date_start: '2022-05-02',
          date_end: '2022-08-14',
        },
      ],
    },
  ],
};

export default SMU;
