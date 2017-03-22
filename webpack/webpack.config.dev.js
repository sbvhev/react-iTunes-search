const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./base');

webpackConfig.module.rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    'react-hot-loader/webpack',
    'babel-loader'
  ]
});

module.exports = Object.assign({}, webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: false,
    contentBase: path.resolve(__dirname, 'dist/'),
    historyApiFallback: true,
    stats: {
      colors: true,
      timings: true,
      version: true,
      warnings: true
    }
  }
});
