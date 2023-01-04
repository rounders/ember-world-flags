import { htmlSafe } from '@ember/template';
import { helper } from '@ember/component/helper';

var defaultSize = 16;
var defaultCountry = 'us';

export default helper(function worldFlag(params) {
  var length, country, size;

  length = params.length;
  country = params[0] || defaultCountry;
  size = params[1] || defaultSize;

  if (length === 0 || length > 2) {
    throw new TypeError(
      'Invalid Number of arguments, expected at least 1 and at most 2'
    );
  }

  var result = `<i class="flag${size} flag-${country.toLowerCase()}"></i>`;
  return htmlSafe(result);
});
