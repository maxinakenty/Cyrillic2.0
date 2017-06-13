import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

import gulp from 'gulp';
import __paths from '../../paths.config';
import path from 'path';

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('revAssets', () => {
  const ignoreThese = '!' + path.join(__paths.root.dist, '/**/*+(css|js|html)');

  return gulp.src([
      path.join(__paths.dist.all),
      ignoreThese
    ])
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.rev(),
        gulp.dest(__paths.root.dist),
        $.revNapkin({
          verbose: false
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(__paths.root.manifest)))
    );
});