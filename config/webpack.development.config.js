const merge = require('webpack-merge'); // eslint-disable-line

module.exports = merge(require('./webpack.base.config'), {
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        contentBase: '../dist',
        historyApiFallback: true,
        publicPath: '/',
    },
});
