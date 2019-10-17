const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    menu: './transition-menu.js'
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: '/\.js$/',
        loader: 'babel-loader',
        exclude: '/node_modules$/'
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './transition-menu.html'
    })
  ],
  devServer: {
    port: 9000,
    index: 'transition-menu.html'
  }
}