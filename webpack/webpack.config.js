const path = require('path')

const webpack = require('webpack')

const eslint = require('./.eslintrc.json')

const app_path = path.resolve(__dirname, '..', 'src', 'app')

const sass_path = path.resolve(__dirname, '..', 'src', 'assets', 'sass')

module.exports = {
  entry: [
    path.join(sass_path, 'main.scss'),
    path.join(app_path, 'main.js')
  ],
  output: {
    path: path.join(__dirname, '..', 'dist', 'js'),
    publicPath: path.join(__dirname, '..', 'dist')
  },
  resolve: {
    alias: require('./aliases')
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
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
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
