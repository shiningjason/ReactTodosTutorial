import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev.config';

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(8080, 'localhost', (err) => {
  if (err) console.log(err);
  console.log('Listening at http://localhost:8080');
});
