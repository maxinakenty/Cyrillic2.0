import gulp from 'gulp';
import __paths from '../paths.config';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import pngquant from 'imagemin-pngquant';


gulp.task('imagemin', () => {
  return gulp.src(__paths.src.imagemin)
    .pipe($.changed(__paths.dist.img))
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(__paths.dist.img));
});