// const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        server: {baseDir: ['./dist']}
    }), new CopyPlugin([
        {from: 'index.html', to: 'dist/index.html'},
        {from: 'styles.css', to: 'dist/styles.css'}
    ])]
};
