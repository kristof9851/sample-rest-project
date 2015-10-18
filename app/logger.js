var approot = require('app-root-path');
var config = require(approot + '/app/config.js');
var winston = require('winston');

winston.addColors({
  debug: 'blue',
  info: 'green',
  error: 'red'
});

var l = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: config.get('logger:console:level'),
      colorize: true
    })
  ]
});

var logGeneric = function(level, message, details){
  if (details === undefined) {
    details = null;
  }
  l.log(level, message, details);
};

module.exports.debug = function(message, details){
  logGeneric('debug', message, details);
};
module.exports.info = function(message, details){
  logGeneric('info', message, details);
};
module.exports.error = function(message, details){
  logGeneric('error', message, details);
};
