const path = require('path')

const webpack = require('webpack')

const eslint = require('./.eslintrc.json')

const app_path = path.resolve(__dirname, 'src', 'app')

const sass_path = path.resolve(__dirname, 'src', 'assets', 'sass')

module.exports = {
  entry: [
    path.join(sass_path, 'main.scss'),
    path.join(app_path, 'main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: path.join(__dirname, 'dist'),
    filename: 'bundled.js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      _components: path.join(app_path, 'components'),
      _js: path.join(app_path),
      _sass: path.join(sass_path),
      _npm: path.join(__dirname, 'node_modules'),
      'vue$': path.join(__dirname, 'node_modules', 'vue/dist/vue.common.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 4 versions', 'IE 10']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=dist/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
