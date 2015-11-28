import Ember from 'ember';

import roundRobin from 'titlematch-web/utils/round-robin';
import buildPools from 'titlematch-web/utils/build-pools';
import schedulePools from 'titlematch-web/utils/schedule-pools';

export default Ember.Controller.extend({
  players: Ember.inject.controller('players'),
  actions: {
    start: function(tournament) {
      var that = this;
      tournament.set('state', 1);
      var type = tournament.get('type');
      var players = tournament.get('players');
      var matches = tournament.get('matches');
      var matchups = [];
      var playersArray = players.toArray();
      if (type === 0) {
        matchups = roundRobin(playersArray);
      } else if (type === 1) {
        var poolNames = buildPools(playersArray.length);
        matchups = schedulePools(playersArray, poolNames);
      }
      for (var i = 0; i < matchups.length; i++) {
        var match = this.store.createRecord('match');
        match.set('tournament',tournament);
        match.set('homePlayer',matchups[i]['home']);
        match.set('awayPlayer',matchups[i]['away']);
        if (type === 1) {
          match.set('pool',matchups[i]['pool']);
        }
        match.save();
        matches.addObject(match);
      }
      tournament.save().then(function (tournament) {
        that.transitionToRoute('tournaments.play.matches', tournament);
      });
    },
    addPlayer: function(tournament, player) {
      tournament.get('players').addObject(player);
      tournament.save();
      player.save();
    },
    removePlayer: function(tournament, player) {
      tournament.get('players').removeObject(player);
      tournament.save();
      player.save();
    },
    addNewPlayer: function(tournament, playerName) {
      var newPlayer = this.store.createRecord('player');
      newPlayer.set('name', playerName);
      newPlayer.save().then(function() {
        tournament.get('players').addObject(newPlayer);
        tournament.save();
      });
    },
    setType: function(type) {
      var tournament = this.get('model');
      tournament.set('type', type);
      tournament.save();
    }
  }
});
