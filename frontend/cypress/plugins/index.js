'use strict';

const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

const webpackOptions = {
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@cy': path.resolve(__dirname, '../'),
            '@modules': path.resolve(__dirname, '../../src/modules'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
};

module.exports = (on, config) => {
    const options = {
        webpackOptions,
    };

    on('file:preprocessor', wp(options));
};
