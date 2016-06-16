'use strict';


let bunyan = require('bunyan');
let mocha = require('mocha');
let PrettyStream = require('bunyan-prettystream');

let prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

var _createLogger = bunyan.createLogger;
bunyan.createLogger = function(options) {
    options.streams = [{
        level: 'trace',
        type: 'raw',
        stream: prettyStdOut
    }];

    return _createLogger(options);
};


module.exports = mocha.reporters.nyan;