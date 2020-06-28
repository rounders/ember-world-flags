/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-world-flags',
  included: function(app, parentAddon) {
    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    // see https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }
    this._super.included(app);
    var target = (parentAddon || app);

    target.import('vendor/flags16.css');
    target.import('vendor/flags32.css');
    target.import('vendor/svgflags.css');
  }
};
