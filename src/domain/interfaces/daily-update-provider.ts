import Daily from '../entities/daily'

export default interface DailyUpdateProvider {
  update(daily: Daily): Promise<boolean>
}
