var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');
var getModule;

describe('The ./app/user/get.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/user/get.js'));
    getFunction = require(root + '/app/user/get.js');
  });

  it('is a function', function(){
    assert.equal('function', typeof getFunction);
  });

  it('should throw an error for invalid parameters', function(){
    assert.throws(getFunction, Error, 'User id has to be a number');
    assert.throws(function(){getFunction('string')}, Error, 'User id has to be a number');
    assert.throws(function(){getFunction({asd:123})}, Error, 'User id has to be a number');
    assert.throws(function(){getFunction([1,2,3])}, Error, 'User id has to be a number');
  });

  it('should return a user for a valid user id', function(){
    var sampleUser = {id:1, name:'Kristof'};
    assert.equal(getFunction(sampleUser.id), sampleUser);
  });
});
