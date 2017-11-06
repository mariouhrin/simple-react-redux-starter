const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    './src/js/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ 
          { loader: 'style-loader' }, 
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
