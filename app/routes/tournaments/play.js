import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(tournament) {
    var state = tournament.get('state');
    if (state === 0) {
      this.transitionTo('tournaments.setup', tournament);
    } else if (state === 1) {
      this.transitionTo('tournaments.play', tournament);
    } else if (state === 2) {
      this.transitionTo('tournaments.complete', tournament);
    }
  }

});
