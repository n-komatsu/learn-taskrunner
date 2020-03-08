import Registry from 'undertaker-registry';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import config from '../config';

class MyTask extends Registry {
  constructor() {
    super();
    this.init();
  }

  init() {
    const opts = {
      pretty: true,
    };

    gulp.task('pug', () => {
      return gulp.src(config.develop.watchHtml)
        .pipe(plumber())
        .pipe(pug(opts))
        .pipe(gulp.dest(config.develop.destHtml));
    });

    gulp.task('build:pug', () => {
      return gulp.src(config.build.htmlSrc)
        .pipe(plumber())
        .pipe(pug(opts))
        .pipe(gulp.dest(config.build.destDeployHtml))
    });
  }
}

export default new MyTask();