# alint [![Build Status](https://travis-ci.org/AlanFoster/eslint-plugin-alint.svg?branch=master)](https://travis-ci.org/AlanFoster/eslint-plugin-alint)

An eslint plugin that implements some additional linting rules.

### Rules

#### no-use-strict

If you are using a transpiler such as [babeljs](https://babeljs.io/) there is no need for `'use strict'` at the top of your program files, or inside functions.
This rule warns you if this additional string meta-data is present.

#### bracket-predicates

You may wish to surround brackets within predicate variable assignments, function calls etc for instance -

```javascript
// Will be reported as an error
var invalid = user.age > 10;
var invalid = {
  key: i + 1
}
```

```javascript
// Valid - predicate encapsulated within brackets appropriately
var valid = (user.age > 10);
```

```javascript
// Invalid - missing brackets
var contains = function(string, substring) {
  return string.indexOf(substring) > -1;
};

// Valid - return expression encapsulated within brackets appropriately
var contains = function(string, substring) {
  return (string.indexOf(substring) > -1);
};
```

#### Release-Log

## 1.1.2

- Only publish `dist` and `README.md` as part of `npm publish`

## 1.1.1
- Remove webpack as build tool, replacing with raw Babel
- `dist` folder now contains separate files as a result

## 1.1.0
- Update `bracket-predicates` to also lint Object values
- Use webpack as a build tool, providing a single `dist/index.js` file as the entry point

## 1.0.0
Initial release. no-use-strict and bracket-predicates added

### Contributing

To run the test suite you can use the following command -

```
npm run test
```

To run an individual test you can modify the spec file you are working with and use `describe.only`

#### Building

To build the source code into a releasable asset you can use

```javascript
npm run build
```
