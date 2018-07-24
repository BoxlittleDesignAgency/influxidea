import express from 'express';
//const yields  = require('express-yields');
const fs = require('fs');
import webpack from 'webpack';
import {
  argv
} from 'optimist';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import webpackConfig from '../webpack.config.dev.babel';

//const config = require('../config/config');


const serverRender = require('./serverRender');

const port = process.env.PORT || 8080;
const isDev = process.env.NODE_ENV !== 'production';
const app = express();


const useServerRender = argv.useServerRender === 'true';

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    /**
     * @noInfo Only display warnings and errors to the concsole
     */

    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));

  // Support post requests with body data (doesn't support multipart, use multer)
  // app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cors());
  app.use(logger('combined'));

  /**
   * Hot middleware allows the page to reload automatically while we are working on it.
   * Can be used instead of react-hot-middleware if Redux is being used to manage app state
   */
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  /**
   * If the process is production, just serve the file from the dist folder
   * Build should have been run beforehand
   */
  app.use(express.static(path.resolve(__dirname, '../public')));
}

app.get([
  '*'
], function* (req, res) {
  let index = yield fs.readFile('./public/index.html', 'utf-8');


  if (useServerRender) {
    const appRendered = serverRender(req, res);

    index = index.replace('<%= preloadedApplication %>', appRendered);
  } else {
    index = index.replace('<%= preloadedApplication%>', 'Please wait while we load the Application');
  }

  res.send(index);
});


app.listen(port, '0.0.0.0', (err) => {
  console.log(err || 'Server Online');
  console.info(`App listening on ${port}`);
});