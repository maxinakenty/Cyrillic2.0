import gulp from 'gulp';
import __paths from '../../paths.config';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

import path from 'path';
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('updateHtml', () => {
  const manifest = gulp.src(path.join(__paths.root.manifest, 'rev-manifest.json'));

  return gulp.src(path.join(__paths.root.dist, '/**/*.html'))
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.revReplace({
          manifest: manifest
        }),
        gulp.dest(__paths.root.dist)))
    );
});