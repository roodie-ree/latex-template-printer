'use strict'

const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const helmet = require('helmet')
const favicon = require('serve-favicon')
const _ = require('lodash')
const schema = require('./schema')()

module.exports = function createExpress () {
  return new Promise((resolve, reject) => {
    const app = express()

    app.use(helmet())
    app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')))
    app.use('/', graphqlHTTP({
      schema,
      graphiql: true,
    }))
    if (!app) {
      reject(Error('no app'))
    }
    resolve(app)
  })
}
