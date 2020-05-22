const path = require('path')
const webpack = require('webpack')
//To add a dynamic refernce of our script in index.html
const HtmlWebPackPlugin = require("html-webpack-plugin")
//Inline Styles are very slow,so better use this plugin and the loader
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
//To optimize CSS files
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserWebpackPlugin({}),new OptimizeCSSAssetsWebpackPlugin({})]
    },
    output: {
        libraryTarget: 'var',
        library: 'Client',
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCSSExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCSSExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ]
}
