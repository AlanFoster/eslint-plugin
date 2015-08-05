import noUseStrict from './no-use-strict.js';
import bracketPredicates from './bracket-predicates.js';

export default {
  rules: {
    'no-use-strict': noUseStrict,
    'bracket-predicates': bracketPredicates
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1
  }
}
