const merge = require('webpack-merge'); // eslint-disable-line

module.exports = merge(require('./webpack.base.config'), {
    mode: 'production',
    devtool: 'none',

    devServer: {
        contentBase: '../dist',
    },
});
