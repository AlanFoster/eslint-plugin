import _ from 'lodash';

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

var reportIfMissingBrackets = function (node, context) {
  if (!isPredicateMissingBrackets(node, context)) return;

  report(node, context);
};

var rule = function (context) {
  var visitor = {
    VariableDeclarator(node) {
      var init = node.init;

      reportIfMissingBrackets(init, context);
    },

    AssignmentExpression(node) {
      var rightHandside = node.right;

      reportIfMissingBrackets(rightHandside, context);
    },

    Property(node) {
      var value = node.value;

      reportIfMissingBrackets(value, context);
    },

    ReturnStatement(node) {
      var returnResult = node.argument;

      reportIfMissingBrackets(returnResult, context);
    }
  };

  return visitor;
};

module.exports = rule;
