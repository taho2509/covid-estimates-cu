import DataProvider from '../../../../domain/interfaces/data-provider'
import Historic from '../../../../domain/entities/historic'

const data: Historic = {
  latest: {
    total: 726,
    day: 33,
    date: new Date(2020, 4, 12),
    data: {
      a: 0.0161,
      b: 0.18,
      c: -1.4699,
      d: 4.6775,
    },
  },
  history: [
    {
      total: 3,
      day: 1,
      date: new Date(2020, 3, 11),
      data: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      },
    },
    {
      total: 4,
      day: 2,
      date: new Date(2020, 3, 12),
      data: {
        a: 2.25,
        b: 0.287682,
        c: 0,
        d: 0,
      },
    },
    {
      total: 4,
      day: 3,
      date: new Date(2020, 3, 13),
      data: {
        a: 2.80975,
        b: 0.130401,
        c: 0,
        d: 0,
      },
    },
    {
      total: 4,
      day: 4,
      date: new Date(2020, 3, 14),
      data: {
        a: 3.0911,
        b: 0.0759301,
        c: 0,
        d: 0,
      },
    },
    {
      total: 4,
      day: 5,
      date: new Date(2020, 3, 15),
      data: {
        a: 3.26297,
        b: 0.0499991,
        c: 0,
        d: 0,
      },
    },
    {
      total: 5,
      day: 6,
      date: new Date(2020, 3, 16),
      data: {
        a: 3.09156,
        b: 0.0714827,
        c: 0,
        d: 0,
      },
    },
    {
      total: 7,
      day: 7,
      date: new Date(2020, 3, 17),
      data: {
        a: 2.262246,
        b: 0.122952,
        c: 0,
        d: 0,
      },
    },
    {
      total: 11,
      day: 8,
      date: new Date(2020, 3, 18),
      data: {
        a: 1.81606,
        b: 0.20778,
        c: 0,
        d: 0,
      },
    },
    {
      total: 16,
      day: 9,
      date: new Date(2020, 3, 19),
      data: {
        a: 1.20951,
        b: 0.278352,
        c: 0,
        d: 0,
      },
    },
    {
      total: 25,
      day: 10,
      date: new Date(2020, 3, 20),
      data: {
        a: 0.735568,
        b: 0.347634,
        c: 0,
        d: 0,
      },
    },
    {
      total: 35,
      day: 11,
      date: new Date(2020, 3, 21),
      data: {
        a: 0.637863,
        b: 0.363698,
        c: 0,
        d: 0,
      },
    },
    {
      total: 40,
      day: 12,
      date: new Date(2020, 3, 22),
      data: {
        a: 0.99627,
        b: 0.313185,
        c: 0,
        d: 0,
      },
    },
    {
      total: 48,
      day: 13,
      date: new Date(2020, 3, 23),
      data: {
        a: 1.39954,
        b: 0.277079,
        c: 0,
        d: 0,
      },
    },
    {
      total: 57,
      day: 14,
      date: new Date(2020, 3, 24),
      data: {
        a: 1.88511,
        b: 0.24802,
        c: 0,
        d: 0,
      },
    },
    {
      total: 67,
      day: 15,
      date: new Date(2020, 3, 25),
      data: {
        a: 2.5007,
        b: 0.22296,
        c: 0,
        d: 0,
      },
    },
    {
      total: 80,
      day: 16,
      date: new Date(2020, 3, 26),
      data: {
        a: 1.7365,
        b: 0.2464,
        c: 0,
        d: 0,
      },
    },
    {
      total: 119,
      day: 17,
      date: new Date(2020, 3, 27),
      data: {
        a: 1.7285,
        b: 0.2471,
        c: 0,
        d: 0,
      },
    },
    {
      total: 139,
      day: 18,
      date: new Date(2020, 3, 28),
      data: {
        a: 1.7402,
        b: 0.2461,
        c: 0,
        d: 0,
      },
    },
    {
      total: 170,
      day: 19,
      date: new Date(2020, 3, 29),
      data: {
        a: 1.7574,
        b: 0.2446,
        c: 0,
        d: 0,
      },
    },
    {
      total: 186,
      day: 20,
      date: new Date(2020, 3, 30),
      data: {
        a: 1.7982,
        b: 0.2413,
        c: 0,
        d: 0,
      },
    },
    {
      total: 212,
      day: 21,
      date: new Date(2020, 3, 31),
      data: {
        a: 1.7982,
        b: 0.2413,
        c: 0,
        d: 0,
      },
    },
    {
      total: 233,
      day: 22,
      date: new Date(2020, 4, 1),
      data: {
        a: 1.9163,
        b: 0.2328,
        c: 0,
        d: 0,
      },
    },
    {
      total: 269,
      day: 23,
      date: new Date(2020, 4, 2),
      data: {
        a: 1.986,
        b: 0.2284,
        c: 0,
        d: 0,
      },
    },
    {
      total: 288,
      day: 24,
      date: new Date(2020, 4, 3),
      data: {
        a: 2.0712,
        b: 0.2233,
        c: 0,
        d: 0,
      },
    },
    {
      total: 320,
      day: 25,
      date: new Date(2020, 4, 4),
      data: {
        a: 2.1631,
        b: 0.2183,
        c: 0,
        d: 0,
      },
    },
    {
      total: 350,
      day: 26,
      date: new Date(2020, 4, 5),
      data: {
        a: 2.2636,
        b: 0.2133,
        c: 0,
        d: 0,
      },
    },
    {
      total: 396,
      day: 27,
      date: new Date(2020, 4, 6),
      data: {
        a: 2.3654,
        b: 0.2086,
        c: 0,
        d: 0,
      },
    },
    {
      total: 457,
      day: 28,
      date: new Date(2020, 4, 7),
      data: {
        a: 2.4647,
        b: 0.2043,
        c: 0,
        d: 0,
      },
    },
    {
      total: 515,
      day: 29,
      date: new Date(2020, 4, 8),
      data: {
        a: 2.5658,
        b: 0.2003,
        c: 0,
        d: 0,
      },
    },
    {
      total: 564,
      day: 30,
      date: new Date(2020, 4, 9),
      data: {
        a: 2.6733,
        b: 0.1963,
        c: 0,
        d: 0,
      },
    },
    {
      total: 620,
      day: 31,
      date: new Date(2020, 4, 10),
      data: {
        a: 2.7859,
        b: 0.1924,
        c: 0,
        d: 0,
      },
    },
    {
      total: 669,
      day: 32,
      date: new Date(2020, 4, 11),
      data: {
        a: 0.0167,
        b: 0.1536,
        c: -1.1676,
        d: 3.9312,
      },
    },
    {
      total: 726,
      day: 33,
      date: new Date(2020, 4, 12),
      data: {
        a: 0.0161,
        b: 0.18,
        c: -1.4699,
        d: 4.6775,
      },
    },
  ],
}

export default class StaticProvider implements DataProvider {
  public async request(): Promise<Historic> {
    return data
  }
}
