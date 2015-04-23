import Ember from 'ember';
import flag from 'ember-world-flags/helpers/flag'

export var initialize = function(/* container, app */) {
  var registerHelper;

  if (Ember.HTMLBars) {
    registerHelper = function (helperName, fn) {
      Ember.HTMLBars._registerHelper(helperName, Ember.HTMLBars.makeBoundHelper(fn));
    }
  } else {
    registerHelper = Ember.Handlebars.helper;
  };

  registerHelper('flag', flag);
};

export default {
  name: 'ember-world-flags',

  initialize: initialize
};
