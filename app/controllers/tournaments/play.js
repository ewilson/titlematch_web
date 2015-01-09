import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    unstart: function(tournament) {
      var that = this;
      tournament.set('state',0);
      tournament.save().then(function(tournament) {
        that.transitionTo('tournaments.setup', tournament);
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
