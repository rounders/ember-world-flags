import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | world-flag', function (hooks) {
  setupRenderingTest(hooks);

  test('specify only countrycode', async function (assert) {
    this.set('countryCode', 'ca');

    await render(hbs`{{world-flag this.countryCode}}`);
    assert.equal(this.element.innerHTML, '<i class="flag16 flag-ca"></i>');
  });

  test('specify country code and size', async function (assert) {
    this.set('countryCode', 'ca');
    this.set('size', 32);

    await render(hbs`{{world-flag this.countryCode this.size}}`);
    assert.equal(this.element.innerHTML, '<i class="flag32 flag-ca"></i>');
  });

  test('specify country code in uppercase', async function (assert) {
    this.set('countryCode', 'CA');

    await render(hbs`{{world-flag this.countryCode this.size}}`);
    assert.equal(this.element.innerHTML, '<i class="flag16 flag-ca"></i>');
  });
});
