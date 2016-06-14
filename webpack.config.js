
var webpack = require('webpack');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            /*
            { test: /\.css$/, loader: "style!css" },
            */
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
        ]
    }
};
