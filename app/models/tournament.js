import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  entries: DS.hasMany('entry', {async: true, defaultValue: []}),
  eventDate: DS.attr('string', {
    defaultValue: new Date().toJSON().slice(0,10)
  }),
  state: DS.attr('number', {defaultValue: 0}),
  matches: DS.hasMany('match', {async: true, defaultValue: []}),
  type: DS.attr('number', {defaultValue: 0}),
  completedMatches: Ember.computed('matches.@each.completed', function() {
    return this.get('matches').filterBy('completed', true);
  }),
  scheduledMatches: Ember.computed('matches.@each.completed', function() {
    return this.get('matches').filterBy('completed', false);
  }),

  standings: Ember.computed('entries.@each.sortPerc', 'entries.@each.wins', 'entries.@each.pm', function() {
    var entries = this.get('entries');
    return entries.sortBy('sortPerc', 'wins', 'pm').reverse();
  }),

  winner: Ember.computed('standings', function() {
    var standings = this.get('standings');
    return standings.slice(0,1)[0];
  }),

  done: Ember.computed('scheduledMatches', function() {
    return this.get('scheduledMatches.length') === 0;
  }),

  notStarted: Ember.computed('completedMatches', function() {
    return this.get('completedMatches.length') === 0;
  }),

  pools: Ember.computed('entries.@each.pool', function() {
    var poolArray = this.get('entries.@each.pool').toArray();
    var uniqPools = {};
    for (var i = 0; i < poolArray.length; i++) {
      uniqPools[poolArray[i]] = 1;
    }
    return Object.keys(uniqPools).sort();
  }),
  hasPools: Ember.computed('pools', function() {
    return this.get('pools').length > 1;
  }),

  completedPoolMatches: Ember.computed('completedMatches', 'activePool', function() {
    var completedMatches = this.get('completedMatches');
    var activePool = this.get('activePool');
    if (typeof activePool === 'undefined' || activePool === '0') {
      return completedMatches;
    } else {
      return completedMatches.filterBy('pool', activePool);
    }
  }),

  scheduledPoolMatches: Ember.computed('scheduledMatches', 'activePool', function() {
    var scheduledMatches = this.get('scheduledMatches');
    var activePool = this.get('activePool');
    if (typeof activePool === 'undefined' || activePool === '0') {
      return scheduledMatches;
    } else {
      return scheduledMatches.filterBy('pool', activePool);
    }
  }),

  poolStandings: Ember.computed('standings', 'activePool', function() {
    var standings = this.get('standings');
    var activePool = this.get('activePool');
    if (typeof activePool === 'undefined' || activePool === '0') {
      return standings;
    } else {
      return standings.filterBy('pool', activePool);
    }
  })
});
