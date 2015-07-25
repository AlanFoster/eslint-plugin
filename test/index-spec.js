import plugin from './../src/index.js';
import { assert } from 'chai';

describe('index', function() {
  it('should be valid', function() {
    assert.ok(plugin);
  });

  describe('rules', function() {
    beforeEach(function() {
      this.rules = plugin.rules;
    });

    it('should provide rules', function() {
      assert.ok(this.rules);
    });

    describe('no-use-strict', function() {
      it('should provide no-use-strict', function() {
        assert.ok(this.rules['no-use-strict']);
      });
    });

    describe('bracket-predicates', function() {
      it('should provide bracket-predicates', function() {
        assert.ok(this.rules['bracket-predicates']);
      });
    });
  });
});
