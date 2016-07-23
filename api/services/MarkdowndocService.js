'use strict'

const Service = require('trails-service')
// const _ = require('lodash')

/**
 * @module MarkdowndocService
 * @description Markdown Doc Bundler Service
 */
module.exports = class MarkdowndocService extends Service {
  constructor(app) {
    super(app)
    this.markdownDoc = require('markdown-doc-bundler')
  }
}
