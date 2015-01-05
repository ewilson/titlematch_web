import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function(player) {
      var that = this;
      player.save().then(function () {
        that.transitionToRoute('players');
      });
      return false;
    }
  }
});
