'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _noUseStrictJs = require('./no-use-strict.js');

var _noUseStrictJs2 = _interopRequireDefault(_noUseStrictJs);

var _bracketPredicatesJs = require('./bracket-predicates.js');

var _bracketPredicatesJs2 = _interopRequireDefault(_bracketPredicatesJs);

exports['default'] = {
  rules: {
    'no-use-strict': _noUseStrictJs2['default'],
    'bracket-predicates': _bracketPredicatesJs2['default']
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1
  }
};
module.exports = exports['default'];