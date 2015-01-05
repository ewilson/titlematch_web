import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    unstart: function(tournament) {
      var that = this;
      tournament.set('state',0);
      tournament.save().then(function(tournament) {
        var players = that.store.find('player');
        that.transitionTo('tournaments.setup', {id: tournament.id, tournament: tournament, players: players});
      });
    },
    finish: function(tournament) {
      var that = this;
      tournament.set('state',2);
      tournament.save().then(function(tournament) {
        that.transitionToRoute('tournaments.complete', tournament);
      });
    }
  }
});
