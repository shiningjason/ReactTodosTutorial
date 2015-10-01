import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.dev.config';

const devServer = new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});

devServer.listen(8080, 'localhost', (err) => {
  if (err) console.log(err);
  console.log('Listening at localhost:8080');
});
