'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const wpcfg = require('../../webpack.config');

gulp.task('webpack', function(cb) {
  webpack(wpcfg, function(err, stats) {
    if (err) {
      cb(err);
    }
    console.log(stats.toString({
      colors: true
    }));
    cb();
  });
});