'use strict'
const path = require('path')
const webpack = require('webpack');

module.exports = {
  context: path.resolve(),

  entry: {
    app: path.resolve(__dirname, '../js/app.js'),
  },

  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].dev.js',
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
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=20000'
      },
    ]
  },
};