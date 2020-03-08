import Registry from 'undertaker-registry';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import plumber from 'gulp-plumber';
import config from '../config';

class MyTask extends Registry {
  constructor() {
    super();
    this.init();
  }

  init() {
    gulp.task('scss', () => {
      return gulp.src(config.develop.cssSrc)
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest(config.develop.destCss));
    });

    gulp.task('build:scss', () => {
      return gulp.src(config.build.cssSrc)
              .pipe(plumber())
              .pipe(sassGlob())
              .pipe(sass())
              .pipe(gulp.dest(config.build.destDeployCss));
    });
  }
}

export default new MyTask();