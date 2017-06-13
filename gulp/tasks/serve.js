import gulp from 'gulp';
import __paths from '../paths.config';
import browserSync from 'browser-sync';
const bs = browserSync.create();

gulp.task('serve', () => {
  bs.init({
    open: false,
    notify: false,
    server: __paths.root.dist
  });

  bs.watch([__paths.root.serve]).on('change', bs.reload);
});