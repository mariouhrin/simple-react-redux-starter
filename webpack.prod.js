const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

const extractStyleSCSS = new ExtractTextPlugin('style.css')

module.exports = merge(common, {
  entry: ['./src/js/index.js'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractStyleSCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 2, minimize: true },
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    extractStyleSCSS,
  ],
})
