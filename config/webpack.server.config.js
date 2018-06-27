const merge = require('webpack-merge'); // eslint-disable-line
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line
const base = require('./webpack.base.config'); // eslint-disable-line

module.exports = merge(base, {
    name: 'server',
    target: 'node',
    entry: '../src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /src/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: /src/,
                use: [
                    {
                        loader: 'css-loader/locals',
                        options: {
                            modules: true,
                            localIndentName: '[name]__[local]',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
});
