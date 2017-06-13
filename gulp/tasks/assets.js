import gulp from 'gulp';
import __paths from '../paths.config';
import path from 'path';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

gulp.task('assets', () => {
  return gulp.src([
      __paths.src.assets
    ], {
      since: gulp.lastRun('assets')
    })
    .pipe($.changed(__paths.root.dist))
    .pipe(gulp.dest(__paths.root.dist));
});