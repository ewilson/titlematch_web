import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    completeMatch: function(match) {
      match.set('completed', true);
      match.save();
      return false;
    },
    undoMatch: function(match) {
      match.set('completed', false);
      match.set('homeScore', 0);
      match.set('awayScore', 0);
      match.save();
      return false;
    }
  },
  afterModel: function(tournament) {
    var state = tournament.get('state');
    if (state === 0) {
      this.transitionTo('tournaments.setup', tournament);
    } else if (state === 1) {
      this.transitionTo('tournaments.play.matches', tournament);
    } else if (state === 2) {
      this.transitionTo('tournaments.complete.matches', tournament);
    }
  }

});
