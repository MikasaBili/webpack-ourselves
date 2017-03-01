const path = require('path'); // 处理路径
const webpack = require('webpack');
const src =  path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './disc')
module.exports = {
  entry: {
    app: src+"/app.js"
  },
  output: {
    filename: 'bundle.js',
    path: dist+"/assets"
  },
  loader: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader','style-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["es2015"]
          }
        }]
      },
      {

      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    port: 2333
  }
}