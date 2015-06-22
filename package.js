Package.describe({
  name: 'awsp:handsontable',
  version: '0.6.0',
  summary: 'Quote from origin: Handsontable is a minimalist Excel-like data grid editor for HTML & JavaScript',
  git: 'https://github.com/awsp/handsontable-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('awsp:handsontable.js');
  api.use('jquery', 'client');

  api.addFiles([
    'bower_components/pikaday/css/pikaday.css',
    'lib/handsontable.meteor.0.15.0.css',
    'lib/handsontable.meteor.0.15.0.js',
    'styles/custom.css'
  ], 'client');

  api.export('Handsontable', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('awsp:handsontable');
  api.addFiles('awsp:handsontable-tests.js');
});
