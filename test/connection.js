var assert = require("assert");
var connection = require("../connection");

describe('Test Connection', function(){
  it('should return true when connection is open', function(){    
    assert.equal(true, connection.open());
  });
});
