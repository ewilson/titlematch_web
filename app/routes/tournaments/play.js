import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(template) {
      return this.render(template, {
        into: 'tournaments/play',
        outlet: 'settings'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'settings',
        parentView: 'tournaments/play'
      });
    }
  },
  afterModel: function(tournament) {
    var state = tournament.get('state');
    if (state === 0) {
      this.transitionTo('tournaments.setup', tournament);
    } else if (state === 1) {
      this.transitionTo('tournaments.play.matches', tournament);
    } else if (state === 2) {
      this.transitionTo('tournaments.complete', tournament);
    }
  }

});
