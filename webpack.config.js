const {resolve} = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    './main.js'
    // the entry point of our app
  ],
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader', // used when css not extracted
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                sourceMap: true
              }
            }
          ]
        }
        ))
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true})
  ]
}
