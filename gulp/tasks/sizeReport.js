import gulp from 'gulp';
import __paths from '../paths.config';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

gulp.task('sizeReport', () => {
  return gulp.src(__paths.dist.all)
    .pipe($.sizereport({
      gzip: true
    }));
});