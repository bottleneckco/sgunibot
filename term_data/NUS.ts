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
    {
      label: 'AY2021/2022 Semester 1',
      periods: [
        {
          type: 'class',
          date_start: '2021-08-09',
          date_end: '2021-09-17',
        },
        {
          type: 'recess',
          date_start: '2021-09-18',
          date_end: '2021-09-26',
        },
        {
          type: 'exam',
          date_start: '2021-09-27',
          date_end: '2021-10-02',
        },
        {
          type: 'class',
          date_start: '2021-10-04',
          date_end: '2021-11-12',
        },
        {
          type: 'recess',
          date_start: '2021-11-13',
          date_end: '2021-11-29',
        },
        {
          type: 'exam',
          date_start: '2021-11-20',
          date_end: '2021-12-04',
        },
        {
          type: 'vacation',
          date_start: '2021-12-05',
          date_end: '2022-01-09',
        },
      ],
    },
    {
      label: 'AY2021/2022 Semester 2',
      periods: [
        {
          type: 'class',
          date_start: '2022-01-10',
          date_end: '2022-02-18',
        },
        {
          type: 'recess',
          date_start: '2022-02-19',
          date_end: '2022-02-27',
        },
        {
          type: 'exam',
          date_start: '2022-02-28',
          date_end: '2022-03-05',
        },
        {
          type: 'class',
          date_start: '2022-03-07',
          date_end: '2022-04-15',
        },
        {
          type: 'recess',
          date_start: '2022-04-16',
          date_end: '2022-04-22',
        },
        {
          type: 'exam',
          date_start: '2022-04-23',
          date_end: '2022-05-07',
        },
        {
          type: 'vacation',
          date_start: '2022-05-08',
          date_end: '2022-07-31',
        },
      ],
    },
  ],
};

export default NUS;
