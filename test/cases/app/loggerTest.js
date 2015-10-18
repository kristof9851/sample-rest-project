var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');
var l;

describe('The ./app/logger.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/logger.js'));
    l = require(root + '/app/logger.js');
  });

  it('supports debug(), info() and error() methods', function(){
    assert.equal('function', typeof l.debug);
    assert.equal('function', typeof l.info);
    assert.equal('function', typeof l.error);
  });
});
