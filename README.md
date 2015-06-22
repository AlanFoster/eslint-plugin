# alint [![Build Status](https://travis-ci.org/AlanFoster/eslint-plugin-alint.svg?branch=master)](https://travis-ci.org/AlanFoster/eslint-plugin-alint)

An eslint plugin that implements some additional linting rules.

### Rules

#### no-use-strict

If you are using a transpiler such as [babeljs](https://babeljs.io/) there is no need for `'use strict'` at the top of your program files, or inside functions. This rule warns you if this additional string meta-data is present.

#### bracket-predicates

You may wish to surround brackets within predicate variable assignments, for instance -

```javascript
var invalid = user.age > 10; // Will be reported as an error

var valid = (user.age > 10); // Valid - predicate encapsulated within brackets appropriately
```
