import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('player', 'Player', {
  // Specify the other units that are required for this test.
  needs: ['model:tournament', 'model:entry']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
