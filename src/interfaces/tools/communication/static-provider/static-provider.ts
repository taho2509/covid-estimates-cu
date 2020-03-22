import DataProvider from '../../../../domain/interfaces/data-provider'
import Historic from '../../../../domain/entities/historic'

const data: Historic = {
  latest: {
    total: 35,
    date: new Date(),
    data: {
      a: 0.637863,
      b: 0.363698,
    },
  },
  history: [
    {
      total: 35,
      date: new Date(2020, 3, 11),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 12),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 13),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 14),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 15),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 16),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 17),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 18),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 19),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 20),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
    {
      total: 35,
      date: new Date(2020, 3, 21),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
  ],
}

export default class StaticProvider implements DataProvider {
  public async request(): Promise<Historic> {
    return data
  }
}
