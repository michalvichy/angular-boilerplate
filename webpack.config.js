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
  devServer: {
    inline: true,
    port: 8888,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loaders: ['html-loader'],
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true,
        }
      }
    })
  ],
};
