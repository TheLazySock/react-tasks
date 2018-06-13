const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('../config');
    
    const compiler = webpack(config);
    
    console.log(process.env.NODE_ENV);
    
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }));
} else {
    console.log(process.env.NODE_ENV);
    const serverRenderer = require('../src/serverRenderer').default;

    app.use(express.static('dist'));    
    app.use(serverRenderer());
}

module.exports = app;