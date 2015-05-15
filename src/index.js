var noUseStrict = require('./no-use-strict.js');
var bracketPredicates = require('./bracket-predicates.js');

module.exports = {
  rules: {
    "no-use-strict": noUseStrict,
    "bracket-predicates": bracketPredicates
  }
};
