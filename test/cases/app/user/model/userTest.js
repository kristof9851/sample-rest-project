var assert = require('assert');
var approot = require('app-root-path');
var fs = require('fs');
var model;

describe('The user model', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(approot + '/app/user/model/user.js'));
    model = require(approot + '/app/user/model/user.js');
  });

  it('can be instantiated', function(){
    var userData = {
      userId: "my id",
      name: "Kristof",
      created: new Date(),
      updated: new Date()
    };
    var user = new model(userData);
    assert.equal(userData.userId, user.userId);
    assert.equal(userData.name, user.name);
    assert.equal(userData.created, user.created);
    assert.equal(userData.updated, user.updated);
  });
});
