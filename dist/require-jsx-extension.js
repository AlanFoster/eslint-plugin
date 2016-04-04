'use strict';

var failureMessage = 'File extension does not match `.jsx` for file which contains a JSX Opening Element';

var rule = function rule(context) {
  var visitor = {
    JSXOpeningElement: function JSXOpeningElement(node) {
      var fileName = context.getFilename();

      if (fileName.endsWith('.jsx')) return;
      context.report(node, failureMessage);
    }
  };

  return visitor;
};

module.exports = rule;