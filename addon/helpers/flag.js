import Ember from 'ember';

var flag = function(params) {
  var length = params.length;

  if (length === 0 || length > 2) {
    throw new TypeError('Invalid Number of arguments, expected at least 1 and at most 2');
  }

  var size = params[1] || "16"

  var result = `<i class="flag${size} flag-${params[0]}"></i>`
  return Ember.String.htmlSafe(result);
}

export default flag;
