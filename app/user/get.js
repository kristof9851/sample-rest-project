var approot = require('app-root-path');
var db = require(approot + '/app/db.js');

module.exports = function(id){
  if (typeof id !== 'number') {
    throw new Error('User id has to be a number');
  }
  
  
};
