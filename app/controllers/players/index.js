import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove: function(player) {
      player.destroyRecord();
    }
  }
});
