import bodyParser from 'body-parser'
import Logger from 'bunyan'
import express from 'express'
import helmet from 'helmet'
import { pick } from 'lodash'
import path from 'path'
import favicon from 'serve-favicon'
import deleteTemplate from '../routes/deleteTemplate'
import getTemplate from '../routes/getTemplate'
import listTemplates from '../routes/listTemplates'
import printTemplate from '../routes/printTemplate'
import setTemplate from '../routes/setTemplate'

export default function createExpress (options: { log: Logger }) {
  const { log } = options
  const app = express()

  app.use(helmet())
  app.use(favicon(path.join(__dirname, '..', '..', 'public', 'favicon.ico')))
  app.use(bodyParser.json())
  app.use((request, _, next) => {
    log.info(`${request.method} ${request.path}`,
      pick(request, 'query', 'body'))
    next()
  })
  app.get('/template', listTemplates(log))
  app.get('/template/:name', getTemplate(log))
  app.put('/template/:name', setTemplate(log))
  app.post('/template/:name', printTemplate(log))
  app.delete('/template/:name', deleteTemplate(log))

  return app
}
