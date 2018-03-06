'use strict'

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

exports.default = merge(baseWebpackConfig, {
  entry: {
    popups: './src/popups.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist', 'prod'),
    filename: '[name].dist.js',

    library: 'popups',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    umdNamedDefine: true,
    // globalObject: "this || window",
  },

  devtool: "source-map",

  externals: {
    jquery: {
      root: 'jQuery',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
    },
    bootstrap: {
      root: 'bootstrap',
      commonjs: 'bootstrap',
      commonjs2: 'bootstrap',
      amd: 'bootstrap',
    }
  },
});
