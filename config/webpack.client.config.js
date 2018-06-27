const webpack = require('webpack'); // eslint-disable-line
const merge = require('webpack-merge'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const base = require('./webpack.base.config.js'); // eslint-disable-line

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = merge(base, {
    name: 'client',
    target: 'web',

    entry: [
        isDevMode && 'webpack-hot-middleware/client',
        '../src/index.jsx',
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.css$/,
                include: /src/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
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
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        isDevMode && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ].filter(Boolean),
});
