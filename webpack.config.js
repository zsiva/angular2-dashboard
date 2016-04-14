var webpack = require('webpack');
var path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

var bower_dir = __dirname + '/bower_components';
// Webpack Config
var webpackConfig = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'app':       './src/app.ts',
    },

    output: {
        path: './dist',
    },
    resolve: {
        alias: {},
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'], minChunks: Infinity })
    ],

    module: {
        noParse: [],
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
            { test: /\.css$/, loader: 'style!css' },
            {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader'}
        ]
    }

};

//webpackConfig.addVendor('rdash.css', path.join(bower_dir, '/rdash-ui/dist/css/rdash.min.css'));


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    debug: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.join(__dirname, 'node_modules', 'rxjs'),
                    path.join(__dirname, 'node_modules', '@angular2-material'),
                ]
            }
        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ]
    },

    resolve: {
        root: [ path.join(__dirname, 'src') ],
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
