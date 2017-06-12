'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');

gulp.task('watch', function() {
  gulp.watch(__paths.watch.pug, gulp.series('pug'));
  gulp.watch(__paths.watch.assets, gulp.series('assets'));
  gulp.watch(__paths.watch.styles, gulp.series('styles'));
});