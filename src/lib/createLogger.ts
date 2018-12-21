import Logger from 'bunyan'

export default function createLogger () {
  return Logger.createLogger({
    name: 'latex-template-printer',
  })
}
