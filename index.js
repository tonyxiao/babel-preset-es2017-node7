'use strict'

// https://kangax.github.io/compat-table/es6/

module.exports = {
  presets: [
    // For react server side rendering stuff. Really optional, consider leaving out
    require('babel-preset-react'),
    // Technically react preset already includes flow. But we will include for anyways
    // for clarity and since react is optional
    require('babel-preset-flow'),
  ],
  plugins: [
    // preset-es2015 (originall via babel-preset-es2017-node7)
    require('babel-plugin-transform-es2015-modules-commonjs'),
    
    // preset-es2017 (originall via babel-preset-es2017-node7)
    require('babel-plugin-syntax-trailing-function-commas'),

    // stage 0
    require('babel-plugin-transform-do-expressions'),
    require('babel-plugin-transform-function-bind'),

    // stage 1
    require('babel-plugin-transform-decorators'),
    require('babel-plugin-transform-export-extensions'),

    // stage 2
    require('babel-plugin-syntax-dynamic-import'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-unicode-property-regex'),

    // stage 3
    require('babel-plugin-transform-object-rest-spread'),
    // babel-plugin-transform-async-generator-functions because node 7.6+ natively supports generator
  ],
}
