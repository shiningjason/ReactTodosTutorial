import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/scripts/main')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEVTOOLS__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/
      },

      {
        test: /\.sass$/,
        loader: 'style!css!sass?indentedSyntax=true&outputStyle=expanded'
      }
    ]
  }
};
