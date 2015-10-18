var approot = require('app-root-path');
var assert = require('assert');
var fs = require('fs');
var getUser;

describe('The ./app/user/get.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(approot + '/app/user/get.js'));
    getUser = require(approot + '/app/user/get.js');
  });

  it('is a function', function(){
    assert.equal('function', typeof getUser);
  });

  it('should throw an error for invalid parameters', function(){
    assert.throws(getUser, Error, 'User id has to be a number');
    assert.throws(function(){getUser('string')}, Error, 'User id has to be a number');
    assert.throws(function(){getUser({asd:123})}, Error, 'User id has to be a number');
    assert.throws(function(){getUser([1,2,3])}, Error, 'User id has to be a number');
  });

  it('should return a user for a valid user id', function(){
    var sampleUser = {id:1, name:'Kristof'};
    assert.equal(getUser(sampleUser.id), sampleUser);
  });
});
