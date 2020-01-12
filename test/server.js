const assert = require('chai').assert,
      helloworld = require('../helloworld');

describe('Server', function(){
    it('server should return hello world', function(){
        assert.equal(helloworld(), 'hello world');
    })
})
