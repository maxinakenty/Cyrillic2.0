'use strict';

const gulp = require('gulp');
const __paths = require('../../paths.config');

const $ = require('gulp-load-plugins')();
// connect the plugin so ($. == gulp + name of plugin) gulp-if == $.if, gulp-sass == $.sass etc

const combine = require('stream-combiner2').obj; // Handle errors
const path = require('path');
const revNapkin = require('gulp-rev-napkin');

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
        revNapkin({
          verbose: false
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(__paths.root.manifest)))
    );
});