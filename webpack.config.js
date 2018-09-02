'use srtict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules:[
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader','less-loader']
      }
    ]
  },
  watch: true
};
