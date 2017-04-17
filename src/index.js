import noUseStrict from './no-use-strict.js';
import bracketPredicates from './bracket-predicates.js';
import banCustomIdentifiers from './ban-custom-identifiers.js';
import requireJSXExtension from './require-jsx-extension';

export default {
  rules: {
    'no-use-strict': noUseStrict,
    'bracket-predicates': bracketPredicates,
    'ban-custom-identifiers': banCustomIdentifiers,
    'require-jsx-extension': requireJSXExtension
  },
  rulesConfig: {
    'no-use-strict': 1,
    'bracket-predicates': 1,
    'ban-custom-identifiers': 1,
    'require-jsx-extension': 1
  }
}
