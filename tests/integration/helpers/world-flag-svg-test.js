import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | world-flag-svg', function (hooks) {
  setupRenderingTest(hooks);

  test('it uses a font size of 16px when you specify only countrycode', async function (assert) {
    this.set('countryCode', 'ca');

    await render(hbs`{{world-flag-svg this.countryCode}}`);
    assert.strictEqual(
      this.element.innerHTML,
      '<span class="flag-icon flag-icon-ca" style="font-size:16px;"></span>'
    );
  });

  test ('if you specify size it will use that size', async function (assert) {
    this.set('countryCode', 'us');
    this.set('size', 32);

    await render(hbs`{{world-flag-svg this.countryCode this.size}}`);
    assert.strictEqual(
      this.element.innerHTML,
      '<span class="flag-icon flag-icon-us" style="font-size:32px;"></span>'
    );
  });
});
