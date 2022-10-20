const assert = require('assert')
const isEmpty = require('../isEmpty')

describe('check numbers', () => {
  assert.strictEqual(isEmpty(0), false)
  assert.strictEqual(isEmpty(1), false)
  assert.strictEqual(isEmpty(2), false)
})

describe('check boolean', () => {
  assert.strictEqual(isEmpty(false), false)
  assert.strictEqual(isEmpty(true), false)
})

describe('check null or undeinfed', () => {
  assert.strictEqual(isEmpty(null), true)
  assert.strictEqual(isEmpty(undefined), true)
})

describe('check true', () => {
  assert.strictEqual(isEmpty(''), true)
})

describe('check arrays', () => {
  assert.strictEqual(isEmpty([]), true)

  assert.strictEqual(isEmpty([0]), false)
})

describe('check object', () => {
  assert.strictEqual(isEmpty({}), true)
})


