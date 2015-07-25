# alint [![Build Status](https://travis-ci.org/AlanFoster/eslint-plugin-alint.svg?branch=master)](https://travis-ci.org/AlanFoster/eslint-plugin-alint)

An eslint plugin that implements some additional linting rules.

### Rules

#### no-use-strict

If you are using a transpiler such as [babeljs](https://babeljs.io/) there is no need for `'use strict'` at the top of your program files, or inside functions.
This rule warns you if this additional string meta-data is present.

#### bracket-predicates

You may wish to surround brackets within predicate variable assignments, for instance -

```javascript
// Will be reported as an error
var invalid = user.age > 10;
var invalid = {
  key: i + 1;
}
```

```javascript
// Valid - predicate encapsulated within brackets appropriately
var valid = (user.age > 10);
```

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
