import HistoricUseCase from '../../../domain/interactors/historic-use-case'
import Response from '../../../domain/entities/response'
import Daily from '../../../domain/entities/daily'
import UpdateDailyCasesUseCase from '../../../domain/interactors/update-daily-cases-use-case'
import MongoProvider from '../../tools/communication/static-provider/mongo-provider'

export default class HistoricController {
  public constructor() {}

  public async get(): Promise<Response> {
    const historic = new HistoricUseCase(new MongoProvider())

    let response: Response = await historic.execute()
    return response
  }

  public async setDaily({ body: daily }: { body: Daily }): Promise<Response> {
    const dailyUseCase = new UpdateDailyCasesUseCase(new MongoProvider())

    let response: Response = await dailyUseCase.execute(daily)
    return response
  }
}
