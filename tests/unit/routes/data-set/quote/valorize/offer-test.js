import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | data-set/quote/valorize/offer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:data-set/quote/valorize/offer');
    assert.ok(route);
  });
});
