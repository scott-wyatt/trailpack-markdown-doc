/* eslint no-console: [0, { allow: ["log","warn", "error"] }] */
'use strict'

const assert = require('assert')

describe('Trailpack', () => {
  let pack
  before(() => {
    pack = global.app.packs['markdown-doc']
  })
  it('should be loaded into the app.packs collection', () => {
    assert(pack)
  })
  // describe('#validate', () => {
  //   it.skip('TODO test')
  // })
  // describe('#configure', () => {
  //   it.skip('TODO should add routes')
  // })
  // describe('#initialize', () => {
  //   it.skip('TODO test')
  // })
})
