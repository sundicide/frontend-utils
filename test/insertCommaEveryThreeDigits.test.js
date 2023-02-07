const assert = require('assert')
const insertCommaEveryThreeDigits = require('../insertCommaEveryThreeDigits')

describe('check works well', () => {
  assert.strictEqual(insertCommaEveryThreeDigits('123456'), '123,456')
  assert.strictEqual(insertCommaEveryThreeDigits(123456), '123,456')
})
describe('works well with negative', () => {
  assert.strictEqual(insertCommaEveryThreeDigits('-1000000'), '-1,000,000')
  assert.strictEqual(insertCommaEveryThreeDigits(-1000000), '-1,000,000')
})