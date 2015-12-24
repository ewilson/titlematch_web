import Ember from 'ember';

export default Ember.Object.extend({

  newTournaments: Ember.computed('tournaments.@each.state', function() {
    return this.get('tournaments').filterBy('state', 0);
  }),
  activeTournaments: Ember.computed('tournaments.@each.state', function() {
    return this.get('tournaments').filterBy('state', 1);
  })

});
