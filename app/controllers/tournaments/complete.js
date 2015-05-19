import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    reopen: function(tournament) {
      var that = this;
      tournament.set('state', 1);
      tournament.save().then(function (tournament) {
        that.transitionToRoute('tournaments.play.matches', tournament);
      });
    }
  }
});
