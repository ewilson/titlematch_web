import Ember from 'ember';

import assignPools from 'titlematch-web/utils/assign-pools';
import schedulePools from 'titlematch-web/utils/schedule-pools';

export default Ember.Controller.extend({
  players: Ember.inject.controller('players'),
  actions: {
    start: function(tournament) {
      tournament.set('state', 1);
      var type = tournament.get('type');
      var entries = tournament.get('entries');
      var entriesArray = entries.toArray();
      var poolNames = assignPools(entriesArray, type);
      var matchups = schedulePools(entries, poolNames);
      var matches = tournament.get('matches');
      for (var i = 0; i < matchups.length; i++) {
        var match = this.store.createRecord('match');
        var matchup = matchups[i];
        match.set('tournament',tournament);
        match.set('homePlayer',matchup['home']);
        match.set('awayPlayer',matchup['away']);
        match.save();
        matches.addObject(match);
      }
      var that = this;
      tournament.save().then(function (tournament) {
        that.transitionToRoute('tournaments.play.matches', tournament);
      });
    },
    addPlayer: function(tournament, player) {
      var entry = this.store.createRecord('entry');
      entry.set('player', player);
      entry.set('tournament', tournament);
      entry.save();
    },
    removePlayer: function(tournament, entry) {
      entry.destroyRecord();
    },
    addNewPlayer: function(tournament, playerName) {
      var newPlayer = this.store.createRecord('player');
      newPlayer.set('name', playerName);
      var that = this;
      newPlayer.save().then(function() {
        var entry = that.store.createRecord('entry');
        entry.set('player', newPlayer);
        entry.set('tournament', tournament);
        entry.save();
      });
    },
    setType: function(type) {
      var tournament = this.get('model');
      tournament.set('type', type);
      tournament.save();
    }
  }
});
