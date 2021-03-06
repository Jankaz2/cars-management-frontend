const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FileLoader = require('file-loader')

module.exports = {
    entry: {
        index: './src/js/index.js',
    },

    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/src',
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
                type: 'asset/inline',
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),

         new CopyWebpackPlugin({
             patterns: [
                 {from: './src/assets', to: './assets'}
             ]
         })
    ],

    devtool: 'source-map',
    mode: "development"
}