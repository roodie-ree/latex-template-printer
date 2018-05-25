'use strict'

const http = require('http')
const environment = require('processenv')
const createLogger = require('./lib/createLogger')
const createExpress = require('./lib/createExpress')

process.on('unhandledRejection', error => {
  throw error
})

const log = createLogger()

const port = environment('PORT') || 3000

createExpress({
  log
}).then(app => {
  const server = http.createServer(app)

  server.listen(port, log.info(`Listening on port ${port}`))
})
