var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');

describe('The ./server.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/server.js'));
  });
});
