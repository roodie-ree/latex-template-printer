'use strict'

import http from 'http'
import createExpress from './lib/createExpress'
import createLogger from './lib/createLogger'

process.on('unhandledRejection', error => {
  throw error
})

const log = createLogger()

const port = process.env.PORT || 3000

const app = createExpress({ log })
const server = http.createServer(app)

server.listen(port, () => log.info(`Listening on http://localhost:${port}`))
