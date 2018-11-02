let webpack = require('webpack');
let path = require('path');
let inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

    entry: {
        app: [
            './lib/index.ts',
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },

    module: {
        rules: [

            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        })
    ]
};
