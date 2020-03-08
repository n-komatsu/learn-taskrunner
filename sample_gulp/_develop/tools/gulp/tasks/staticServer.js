import Registry from 'undertaker-registry';
import browserSync from 'browser-sync';
import gulp from 'gulp';

import config from '../config';

class MyTask extends Registry {
  constructor() {
    super();
    this.init();
  }

  init() {
    const server = browserSync.create();
    gulp.task('serve', cb => {
      server.init({
        server: {
          baseDir: config.develop.documentRoot,
          index: 'index.html',
        },
        port: 8000,
      });
      cb();
    });
  }
}

export default new MyTask();