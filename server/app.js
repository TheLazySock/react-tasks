const express = require('express'); //eslint-disable-line

const app = express();

// На все require линтер ругается, т.к. это не es6, поэтому я просто выключил линии.
if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); //eslint-disable-line
    const webpackDevMiddleware = require('webpack-dev-middleware'); //eslint-disable-line
    const webpackHotMiddleware = require('webpack-hot-middleware'); //eslint-disable-line
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware'); //eslint-disable-line
    const config = require('../config'); //eslint-disable-line

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config[0].output.publicPath,
    }));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
} else {
    const serverRenderer = require('../dist/js/serverRenderer').default; //eslint-disable-line
    app.use(express.static('dist'));
    app.use(serverRenderer());
}

module.exports = app;
