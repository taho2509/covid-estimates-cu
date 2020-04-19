import { Middleware } from 'koa'
import jwt from 'koa-jwt'
import config from '../../../../interfaces/tools/config/config'

const jwtMiddleware: Middleware = jwt({ secret: config.get('JWT_TOKEN') }).unless({
  path: [/(\/health|\/historic)/],
})

export default jwtMiddleware
