var {EmailValidation} = require('../check.js');
var assert = require('chai').assert;

describe('Unit Testing', function() {
    it('Check Validate Email', async function() {
      assert.equal(EmailValidation("DevOps@systemltd.com"),true);
      assert.equal(EmailValidation("IT@systemltd.com"),true);
      // assert.equal(EmailValidation("systemltd.com"),true);
    });

});

  
  
