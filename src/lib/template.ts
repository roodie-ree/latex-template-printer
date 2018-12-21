import fs from 'fs'
import path from 'path'

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

  get (callback: any) {
    fs.readFile(this.path, (error, content) => {
      if (error) {
        return callback(error)
      }
      callback(null, Object.assign({}, this, { content }))
    })
  }

  set (callback: any) {

  }

  print (callback: any) {

  }

  delete (callback: any) {

  }
}

module.exports = Template
