/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-world-flags',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/flags16.css');
    app.import('vendor/flags32.css');
  }
};
