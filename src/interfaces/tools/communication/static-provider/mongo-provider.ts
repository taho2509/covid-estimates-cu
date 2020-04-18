import mongoose from 'mongoose'
import DataProvider from '../../../../domain/interfaces/data-provider'
import logger from '../../logger'
import config from '../../config/config'
import Historic from '../../../../domain/entities/historic'
import Daily from '../../../../domain/entities/daily'
import DailyUpdateProvider from '../../../../domain/interfaces/daily-update-provider'

export interface DailyDocument extends mongoose.Document, Daily {}

const DailySchema = new mongoose.Schema({
  total: Number,
  day: Number,
  data: {
    a: Number,
    b: Number,
    c: Number,
    d: Number,
  },
  date: Date,
})

const DailyModel = mongoose.model<DailyDocument>('Daily', DailySchema)

mongoose.connect(config.get('MONGO_URI'), { useNewUrlParser: true, useUnifiedTopology: true }, (err): void => {
  if (err) throw err
  logger.info('Connected to mongo db')
})

const findHistoric = (): Promise<mongoose.Document[]> =>
  new Promise((resolve, reject): void => {
    DailyModel.find({}, (err, res): void => {
      if (err) reject(err)
      else resolve(res)
    }).sort({ date: 1 })
  })

const addDaily = (daily: Daily): Promise<boolean> =>
  new Promise((resolve, reject): void => {
    const date = new Date(daily.date + 'T00:00:00.000Z')
    const followingDay = new Date(daily.date + 'T00:00:00.000Z')
    followingDay.setDate(date.getDate() + 1)

    DailyModel.findOne(
      {
        date: { $gte: date, $lt: followingDay },
      },
      (err, res): void => {
        if (err) reject(err)
        if (res) {
          res.update(daily, (err, _res): void => {
            if (err) reject(err)
            else resolve(true)
          })
        } else {
          const model = new DailyModel(daily)
          model.save((err, _res): void => {
            if (err) reject(err)
            else resolve(true)
          })
        }
      },
    )
  })

export default class MongoProvider implements DataProvider, DailyUpdateProvider {
  public async request(): Promise<Historic> {
    const data = await this.makeRequest()
    return {
      latest: data[data.length - 1],
      history: data,
    }
  }

  public async update(daily: Daily): Promise<boolean> {
    try {
      return await addDaily(daily)
    } catch (err) {
      throw err
    }
  }

  private async makeRequest(): Promise<Daily[]> {
    try {
      const data = await findHistoric()

      const parsed: Daily[] = data.map(
        (daily: DailyDocument): Daily => {
          return {
            total: daily.total,
            day: daily.day,
            date: daily.date,
            data: daily.data,
          }
        },
      )
      return parsed
    } catch (error) {
      throw error
    }
  }
}
