// const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {filename: 'dist/app.js'},
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    plugins: [new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: {baseDir: ['.']}
    })]
};
