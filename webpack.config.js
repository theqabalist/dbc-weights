/*eslint camelcase: off*/
"use strict";
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[hash].js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader", query: {compact: false}}
        ]
    },
    plugins: [new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: {baseDir: [path.resolve(__dirname, "dist")]}
    }), new CopyPlugin([
            {from: "./src/css/styles.css"}
        ]), new HtmlWebpackPlugin({template: "./src/ejs/index.ejs"})]
};
