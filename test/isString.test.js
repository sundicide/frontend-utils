const assert = require('assert')
const isString = require('../isString')

describe('check works well', () => {
  assert.strictEqual(isString(''), true)
  assert.strictEqual(isString(1), false)
})
