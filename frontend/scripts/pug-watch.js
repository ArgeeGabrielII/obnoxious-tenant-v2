'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const dotenv = require('dotenv');
const plimit = require('p-limit');
const workerpool = require('workerpool');

const pool = workerpool.pool(__dirname + '/render-pug.js', {
    minWorkers: 'max',
});

const parsedENV = dotenv.config().parsed || {};

const watcher = chokidar.watch('src', {
    persistent: true,
});

process.title = 'pug-watch';

let allFiles = {};

watcher.on('add', filePath => _processFile(filePath, 'add'));
watcher.on('change', filePath => _processFile(filePath, 'change'));

function _processFile(filePath, watchEvent) {
    
    if (filePath.match(/\.pug$/)) {
        return _handlePug(filePath, watchEvent);
    }

}

function _handlePug(filePath, watchEvent) {

    if (watchEvent === 'change') {
        if (filePath.match(/pug_include/)) {
            return _renderAllPug();
        }
        return _renderPug(filePath);
    }
    if (!filePath.match(/pug_include/)) {
        allFiles[filePath] = true;
        return _renderPug(filePath);
    }
}

function _renderAllPug() {
    console.log('### INFO: Rendering All');
    const limit = plimit(parseInt(parsedENV.PARALLEL_PUG_RENDERS || '2', 10));
    const promiseArray = [];
    _.each(allFiles, (value, filePath) => promiseArray.push(limit(() => _renderPug(filePath))));
    return Promise.all(promiseArray);

}

function _renderPug(filePath) {
    return new Promise(function (resolve, reject) {
        pool.exec('renderPug', [filePath])
            .then(function (result) {
                resolve(result);
            })
            .catch(function (err) {
                console.error(err);
                reject(err);
            });
    });
}
