const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bienvenida de Osos!',
      hash: true,
      template: './src/index.ejs',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'social.html',
      excludeChunks: ['main'],
      hash: true,
      template: 'src/social.ejs'
    }),
    new ExtractTextPlugin("main.css")
  ]
}
