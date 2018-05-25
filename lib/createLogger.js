'use strict'

const bunyan = require('bunyan')

module.exports = function createLogger() {
  return bunyan.createLogger({
    name: 'latex-template-printer'
  })
}
