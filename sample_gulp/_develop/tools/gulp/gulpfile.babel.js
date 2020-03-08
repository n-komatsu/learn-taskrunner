import gulp from 'gulp';
import config from './config';
import StaticServer from './tasks/staticServer';
import Html from './tasks/html';
import Scss from './tasks/scss';
import Copy from './tasks/copy';

gulp.registry(StaticServer);
gulp.registry(Html);
gulp.registry(Scss);

gulp.task('watch', () => {
  gulp.watch(config.develop.watchHtml, gulp.series('pug'));
  gulp.watch(config.develop.watchCss, gulp.series('scss'));
  gulp.watch(config.develop.watchAssets, gulp.series('copy:assets'));
});
gulp.task('default', gulp.parallel('pug', 'scss', gulp.series('serve', 'watch')));
gulp.task('build', gulp.series('build:pug', 'build:scss', 'build:assets'));