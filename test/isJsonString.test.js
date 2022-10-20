const assert = require('assert')
const isJsonString = require('../isJsonString')

describe('check works well', () => {
  assert.strictEqual(isJsonString('{"a": 1}'), true)
})
describe('wrong Json string', () => {
  assert.strictEqual(isJsonString('11'), false)
})
describe('miss qutation mark', () => {
  assert.strictEqual(isJsonString('{a: 1}'), false)
})
