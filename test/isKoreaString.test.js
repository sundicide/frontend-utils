const assert = require('assert')
const isKoreanString = require('../isKoreanString')

describe('check works well', () => {
  assert.strictEqual(isKoreanString('안녕하세요'), true)
  assert.strictEqual(isKoreanString('스탠다임'), true)

  assert.strictEqual(isKoreanString(''), false)
  assert.strictEqual(isKoreanString('stan다임'), false)
  assert.strictEqual(isKoreanString('abc'), false)
})
