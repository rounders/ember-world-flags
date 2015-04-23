import Ember from 'ember';
import layout from '../templates/components/world-flag';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNameBindings: ['flagSize', 'countryName'],

  size: "16",
  country: "us",

  flagSize: function() {
    return 'flag' + this.get('size');
  }.property('size'),

  countryName: function() {
    return 'flag-' + this.get('country');
  }.property('country')

});
