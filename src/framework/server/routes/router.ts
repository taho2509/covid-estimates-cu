import Router from 'koa-router'
import healthService from './health-service'
import historicService from './historic-service'
import updateService from './update-service'

const router: Router = new Router({
  prefix: '/v1.0.0',
})

router.get('/health', healthService)
router.get('/historic', historicService)
router.post('/dailyUpdate', updateService)

export default router
