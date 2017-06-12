'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const __paths = require('../paths.config');

gulp.task('test', () => {
  return gulp.src(__paths.src.test, {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
});