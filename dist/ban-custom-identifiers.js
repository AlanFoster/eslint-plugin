'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var report = function report(node, context) {
  var failureMessage = 'Banned identifier: \'' + node.name + '\' found';
  context.report(node, failureMessage);
};

var rule = function rule(context) {
  var isBanned = function isBanned(identifier) {
    var bannedIdentifiers = context.options;
    return _lodash2.default.contains(bannedIdentifiers, identifier);
  };

  var visitor = {
    Identifier: function Identifier(node) {
      var identifier = node.name;
      if (!isBanned(identifier)) return;

      report(node, context);
    }
  };

  return visitor;
};

module.exports = rule;