import { linter } from 'eslint';
import ESLintTester from 'eslint-tester';
import errorScenarioFactory from './error-scenario-factory';

var eslintTester = new ESLintTester(linter);
var expectedErrorMessage = 'Place brackets around predicates on assignments';

describe('bracket predicates', function() {
  eslintTester.addRuleTest('dist/ban-custom-identifiers', {
    valid: [
      { code: 'var valid = 10;', options: [ ] },
      { code: 'var eventCallback = function (e) { };', options: [ 'foo' ] },
      { code: 'var eventCallback = function (e) { };', options: [ 'foo', 'evt', 'event' ] }
    ],

    invalid: [
      {
        code: 'var callback = function (evt) { };',
        options: [ 'evt', 'event' ],
        errors: [
          { message: 'Banned identifier: \'evt\' found' }
        ]
      },
      {
        code: 'var callback = function (event) { };',
        options: [ 'evt', 'event' ],
        errors: [
          { message: 'Banned identifier: \'event\' found' }
        ]
      },
      {
        code: 'function callback(event, evt) { }',
        options: [ 'evt', 'event' ],
        errors: [
          { message: 'Banned identifier: \'event\' found' },
          { message: 'Banned identifier: \'evt\' found' }
        ]
      }
    ]
  });
});
