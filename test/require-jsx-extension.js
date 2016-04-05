
import { linter } from 'eslint';
import ESLintTester from 'eslint-tester';

const eslintTester = new ESLintTester(linter);

require('babel-eslint');

const ecmaFeatures = {
  jsx: true
};

const errors = [
  { message: 'File extension does not match `.jsx` for file which contains a JSX Opening Element' }
];

describe('require jsx extension', function() {
  eslintTester.addRuleTest('dist/require-jsx-extension', {
    valid: [
      {
        code: 'var foo = React.createElement("div", null, "hello world");',
        filename: 'foo.js',
        ecmaFeatures
      },
      {
        code: 'var foo = React.createElement("div", null, "hello world");',
        filename: 'foo.jsx',
        ecmaFeatures
      },
      {
        code: 'var foo = <div>hello world</div>',
        filename: 'foo.jsx',
        ecmaFeatures
      },
      {
        code: 'var foo = <div />',
        filename: 'foo.spec.jsx',
        ecmaFeatures
      }
    ],

    invalid: [
      {
        code: 'var foo = <div>hello world</div>',
        filename: 'foo.js',
        errors,
        ecmaFeatures
      },
      {
        code: 'var foo = <div />',
        filename: 'foo.spec.js',
        errors,
        ecmaFeatures
      },
      {
        code: 'var foo = <div />',
        filename: 'foo.es6.js',
        errors,
        ecmaFeatures
      }
    ]
  });
});
