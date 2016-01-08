import _ from 'lodash';

const report = function (node, context) {
  const failureMessage = `Banned identifier: '${node.name}' found`;
  context.report(node, failureMessage);
};

const rule = function (context) {
  const isBanned = function (identifier) {
    const bannedIdentifiers = context.options;
    return _.contains(bannedIdentifiers, identifier);
  };

  var visitor = {
    Identifier: function(node) {
      const identifier = node.name;
      if (!isBanned(identifier)) return;

      report(node, context);
    }
  };

  return visitor;
};

module.exports = rule;
