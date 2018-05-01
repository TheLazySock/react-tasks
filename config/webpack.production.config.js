const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.config'), {
    mode: 'production',
    devtool: 'none',

    devServer: {
        contentBase: '../dist'
    },
});