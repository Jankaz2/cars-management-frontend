const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
/*import path from 'path'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'*/

module.exports = {
    entry: {
        index: './src/index.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].bundle.js'
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            chunks: ['index']
        }),

        //new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'name.css',
            chunkFilename: '[id].css'
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: './src/images', to: './images' }
            ]
        })
    ],

    devtool: 'source-map',
    mode: "development"
}