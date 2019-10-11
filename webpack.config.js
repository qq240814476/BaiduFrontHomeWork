const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: './index.js'
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
      template: './index.html'
    })
  ],
  devServer: {
    port: 9000,
    index: 'index.html'
  }
}