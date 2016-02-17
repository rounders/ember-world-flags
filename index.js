/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-world-flags',
  included: function(app, parentAddon) {
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }
    this._super.included(app);
    var target = (parentAddon || app);
    
    target.import('vendor/flags16.css');
    target.import('vendor/flags32.css');
  }
};
