'use strict'

const path = require('path')
const express = require('express')
const helmet = require('helmet')
const favicon = require('serve-favicon')
const cors = require('cors')
const _ = require('lodash')

module.exports = function createExpress(options) {
  return new Promise((resolve, reject) => {
    const { log } = options
    const app = express()
    const hello = 'hello'

    app.use(helmet())
    app.use(favicon(path.join(__dirname, '..', 'favicon.ico')))
    app.use(cors())
    if (app.get('env') === 'development') {
      app.use((request, response, next) => {
        log.info('request', _.pick(request, 'path', 'method', 'params', 'query', 'headers'))
        next()
      })
    }
    app.get('/', (reqest, response) => {
      response.send({
        hello
      })
    })
    app.get('/:template', (reqest, response) => {
      response.send({
        hello,
        template: reqest.params.template
      })
    })
    if (!app) {
      reject(Error('no app'))
    }
    resolve(app)
  })
}
