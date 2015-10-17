var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');
var getModule;

describe('The ./app/user/get.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/user/get.js'));
    getModule = require(root + '/app/user/get.js');
  });

  it('is a function', function(){
    assert.equal('function', typeof getModule);
  });
});
