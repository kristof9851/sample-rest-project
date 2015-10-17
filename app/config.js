var root = require('app-root-path');
var nconf = require('nconf');

nconf.add('env', {type: 'file', file: root + '/config/config.env.json'});
nconf.add('default', {type: 'file', file: root + '/config/config.json'});

module.exports = nconf;
