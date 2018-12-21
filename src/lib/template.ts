import fs from 'fs'
import path from 'path'
import { CallBackFunction } from './interfaces'

export default class Template {
  name: string
  path: string
  constructor (name: string) {
    if (!(this instanceof Template)) {
      return new Template(name)
    }
    this.name = name
    this.path = path.join('..', '..', 'templates', name)
  }

  getContent (callback: CallBackFunction) {
    fs.readFile(this.path, (error, content) => {
      if (error) {
        return callback(error)
      }
      callback(null, Object.assign({}, this, { content }))
    })
  }

  setContent (content: string, callback: CallBackFunction) {

  }

  print (callback: CallBackFunction) {

  }

  delete (callback: CallBackFunction) {

  }
}

module.exports = Template
