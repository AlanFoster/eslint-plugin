var noUseStrict = require('./no-use-strict.js');
var bracketPredicates = require('./bracket-predicates.js');

module.exports = {
  rules: {
    'no-use-strict': noUseStrict,
    'bracket-predicates': bracketPredicates
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1
  }
};
