import { Uni } from './types';

const DigiPen: Uni = {
  name: 'DigiPen Institute of Technology Singapore',
  terms: [
    {
      label: 'AY2020/21 Fall 2020',
      periods: [
        {
          type: 'class',
          date_start: '2020-09-07',
          date_end: '2020-12-06',
        },
        {
          type: 'exam',
          date_start: '2020-12-07',
          date_end: '2020-12-20',
        },
        {
          type: 'vacation',
          date_start: '2020-12-19',
          date_end: '2021-01-10',
        },
      ],
    },
    {
      label: 'AY2020/21 Spring 2021',
      periods: [
        {
          type: 'class',
          date_start: '2021-01-11',
          date_end: '2021-04-11',
        },
        {
          type: 'exam',
          date_start: '2021-04-12',
          date_end: '2021-04-25',
        },
        {
          type: 'vacation',
          date_start: '2021-04-24',
          date_end: '2021-05-09',
        },
      ],
    },
    {
      label: 'AY2020/21 Summer 2021',
      periods: [
        {
          type: 'class',
          date_start: '2021-05-10',
          date_end: '2021-08-08',
        },
        {
          type: 'exam',
          date_start: '2021-08-09',
          date_end: '2021-08-20',
        },
        {
          type: 'vacation',
          date_start: '2021-08-21',
          date_end: '2021-09-06',
        },
      ],
    },
  ],
};

export default DigiPen;
