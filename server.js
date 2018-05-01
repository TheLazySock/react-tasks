const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === 'development') {
    const config = require('./config');
    const compiler = webpack(config);

    console.log(process.env.NODE_ENV);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }));
}


app.listen(port, () => console.log(`Listening on port ${port}`));