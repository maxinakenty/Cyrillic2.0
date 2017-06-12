'use strict';

const __paths = require('./paths.config');
const autoprefixer = require('autoprefixer');
const short = require('postcss-short');
const clearfix = require('postcss-clearfix');
const inlineSvg = require('postcss-inline-svg');
const flexbugs = require('postcss-flexbugs-fixes');
const assets = require('postcss-assets');
const packer = require('css-mqpacker');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';


module.exports = [
  autoprefixer({
    browsers: [
      'last 2 version', '> 10%'
    ]
  }),
  short,
  clearfix,
  inlineSvg({
    path: __paths.dist.img
  }),
  flexbugs,
  assets({
    basePath: __paths.dist.root,
    loadPaths: ['img/']
  }),
  packer,
];