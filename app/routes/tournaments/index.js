import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var newTournaments  = this.store.query('tournament', {state: 0});
        var activeTournaments  = this.store.query('tournament', {state: 1});
        return {newTournaments: newTournaments, activeTournaments: activeTournaments};
    }
});
