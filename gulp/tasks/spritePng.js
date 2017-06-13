import gulp from 'gulp';
import __paths from '../paths.config';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import streamCombiner2 from 'stream-combiner2';
const combine = streamCombiner2.obj;

gulp.task('sprite:png', () => {

  return combine(
    gulp.src(__paths.src.spritePng),
    $.spritesmith({
      imgPath: '../sprites/sprite.png',
      imgName: 'sprite.png',
      // retinaImgName: 'sprite@2x.png',
      // retinaSrcFilter: '**/*@2x.png',
      cssName: '_sprite-png.scss',
      padding: 60,
      algorithm: 'alt-diagonal',
    }),
    $.if('*.scss', gulp.dest(__paths.tmp.styles), gulp.dest(__paths.dist.sprites))
  ).on('error', $.notify.onError());
});