const config = require('./webpack.config')

const webpack = require('webpack')

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  })
)

config.output.filename = 'bundled.min.js'

module.exports = config