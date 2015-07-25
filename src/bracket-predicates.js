var _ = require('lodash');

var failureMessage = 'Place brackets around predicates on assignments';
var report = function (node, context) {
  context.report(node, failureMessage);
};

var bracketed = function (node, context) {
  var before = context.getTokenBefore(node);
  var after = context.getTokenAfter(node);

  var hasBracketsBefore = (before && before.value === '(');
  var hasBracketsAfter = (after && after.value === ')');

  return hasBracketsBefore && hasBracketsAfter;
};

var isPredicateMissingBrackets = function (node, context) {
  if (!node) return false;

  var isPredicateExpression = _.contains(['LogicalExpression', 'BinaryExpression'], node.type);
  return isPredicateExpression && !bracketed(node, context);
};

var rule = function (context) {
  var visitor = {
    VariableDeclarator: function (node) {
      var init = node.init;

      if (isPredicateMissingBrackets(init, context)) {
        report(init, context);
      }
    },

    AssignmentExpression: function (node) {
      var rightHandside = node.right;

      if (isPredicateMissingBrackets(rightHandside, context)) {
        report(rightHandside, context);
      }
    },

    Property: function (node) {
      var value = node.value;

      if (isPredicateMissingBrackets(value, context)) {
        report(value, context);
      }
    }
  };

  return visitor;
};

module.exports = rule;
