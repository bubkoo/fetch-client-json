var path    = require('path');
var webpack = require('webpack');

module.exports = {
  cache: false,
  context: __dirname,
  devtool: 'source-map',
  output: {
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
      'packages'
    ],
    extensions: ['', '.js']
  },
  externals: {
    'xml2js': true
  }
};
