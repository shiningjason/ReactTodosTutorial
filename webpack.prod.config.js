var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'src/scripts/main')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.sass$/,
        loader: 'style!css!sass?indentedSyntax=true&outputStyle=expanded'
      }
    ]
  }
};
