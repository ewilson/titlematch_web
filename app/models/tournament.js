import DS from 'ember-data';

import buildStandings from 'titlematch-web/utils/build-standings';

export default DS.Model.extend({
  title: DS.attr('string'),
  players: DS.hasMany('player', {async: true}),
  eventDate: DS.attr('string', {
    defaultValue: '2014-12-12'
  }),
  state: DS.attr('number', {defaultValue: 0}),
  matches: DS.hasMany('match', {async: true, defaultValue: []}),

  completedMatches: function() {
    return this.get('matches').filterBy('completed', true);
  }.property('matches.@each.completed'),

  scheduledMatches: function() {
    return this.get('matches').filterBy('completed', false);
  }.property('matches.@each.completed'),

  standings: function() {
    var players = this.get('players');
    var matches = this.get('completedMatches');
    return buildStandings(players, matches);
  }.property('players', 'completedMatches'),

  winner: function() {
    var standings = this.get('standings');
    return standings.slice(0,1)[0];
  }.property('standings'),

  done: function() {
    return this.get('scheduledMatches.length') === 0;
  }.property('scheduledMatches'),

  notStarted: function() {
    return this.get('completedMatches.length') === 0;
  }.property('completedMatches')

});

