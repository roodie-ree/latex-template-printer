import Logger from 'bunyan'
import { Request, Response } from 'express'
import { isEmpty, pick } from 'lodash'
import { CallBackFunction } from './interfaces'

export default function sendResult (req: Request, res: Response, log: Logger):
  CallBackFunction {
  return (err, result) => {
    if (err) {
      log.error('client error', pick(req, 'method', 'path', 'query', 'body'), err)

      return res.sendStatus(500)
    }
    if (isEmpty(result)) {
      log.error('found nothing', pick(req, 'method', 'path', 'query', 'body'))

      return res.sendStatus(404)
    }

    return res.json(result)
  }
}
