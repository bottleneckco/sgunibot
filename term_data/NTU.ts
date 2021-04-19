import { Uni } from './types';

const NTU: Uni = {
  name: 'Nanyang Technological University',
  terms: [
    {
      label: 'AY2020-21 Semester 1',
      periods: [
        {
          type: 'class',
          date_start: '2020-08-10',
          date_end: '2020-09-25',
        },
        {
          type: 'recess',
          date_start: '2020-09-28',
          date_end: '2020-10-02',
        },
        {
          type: 'class',
          date_start: '2020-10-05',
          date_end: '2020-11-13',
        },
        {
          type: 'exam',
          date_start: '2020-11-16',
          date_end: '2020-12-04',
        },
        {
          type: 'vacation',
          date_start: '2020-12-05',
          date_end: '2021-01-10',
        },
      ],
    },
    {
      label: 'AY2020-21 Semester 2',
      periods: [
        {
          type: 'class',
          date_start: '2021-01-11',
          date_end: '2021-02-26',
        },
        {
          type: 'recess',
          date_start: '2021-03-01',
          date_end: '2021-03-05',
        },
        {
          type: 'class',
          date_start: '2021-03-08',
          date_end: '2021-04-16',
        },
        {
          type: 'exam',
          date_start: '2021-04-19',
          date_end: '2021-05-07',
        },
        {
          type: 'vacation',
          date_start: '2021-05-08',
          date_end: '2021-08-09',
        },
      ],
    },
    {
      label: 'AY2021-22 Semester 1',
      periods: [
        {
          type: 'class',
          date_start: '2021-08-09',
          date_end: '2021-09-24',
        },
        {
          type: 'recess',
          date_start: '2021-09-27',
          date_end: '2021-10-01',
        },
        {
          type: 'class',
          date_start: '2021-10-04',
          date_end: '2021-11-12',
        },
        {
          type: 'exam',
          date_start: '2021-11-15',
          date_end: '2021-12-03',
        },
        {
          type: 'vacation',
          date_start: '2021-12-04',
          date_end: '2021-01-09',
        },
      ],
    },
    {
      label: 'AY2021-22 Semester 2',
      periods: [
        {
          type: 'class',
          date_start: '2022-01-10',
          date_end: '2022-02-25',
        },
        {
          type: 'recess',
          date_start: '2022-02-28',
          date_end: '2022-03-04',
        },
        {
          type: 'class',
          date_start: '2022-03-07',
          date_end: '2022-04-15',
        },
        {
          type: 'exam',
          date_start: '2022-04-18',
          date_end: '2022-05-06',
        },
        {
          type: 'vacation',
          date_start: '2022-05-07',
          date_end: '2022-08-01',
        },
      ],
    },
  ],
};

export default NTU;
