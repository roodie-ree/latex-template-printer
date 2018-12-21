import Logger from 'bunyan'
import { RequestHandler } from 'express'
import sendResult from '../lib/sendResult'
import { isBlank } from '../lib/validator'

export default function getTemplate (log: Logger): RequestHandler {
  return function getRequest (request, response) {
    const send = sendResult(request, response, log)
    if (isBlank(request.params.name)) {
      send(Error('template name is missing'))
    }
  }
}
