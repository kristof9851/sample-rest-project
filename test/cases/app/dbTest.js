var assert = require('assert');
var fs = require('fs');
var approot = require('app-root-path');
var db;
var connection;

describe('The ./app/db.js file', function(){
  it('exists', function(){
      assert.ok(fs.existsSync(approot + '/app/db.js'));
  });

  it('can return an open connection', function(done){
    db = require(approot + '/app/db.js');
    db.getConnection(function(error, connection){
      assert.ok(!error, 'There are no errors');
      assert.equal(typeof connection, 'object', 'Connection is a valid object');
      assert.ok(true, connection._hasOpened, 'Connection is open');
      done();
    });
  });
});
