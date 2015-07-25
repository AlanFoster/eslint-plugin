'use strict';

import { linter } from 'eslint';
import ESLintTester from 'eslint-tester';
import errorScenarioFactory from './error-scenario-factory';

var eslintTester = new ESLintTester(linter);
var expectedErrorMessage = 'Place brackets around predicates on assignments';
var errorScenario = errorScenarioFactory(expectedErrorMessage);

describe('bracket predicates', function() {
  eslintTester.addRuleTest('src/bracket-predicates', {
    valid: [
      'var x;',
      'var x = undefined;',
      'var x = 10; var y = x;',
      'var x = true;',
      'var x = (true || true);',
      'var x = (true || true)',
      'var x = (true && true);',
      'var x = (true && true)',
      'x = undefined;',
      'x = true;',
      'x = (true || true);',
      'x = (true || true)',
      'x = (true && true);',
      'x = (true && true)',
      'var x = f(true && true)',
      'var x = f(10, 15, true && true, false)',
      'var x = (true && false), y = (false || false);',
      'var x;\nx = (true && false);',
      'var x = (5 > 3);',
      'x = (age > 17);',
      'var x = { foo: true };',
      'var x = { foo: !bar };',
      'var x = { foo: (true || false) };'
    ],

    invalid: [
      errorScenario('var x = true || true;'),
      errorScenario('var x = true || true'),
      errorScenario('var x = true && true;'),
      errorScenario('var x = true && true'),
      errorScenario('x = true || true;'),
      errorScenario('x = true || true'),
      errorScenario('x = true && true;'),
      errorScenario('x = true && true'),
      errorScenario('var x = (true && false), y = false || false'),
      errorScenario('var x;\nx = true && false;'),
      errorScenario('var x = 5 > 3;'),
      errorScenario('x = age > 17;'),
      errorScenario('var x = { foo: true || false };'),
      errorScenario('var x = { foo: i + 1 };')
    ]
  });
});
