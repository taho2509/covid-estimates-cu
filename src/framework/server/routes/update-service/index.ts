import { Middleware } from 'koa'
import Response from '../../../../domain/entities/response'
import HistoricController from '../../../../interfaces/controllers/historic'
import Daily from '../../../../domain/entities/daily'

const updateService: Middleware = async (ctx): Promise<void> => {
  let response: Response = await new HistoricController().setDaily(ctx.request as { body: Daily })

  ctx.body = response.body
}

export default updateService
