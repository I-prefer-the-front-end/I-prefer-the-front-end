'use strict';

var path = require('path'),
    webpack = require('webpack'),
    Clean = require('clean-webpack-plugin'),
    Notifier = require('webpack-notifier'),
    Bless = require('bless-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker');

console.log(__dirname);

module.exports = {
    'context': __dirname,

    'entry': './app/core',

    'output': {
        'path': './static/bundled/',
        'filename': 'bundle-[name]-[hash].js'
    },

    'resolve': {
        'extensions': ['.js', '.es6', '.jsx', '.scss', '.css']
    },

    'module': {
        'loaders': [
            {
                'test': /\.js$/,
                'loader': 'uglify-loader!babel-loader'
            },
            {
                'test': /\.scss$/,
                'loader': 'autoprefixer-loader!ruby-sass-loader'
            }
        ]
    },

    'plugins': [
        new Clean([__dirname + '/static/bundled']),
        //new Bless(),
        new Notifier({ 'title': 'Webpack' }),
        new BundleTracker({
            'filename': './webpack-stats.json'
        })
    ]
};
