const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/main.js',
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
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Bienvenida de Osos!',
    hash: true,
    template: './src/index.ejs'
  }),
  new HtmlWebpackPlugin({
      filename: 'social.html',
      template: 'src/social.ejs'
    }),
  new ExtractTextPlugin("main.css")
  ]
}
