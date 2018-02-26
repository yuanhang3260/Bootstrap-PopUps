'use strict'
const path = require('path')
const webpack = require('webpack');

module.exports = {
  context: path.resolve(),

  entry: {
    popups: path.resolve(__dirname, '../js/popups.js'),
  },

  output: {
    path: path.resolve(__dirname, '../dist/prod/'),
    filename: '[name].dist.js',

    library: 'popups',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },

  externals: {
    jquery: {
      root: 'jQuery',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
};