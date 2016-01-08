'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var isPredicateExpression = _lodash2.default.contains(['LogicalExpression', 'BinaryExpression'], node.type);
  return isPredicateExpression && !bracketed(node, context);
};

var reportIfMissingBrackets = function reportIfMissingBrackets(node, context) {
  if (!isPredicateMissingBrackets(node, context)) return;

  report(node, context);
};

var rule = function rule(context) {
  var visitor = {
    VariableDeclarator: function VariableDeclarator(node) {
      var init = node.init;

      reportIfMissingBrackets(init, context);
    },
    AssignmentExpression: function AssignmentExpression(node) {
      var rightHandside = node.right;

      reportIfMissingBrackets(rightHandside, context);
    },
    Property: function Property(node) {
      var value = node.value;

      reportIfMissingBrackets(value, context);
    },
    ReturnStatement: function ReturnStatement(node) {
      var returnResult = node.argument;

      reportIfMissingBrackets(returnResult, context);
    }
  };

  return visitor;
};

module.exports = rule;