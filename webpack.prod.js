const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/App.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'src/js/bundle.js',
    },
    optimization: {
        noEmitOnErrors: true,
        namedModules: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/views'),
                use: ['raw-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({options: {}}),
        new MiniCssExtractPlugin({
            filename: 'src/css/style.css',
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'public/img'),
            },
        ]),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './index.html'),
            filename: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
};
