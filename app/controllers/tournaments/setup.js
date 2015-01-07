import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    start: function (tournament) {
      var that = this;
      tournament.set('state', 1);
      tournament.save().then(function (tournament) {
        that.transitionToRoute('tournaments.play.matches', tournament);
      });
    },
    addPlayer: function (tournament, player) {
      tournament.get('players').addObject(player);
      tournament.save();
      player.save();
    },
    removePlayer: function (tournament, player) {
      tournament.get('players').removeObject(player);
      tournament.save();
      player.save();
    }
  },
  needs: ['players']
});
