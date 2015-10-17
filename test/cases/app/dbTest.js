var assert = require('assert');
var fs = require('fs');

describe('The ./app/db.js file', function(){
  it('exists', function(){
      assert.ok(fs.existsSync(root + '/app/db.js'));
  });
});
