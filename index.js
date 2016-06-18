'use strict';


const bunyan = require('bunyan');
const mocha = require('mocha');
const PrettyStream = require('bunyan-prettystream');
const fs = require('fs');
const OPT_FILE_NAME = 'test/mochabunyan.opts';

let reporter = mocha.reporters.nyan,
    mute = false,
    level = 'trace';

if (fs.existsSync(OPT_FILE_NAME)) {
    let config = JSON.parse(fs.readFileSync(OPT_FILE_NAME));

    if (config.reporter){
    	if (mocha.reporters[config.reporter]!==undefined){
    		// default mocha reporter ?
    		reporter = mocha.reporters[config.reporter];
    	}else{
    		// try to require it 
    		reporter = require(config.reporter);
    	}
    }

    mute = config.mute || mute;
    level = config.level || level;
}

let prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

var _createLogger = bunyan.createLogger;
bunyan.createLogger = function(options) {
    options.streams = [{
        level: mute ? 99 : level,
        type: 'raw',
        stream: prettyStdOut
    }];

    return _createLogger(options);
};



module.exports = reporter;