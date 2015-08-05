'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var failureMessage = 'Place brackets around predicates on assignments';
var report = function report(node, context) {
  context.report(node, failureMessage);
};

var bracketed = function bracketed(node, context) {
  var before = context.getTokenBefore(node);
  var after = context.getTokenAfter(node);

  var hasBracketsBefore = before && before.value === '(';
  var hasBracketsAfter = after && after.value === ')';

  return hasBracketsBefore && hasBracketsAfter;
};

var isPredicateMissingBrackets = function isPredicateMissingBrackets(node, context) {
  if (!node) return false;

  var isPredicateExpression = _lodash2['default'].contains(['LogicalExpression', 'BinaryExpression'], node.type);
  return isPredicateExpression && !bracketed(node, context);
};

var rule = function rule(context) {
  var visitor = {
    VariableDeclarator: function VariableDeclarator(node) {
      var init = node.init;

      if (isPredicateMissingBrackets(init, context)) {
        report(init, context);
      }
    },

    AssignmentExpression: function AssignmentExpression(node) {
      var rightHandside = node.right;

      if (isPredicateMissingBrackets(rightHandside, context)) {
        report(rightHandside, context);
      }
    },

    Property: function Property(node) {
      var value = node.value;

      if (isPredicateMissingBrackets(value, context)) {
        report(value, context);
      }
    }
  };

  return visitor;
};

module.exports = rule;