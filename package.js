Package.describe({
  name: 'awsp:handsontable',
  version: '0.15.0',
  summary: 'Handsontable is a data grid component with an Excel-like appearance. Built in JavaScript.',
  git: 'https://github.com/awsp/handsontable-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');

  api.addFiles([
    'bower_components/pikaday/css/pikaday.css',
    'lib/handsontable.meteor.0.23.0.css',
    'lib/handsontable-ruleJS/src/handsontable.formula.css',
    'lib/rulejs/ruleJS.all.full.js',
    'lib/handsontable.meteor.0.23.0.js',
    'lib/rulejs/handsontable.formula.js',
    'lib/handsontable-ruleJS/lib/highlight/styles/github.css',
    'lib/rulejs/highlight.pack.js',

    'styles/custom.css'
  ], 'client');

  api.export('Handsontable', 'client');
  api.export('ruleJS', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('awsp:handsontable');
  api.addFiles('awsp:handsontable-tests.js');
});
