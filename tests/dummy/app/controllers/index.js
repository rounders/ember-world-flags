import { action } from '@ember/object';
import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

import COUNTRYCODES from 'ember-world-flags/utils/constants/country-codes';

export default class IndexController extends Controller {
  @tracked codes = COUNTRYCODES;
  @tracked keyword = '';

  get filteredCodes() {
    const keyword = this.keyword.toLowerCase();
    const codes = this.codes;

    if (isBlank(keyword)) {
      return codes;
    }

    return codes.filter(function (code) {
      return (
        code.name.toLowerCase().includes(keyword) ||
        code.id.toLowerCase().includes(keyword)
      );
    });
  }

  nameSort = ['name:asc'];
  codeSort = ['id:asc'];

  @tracked
  sortBy = this.nameSort;

  @sort('filteredCodes', 'sortBy') countryCodes;

  @action
  sortByName() {
    this.sortBy = this.nameSort;
  }

  @action
  sortByCode() {
    this.sortBy = this.codeSort;
  }
}
