import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks/', {
  recurse: true
});

gulp.task('build', gulp.series(
  'clean',
  'sprite:png',
  // 'sprite:svg',
  'assets',
  'styles',
  'test',
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
  // 'favicon',
  'htmlComb',
  'sizeReport'));


gulp.task('demo', gulp.series('build:production', 'serve'));

gulp.task('default',
  gulp.series('build', gulp.parallel('serve', 'watch'))
);