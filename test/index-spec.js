var plugin = require('./../src/index.js');
var assert = require('chai').assert;

describe('index', function() {
  it('should be valid', function() {
    assert.ok(plugin)
  });

  describe('rules', function() {
    beforeEach(function() {
      this.rules = plugin.rules;
    });

    it('should provide rules', function() {
      assert.ok(this.rules)
    });

    describe('no-use-strict', function() {
      it('should provide no-use-strict', function() {
        assert.ok(this.rules['no-use-strict'])
      })
    });
  })
});