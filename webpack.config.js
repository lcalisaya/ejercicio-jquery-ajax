const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
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
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: 'errors-only',
    hot: true
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
    new ExtractTextPlugin({
      filename: "main.css",
      disable: true //Porque no funciona con HMR
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
