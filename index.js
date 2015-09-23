/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-world-flags',
  included: function(app) {
    app.import('vendor/flags16.css');
    app.import('vendor/flags32.css');
  }
};
