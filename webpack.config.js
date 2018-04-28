const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, options) {
    const isProd = options.mode === 'production';

    return config = {
        context: path.join(__dirname, 'src'),
        entry: './app',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? 'none' : 'source-map',
        devServer: {
            contentBase: './dist'
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },

        resolve: {
            extensions: ['.js' ,'.jsx'],
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
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'React Tasks App',
                template: './index.html'
            })
        ]
    }
}