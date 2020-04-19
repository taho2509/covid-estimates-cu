import logger from '../../../../interfaces/tools/logger'
import { Middleware } from 'koa'

const loggerMiddleware: Middleware = async (ctx, next): Promise<void> => {
  try {
    logger.info(`new request from ${ctx.state.user.aud} by ${ctx.state.user.sub}`)
  } catch (err) {}
  await next()
  const rt = ctx.response.get('X-Response-Time')
  logger.info(`${ctx.method} ${ctx.url} - ${rt}`)
}

export default loggerMiddleware
