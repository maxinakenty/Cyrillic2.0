import gulp from 'gulp';
import __paths from '../../paths.config';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

import path from 'path';
import revNapkin from 'gulp-rev-napkin';
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('revStyles', () => {
  return gulp.src(path.join(__paths.root.dist, '/**/*.css'))
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.rev(),
        gulp.dest(__paths.root.dist),
        revNapkin({
          verbose: false
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(__paths.root.manifest)))
    );
});