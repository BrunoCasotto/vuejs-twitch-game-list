const config = require('./webpack.config')

const webpack = require('webpack')

config.devtool = 'source-map'

config.output.filename = 'bundled.js'

module.exports = config
