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
  ],
};

export default NTU;
