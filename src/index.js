import noUseStrict from './no-use-strict.js';
import bracketPredicates from './bracket-predicates.js';
import banCustomIdentifiers from './ban-custom-identifiers.js';

export default {
  rules: {
    'no-use-strict': noUseStrict,
    'bracket-predicates': bracketPredicates,
    'ban-custom-identifiers': banCustomIdentifiers
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1,
    'ban-custom-identifiers': 1
  }
};
