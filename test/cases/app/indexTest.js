var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');

describe('The ./app/index.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/index.js'));
  });

  it('contains the user property which contains the ./app/user/ module', function(){
    assert.equal(
      require(root + '/app/user'),
      require(root + '/app').user
    );
  });
});
