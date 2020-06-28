import Ember from 'ember';

var defaultSize = 16;
var defaultCountry = "us";

export function worldFlagSVG(params) {
  var length, country, size;

  length = params.length;
  country = params[0] || defaultCountry;
  size = params[1] || defaultSize;

  if (length === 0 || length > 2) {
    throw new TypeError('Invalid Number of arguments, expected at least 1 and at most 2');
  }

  var result = `<span class="flag-icon flag-icon-${country.toLowerCase()}" style="font-size:${size}px;"></span>`;
  return Ember.String.htmlSafe(result);
}

export default Ember.Helper.helper(worldFlagSVG);
