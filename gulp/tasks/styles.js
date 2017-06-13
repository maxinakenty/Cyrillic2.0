import gulp from 'gulp';
import __paths from '../paths.config';
import processors from '../postcss.config';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('styles', () => {
  return combine(
    gulp.src(__paths.src.styles.main),
    $.if(IS_DEVELOPMENT, $.sourcemaps.init()),
    $.sass(__paths.src.styles.sass),
    $.postcss(processors),
    $.if(IS_DEVELOPMENT, $.sourcemaps.write()),
    $.if(!IS_DEVELOPMENT, combine(
      $.cssnano()
    )),
    $.rename('main.css'),
    gulp.dest(__paths.dist.css)
  ).on('error', $.notify.onError());
});