'use strict';


let bunyan = require('bunyan');
let mocha = require('mocha');
let PrettyStream = require('bunyan-prettystream');

let prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

let _createLogger = bunyan.createLogger;
bunyan.createLogger = function(options) {
    options.streams = [{
        level: 'debug',
        type: 'raw',
        stream: prettyStdOut
    }, {
        level: 'info',
        type: 'raw',
        stream: prettyStdOut
    }, {
        level: 'warn',
        type: 'raw',
        stream: prettyStdOut
    }, {
        level: 'error',
        type: 'raw',
        stream: prettyStdOut
    }, {
        level: 'fatal',
        type: 'raw',
        stream: prettyStdOut
    }, {
        level: 'trace',
        type: 'raw',
        stream: prettyStdOut
    }];

    return _createLogger(options);
};

module.exports = mocha.reporters.nyan;