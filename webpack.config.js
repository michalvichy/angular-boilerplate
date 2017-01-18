const webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  }
};
