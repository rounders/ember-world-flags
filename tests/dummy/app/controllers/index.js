import { computed, action } from '@ember/object';
import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';
import { isBlank } from '@ember/utils';

import COUNTRYCODES from 'ember-world-flags/utils/constants/country-codes';

export default class IndexController extends Controller {
  codes =  COUNTRYCODES;

  @computed('codes', 'keyword')
  get filteredCodes() {
    const keyword = this.keyword.toLowerCase();
    const codes = this.codes;

    if (isBlank(keyword)) {
      return codes;
    }

    return codes.filter(function (code) {
      return code.name.toLowerCase().includes(keyword) || code.id.toLowerCase().includes(keyword);
    });
  }

  nameSort =  ['name:asc'];
  codeSort =  ['id:asc'];

  sortBy = this.nameSort;

  @sort('filteredCodes', 'sortBy') countryCodes;

  keyword =  '';

  @action
  sortByName() {
    this.set('sortBy', this.nameSort);
  }

  @action
  sortByCode() {
    this.set('sortBy', this.codeSort);
  }
}
