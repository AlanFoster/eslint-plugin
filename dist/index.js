'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noUseStrict = require('./no-use-strict.js');

var _noUseStrict2 = _interopRequireDefault(_noUseStrict);

var _bracketPredicates = require('./bracket-predicates.js');

var _bracketPredicates2 = _interopRequireDefault(_bracketPredicates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  rules: {
    'no-use-strict': _noUseStrict2.default,
    'bracket-predicates': _bracketPredicates2.default
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1
  }
};