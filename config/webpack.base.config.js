const webpack = require('webpack'); // eslint-disable-line
const path = require('path'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isDevMode ? 'source-map' : 'none',
    context: path.join(__dirname, '../src'),

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        contentBase: '../dist',
        historyApiFallback: true,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        !isDevMode && new CleanWebpackPlugin('./dist', { root: path.resolve(__dirname, '../') }),
        isDevMode ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            title: 'React Tasks App',
            template: '../src/index.html',
        }),
    ].filter(Boolean),
};
