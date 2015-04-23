import Ember from 'ember';
import { worldFlag } from 'ember-world-flags/helpers/world-flag';
import { module, test } from 'qunit';


module('WorldFlagHelper');


test('one arg', function(assert) {
  var result = worldFlag(["ca"]);
  assert.equal(result.string, '<i class="flag16 flag-ca"></i>');
});

test('two args', function(assert) {
  var result = worldFlag(["ca", 32]);
  assert.equal(result.string, '<i class="flag32 flag-ca"></i>');
});
