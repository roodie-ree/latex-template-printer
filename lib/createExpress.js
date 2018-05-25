'use strict'

const path = require('path')
const express = require('express')
const helmet = require('helmet')
const favicon = require('serve-favicon')
const cors = require('cors')

module.exports = function createExpress() {
  return new Promise((resolve, reject) => {
    const app = express()
    const hello = 'hello'

    app.use(helmet())
    app.use(favicon(path.join(__dirname, '..', 'favicon.ico')))
    app.use(cors())
    app.get('/', (reqest, response) => {
      response.send({
        hello
      })
    })
    if (!app) {
      reject(Error('no app'))
    }
    resolve(app)
  })
}
