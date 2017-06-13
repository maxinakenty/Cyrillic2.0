import __paths from './paths.config';
import autoprefixer from 'autoprefixer';
import short from 'postcss-short';
import clearfix from 'postcss-clearfix';
import inlineSvg from 'postcss-inline-svg';
import flexbugs from 'postcss-flexbugs-fixes';
import assets from 'postcss-assets';
import packer from 'css-mqpacker';

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