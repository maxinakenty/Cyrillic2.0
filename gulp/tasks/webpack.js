import gulp from 'gulp';
import webpack from 'webpack';
import wpcfg from '../../webpack.config.babel';

gulp.task('webpack', cb => {
  webpack(wpcfg, (err, stats) => {
    if (err) {
      cb(err);
    }
    console.log(stats.toString({
      colors: true
    }));
    cb();
  });
});