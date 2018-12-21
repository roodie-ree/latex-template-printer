import { expect } from 'chai'
import { describe, it } from 'mocha'
import { isBlank } from './validator'

describe('Validator: isBlank', function () {
  it ('should return true for non-strings', function () {
    const values = [ undefined, null, {}, [], 1, true ]
    values.forEach(value => expect(isBlank(value)).to.equal(true))
  })
  it ('should return true for empty strings', function () {
    const values = [ '', ' ', '    ', ' \n ', '\t \n' ]
    values.forEach(value => expect(isBlank(value)).to.equal(true))
  })
})
