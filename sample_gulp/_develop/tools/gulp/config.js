import path from 'path';

const config = {
  develop: {
    documentRoot: path.resolve(__dirname, '../../../_pages/'),
    watchHtml: path.resolve(__dirname, '../../../_develop/templates/**/*.pug').replace(/\\/g, '/'),
    cssSrc: path.resolve(__dirname, '../../../_develop/css/style.scss'),
    watchCss: path.resolve(__dirname, '../../../_develop/css/**/*.scss').replace(/\\/g, '/'),
    destHtml: path.resolve(__dirname, '../../../_pages/'),
    destCss: path.resolve(__dirname, '../../../_pages/assets/css'),
    assetsSrc: path.resolve(__dirname, '../../../_develop/assets/**/**.*').replace(/\\/g, '/'),
    watchAssets: path.resolve(__dirname, '../../../_develop/assets/**/**.*').replace(/\\/g, '/'),
    destAssets: path.resolve(__dirname, '../../../_pages/assets/')
  },
  build: {
    htmlSrc: path.resolve(__dirname, '../../../_develop/templates/**/*.pug').replace(/\\/g, '/'),
    cssSrc: path.resolve(__dirname, '../../../_develop/css/style.scss'),
    assetsSrc: path.resolve(__dirname, '../../../_develop/assets/**/**.*').replace(/\\/g, '/'),
    destDeployHtml: path.resolve(__dirname, '../../../_dist/'),
    destDeployCss: path.resolve(__dirname, '../../../_dist/assets/css'),
    destDeployAssets: path.resolve(__dirname, '../../../_dist/assets'),
  }
};

export default config;
