import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var newTournaments  = this.store.find('tournament', {state: 0});
        var activeTournaments  = this.store.find('tournament', {state: 1});
        return {newTournaments: newTournaments, activeTournaments: activeTournaments};
    }
});
