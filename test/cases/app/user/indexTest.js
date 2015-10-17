var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');

describe('The ./app/user/index.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/user/index.js'));
  });

  it('contains the "get" property which contains the ./app/user/get module', function(){
    assert.equal(
      require(root + '/app/user/get'),
      require(root + '/app/user').get
    );
  });

  it('contains the "getAll" property which contains the ./app/user/getAll module', function(){
    assert.equal(
      require(root + '/app/user/getAll'),
      require(root + '/app/user').getAll
    );
  });

  it('contains the "post" property which contains the ./app/user/post module', function(){
    assert.equal(
      require(root + '/app/user/post'),
      require(root + '/app/user').post
    );
  });

  it('contains the "update" property which contains the ./app/user/update module', function(){
    assert.equal(
      require(root + '/app/user/update'),
      require(root + '/app/user').update
    );
  });

  it('contains the "delete" property which contains the ./app/user/delete module', function(){
    assert.equal(
      require(root + '/app/user/delete'),
      require(root + '/app/user').delete
    );
  });
});
