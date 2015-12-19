import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  player: DS.belongsTo('player', {async: true}),
  tournament: DS.belongsTo('tournament', {async: true}),
  homeMatches: DS.hasMany('match', {
    inverse: 'homePlayer',
    async: true
  }),
  awayMatches: DS.hasMany('match', {
    inverse: 'awayPlayer',
    async: true
  }),
  pool: DS.attr('string', { defaultValue: ''}),
  wins: Ember.computed('homeMatches.@each.homeWinner', 'awayMatches.@each.awayWinner', function() {
    var homeWins = this.get('homeMatches').filterBy('homeWinner', true).toArray();
    var awayWins = this.get('awayMatches').filterBy('awayWinner', true).toArray();
    return homeWins.length + awayWins.length;
  }),
  losses: Ember.computed('homeMatches.@each.homeWinner', 'awayMatches.@each.awayWinner', function() {
    var homeLosses = this.get('homeMatches').filterBy('awayWinner', true).toArray();
    var awayLosses = this.get('awayMatches').filterBy('homeWinner', true).toArray();
    return homeLosses.length + awayLosses.length;
  }),
  ties: Ember.computed('homeMatches.@each.tie', 'awayMatches.@each.tie', function() {
    var homeTie = this.get('homeMatches').filterBy('tie').toArray();
    var awayTie = this.get('awayMatches').filterBy('tie').toArray();
    return homeTie.length + awayTie.length;
  }),
  pf: Ember.computed('homeMatches.@each.homeScore', 'awayMatches.@each.awayScore', function() {
    var pf = 0;
    var homeMatches = this.get('homeMatches').toArray();
    var awayMatches = this.get('awayMatches').toArray();
    for (var i = 0; i < homeMatches.length; i++) {
      pf += homeMatches[i].get('homeScore');
    }
    for (i = 0; i < awayMatches.length; i++) {
      pf += awayMatches[i].get('awayScore');
    }
    return pf;
  }),
  pa: Ember.computed('homeMatches.@each.awayScore', 'awayMatches.@each.homeScore', function() {
    var pf = 0;
    var homeMatches = this.get('homeMatches').toArray();
    var awayMatches = this.get('awayMatches').toArray();
    for (var i = 0; i < homeMatches.length; i++) {
      pf += homeMatches[i].get('awayScore');
    }
    for (i = 0; i < awayMatches.length; i++) {
      pf += awayMatches[i].get('homeScore');
    }
    return pf;
  }),
  pm: Ember.computed('pf', 'pa', function() {
    return this.get('pf') - this.get('pa');
  }),
  perc: Ember.computed('wins', 'ties', 'losses', function() {
    var wins = this.get('wins');
    var ties = this.get('ties');
    var losses = this.get('losses');
    return (wins + ties/2) / (wins + losses + ties);
  }),
  dispPerc: Ember.computed('perc', function() {
    var perc = this.get('perc');
    return isNaN(perc) ? '-' : perc.toFixed(2);
  }),
  sortPerc: Ember.computed('perc', function() {
    var perc = this.get('perc');
    return isNaN(perc) ? 0.499 : perc;
  }),
  name: Ember.computed('player.name', function() {
    return this.get('player.name');
  })
});
