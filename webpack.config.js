const path = require('path') // 处理路径
const webpack = require('webpack')
const src = path.resolve(__dirname, './src')
const dist = path.resolve(__dirname, './disc')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: src + '/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: dist + '/assets'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 2333,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
