const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader','css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader','sass-loader'],
  publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;

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
        use: cssConfig
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
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
