var failureMessage = 'File extension does not match `.jsx` for file which contains a JSX Opening Element';

var rule = function(context) {
  var visitor = {
    JSXOpeningElement(node) {
        const fileName = context.getFilename();

        if (fileName.endsWith('.jsx')) return;
        context.report(node, failureMessage);
    }
  };

  return visitor;
};

module.exports = rule;
