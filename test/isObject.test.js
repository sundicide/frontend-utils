const assert = require('assert')
const isObject = require('../isObject')

describe('check works well', () => {
  assert.strictEqual(isObject({}), true)
  assert.strictEqual(isObject({a: 1}), true)

  assert.strictEqual(isObject([]), false)
  assert.strictEqual(isObject(''), false)
})
