import gulp from 'gulp';
import del from 'del';
import __paths from '../paths.config';

gulp.task('clean', () => {
  return del([
    __paths.root.dist,
    __paths.root.tmp,
    __paths.root.manifest,
    __paths.favicon,
    __paths.root.debug
  ]);
});