import gulp from 'gulp';
import __paths from '../paths.config';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

gulp.task('pug', () => {
  return combine(
    gulp.src(__paths.src.pug),
    $.pug({
      pretty: true,
    }),
    gulp.dest(__paths.root.dist)
  ).on('error', $.notify.onError());
});