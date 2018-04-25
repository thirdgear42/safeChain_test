import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | team_directory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:team-directory');
    assert.ok(route);
  });
});
