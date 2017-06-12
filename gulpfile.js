'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const requireDir = require('require-dir');

requireDir('./gulp/tasks/', {
  recurse: true
});

gulp.task('test', function() {
  gulp.src('./_src/__test__/test-sass.js', {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }))
});

gulp.task('build', gulp.series(
  'clean',
  'sprite:png',
  // 'sprite:svg',
  'assets',
  'styles',
  gulp.parallel('imagemin', 'webpack', 'pug')
));


gulp.task('build:production', gulp.series(
  'build',
  'revAssets',
  'revUpdateReferences',
  'updateHtml',
  'revStyles',
  'updateHtml',
  'revScripts',
  'updateHtml',
  'favicon',
  'htmlComb',
  'zip',
  'sizeReport'));


gulp.task('demo', gulp.series('build:production', 'serve'));


gulp.task('default',
  gulp.series('build', gulp.parallel('serve', 'watch'))
);