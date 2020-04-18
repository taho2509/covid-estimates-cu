import Interactor from './interactor'
import Response from '../entities/response'
import DailyUpdateProvider from '../interfaces/daily-update-provider'
import Daily from '../entities/daily'

export default class UpdateDailyCasesUseCase implements Interactor {
  public constructor(private readonly updateProvider: DailyUpdateProvider) {}
  public async execute(daily: Daily): Promise<Response> {
    const response = await this.updateProvider.update(daily)
    return { body: response }
  }
}
