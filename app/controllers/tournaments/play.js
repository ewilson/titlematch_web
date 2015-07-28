import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    unstart: function(tournament) {
      var that = this;
      tournament.set('state',0);
      var matches = tournament.get('matches').toArray();
      for (var i = 0; i < matches.length; i++) {
        matches[i].destroyRecord();
      }
      tournament.save().then(function(tournament) {
        that.transitionToRoute('tournaments.setup', tournament);
      });
    },
    finish: function(tournament) {
      var that = this;
      tournament.set('state',2);
      tournament.save().then(function(tournament) {
        that.transitionToRoute('tournaments.complete.standings', tournament);
      });
    }
  }
});
