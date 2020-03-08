import path from 'path';
import webpack from 'webpack';

const devOutputPath = path.resolve(__dirname, '../../../_pages/assets/js');
const prodOutputPath = path.resolve(__dirname, '../../../_dist/assets/js');

const config = {
  entry: {
    index: ['@babel/polyfill','./_develop/js/index.js'],
  },
  output: {
    path: devOutputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ],
  },
};

export default function(env, argv) {
  if(argv.mode === 'development') {
    // config.devtool = 'source-map';
  } else if(argv.mode === 'production') {
    config.output.path = prodOutputPath;
  }

  return config;
}