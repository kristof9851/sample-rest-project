var root = require('app-root-path');
var assert = require('assert');
var fs = require('fs');
var extend = require('extend');
var config;

describe('The ./app/config.js file', function(){
  it('exists', function(){
    assert.ok(fs.existsSync(root + '/app/config.js'));
    config = require(root + '/app/config.js');
  });

  it('loads the default and the environment file as well', function(){
    if (fs.existsSync(root + '/config/config.json') &&
        fs.existsSync(root + '/config/config.env.json')
    ) {
      var configDefault = fs.readFileSync(root + '/config/config.json');
      var configEnv = fs.readFileSync(root + '/config/config.env.json');
      var configMerged = extend(
        true,
        JSON.parse(configDefault),
        JSON.parse(configEnv)
      );
      assert.equal(
        JSON.stringify(config.get()),
        JSON.stringify(configMerged)
      );
    }
  });
});
