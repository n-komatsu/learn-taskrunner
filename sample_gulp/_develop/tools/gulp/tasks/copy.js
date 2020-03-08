import Registry from 'undertaker-registry';
import gulp from 'gulp';
import config from '../config';
import GulpClient from 'gulp';

class MyTask extends Registry {
  constructor() {
    super();
    this.init();
  }

  init() {
    gulp.task('copy:assets', () => {
      return gulp.src(config.develop.watchAssets)
        .pipe(gulp.dest(config.develop.destAssets));
    });

    gulp.task('build:assets', () => {
      return gulp.src(config.build.assetsSrc)
        .pipe(gulp.dest(config.build.destDeployAssets));
    });
  }
}

export default new MyTask();