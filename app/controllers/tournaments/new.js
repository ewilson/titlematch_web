import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function(tournament) {
      var that = this;
      tournament.save().then(function (tournament) {
        that.transitionToRoute('tournaments.setup', tournament);
      });
      return false;
    }
  }
});
