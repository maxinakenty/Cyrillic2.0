import gulp from 'gulp';
import mocha from 'gulp-mocha';
import __paths from '../paths.config';

gulp.task('test', () => {
  return gulp.src(__paths.root.test, {
      read: false
    })
    .pipe(mocha({
      reporter: 'spec'
    }));
});