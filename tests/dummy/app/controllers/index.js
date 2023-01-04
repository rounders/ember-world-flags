import { action } from '@ember/object';
import Controller from '@ember/controller';
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

  nameSort = 'name';
  codeSort = 'id';

  @tracked
  sortBy = this.nameSort;

  get countryCodes() {
    return this.filteredCodes.sort((a, b) =>
      a[this.sortBy].localeCompare(b[this.sortBy])
    );
  }

  @action
  sortByName() {
    this.sortBy = this.nameSort;
  }

  @action
  sortByCode() {
    this.sortBy = this.codeSort;
  }
}
