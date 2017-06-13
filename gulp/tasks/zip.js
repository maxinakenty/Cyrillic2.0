import gulp from 'gulp';
import zip from 'gulp-zip';
import __paths from '../paths.config';

gulp.task('zip', () => {
  return gulp.src(__paths.dist.all)
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest(__paths.root.dist));
});