var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.config.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    
    mode: 'development',
    devtool: 'eval',
    
    output: {
        path: path.join(process.cwd(), '/public'),
        publicPath: '/',
        filename: 'index_bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        hot: true,
        port: process.env.PORT || 3000
    }
});