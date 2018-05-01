const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.config'), {
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        contentBase: '../dist'
    },
});