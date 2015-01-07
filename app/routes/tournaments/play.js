import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(tournament) {
    var state = tournament.get('state');
    if (state === 0) {
      var players = this.store.find('player');
      this.transitionTo('tournaments.setup', {id: tournament.id, tournament: tournament, players: players});
    } else if (state === 1) {
      this.transitionTo('tournaments.play.matches', tournament);
    } else if (state === 2) {
      this.transitionTo('tournaments.complete', tournament);
    }
  }

});
