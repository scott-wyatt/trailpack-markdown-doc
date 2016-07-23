'use strict'
/* global describe, it */

const assert = require('assert')
const supertest = require('supertest')
// const chai = require('chai')
// chai.use(require('chai-dom'))

describe('MarkdowndocController', () => {
  let request

  before((done) => {
    request = supertest('http://localhost:3000')
    done()
  })

  it('should exist', () => {
    assert(global.app.api.controllers['MarkdowndocController'])
  })

  it('should get root README.md', (done) => {
    request
      .get('/docs/')
      .expect(200)
      .end((err, res) => {
        // console.log(res.text)
        // document.querySelector('#test-').to.have.text('TEST!')
        done(err)
      })
  })
  it('should get sub root README.md', (done) => {
    request
      .get('/docs/test/')
      .expect(200)
      .end((err, res) => {
        // console.log(res.text)
        // document.querySelector('#test-').to.have.text('TEST!')
        done(err)
      })
  })

  it('should get sub root text.md', (done) => {
    request
      .get('/docs/test/test')
      .expect(200)
      .end((err, res) => {
        // console.log(res.text)
        // document.querySelector('#test-').to.have.text('TEST!')
        done(err)
      })
  })
})
