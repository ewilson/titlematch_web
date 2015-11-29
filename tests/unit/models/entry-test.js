import { moduleForModel, test } from 'ember-qunit';

moduleForModel('entry', 'Entry', {
  // Specify the other units that are required for this test.
  needs: ['model:player', 'model:tournament', 'model:match']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
