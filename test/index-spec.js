import plugin from './../dist/index.js';
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

   describe('ban-custom-identifiers', function() {
     it('should provide ban-custom-identifiers', function() {
       assert.ok(this.rules['ban-custom-identifiers']);
     });
   });

   describe('require-jsx-extension', function() {
     it('should provide require-jsx-extension', function() {
       assert.ok(this.rules['require-jsx-extension']);
     });
   });
 });
});
