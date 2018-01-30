const path = require('path')

module.exports = {
  _components: path.resolve(__dirname, '..', 'src', 'app', 'components'),
  _services:   path.resolve(__dirname, '..', 'src', 'app', 'services'),
  _helpers:    path.resolve(__dirname, '..', 'src', 'app', 'helpers'),
  _routes:     path.resolve(__dirname, '..', 'src', 'app', 'routes'),
  _sass:       path.resolve(__dirname, '..', 'src', 'assets', 'sass'),
  _npm:        path.join(__dirname, '..', 'node_modules'),
  'vue$':      path.join(__dirname, '..', 'node_modules', 'vue/dist/vue.common.js')
}