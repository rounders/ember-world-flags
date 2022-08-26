import Ember from 'ember';
import { sort } from '@ember/object/computed';
import COUNTRYCODES from 'ember-world-flags/utils/constants/country-codes';

export default Ember.Controller.extend({
  codes: COUNTRYCODES,
  filteredCodes: Ember.computed('codes', 'keyword', function () {
    const keyword = this.get('keyword').toLowerCase();
    const codes = this.get('codes');

    if (Ember.isBlank(keyword)) {
      return codes;
    }

    return codes.filter(function (code) {
      return code.name.toLowerCase().includes(keyword) || code.id.toLowerCase().includes(keyword);
    });
  }),
  countryCodes: sort('filteredCodes', 'sortBy'),
  keyword: '',
  sortBy: [],
  sortByName: ['name:asc'],
  sortByCode: ['id:asc'],

  initSortBy: Ember.on('init', function () {
    this.set('sortBy', this.get('sortByName'));
  }),

  actions: {
    sortByName() {
      this.set('sortBy', this.get('sortByName'));
    },

    sortByCode() {
      this.set('sortBy', this.get('sortByCode'));
    }
  }
});
