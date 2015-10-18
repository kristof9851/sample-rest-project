var mongoose = require('mongoose');
var approot = require('app-root-path');
var l = require(approot + '/app/logger.js');

module.exports.getConnection = function(callback){
  mongoose.connect('mongodb://localhost/sample-rest-project');
  var db = mongoose.connection;
  db.on('error', function(msg){
    msg = 'MongoDB error: ' + msg;
    l.info(msg);
    callback(msg);
  });
  db.on('open', function(){
    l.info('New MongoDB connection opened');
    callback(null, db);
  });
};
