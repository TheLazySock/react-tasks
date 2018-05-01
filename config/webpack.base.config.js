const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../src'),
    entry: './app',
    // mode: options.mode === 'production' ? 'production' : 'development',
    // devtool: options.mode === 'production' ? 'none' : 'source-map',
    // devServer: {
    //     contentBase: '../dist'
    // },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        // alias: {
        //     '@': path.resolve(__dirname, './src')
        // }
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React Tasks App',
            template: './index.html'
        })
    ]
}