import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  tournament: DS.belongsTo('tournament'),
  homePlayer: DS.belongsTo('entry', {async: true}),
  awayPlayer: DS.belongsTo('entry', {async: true}),
  homeScore: DS.attr('number', {defaultValue: 0}),
  awayScore: DS.attr('number', {defaultValue: 0}),
  completed: DS.attr('boolean'),

  homeWinner: Ember.computed('homeScore', 'awayScore', function() {
    var homeScore = this.get('homeScore');
    var awayScore = this.get('awayScore');
    return homeScore > awayScore;
  }),
  awayWinner: Ember.computed('homeScore', 'awayScore', function() {
    var homeScore = this.get('homeScore');
    var awayScore = this.get('awayScore');
    return homeScore < awayScore;
  }),
  tie: Ember.computed('homeScore', 'awayScore', 'completed', function() {
    var homeScore = this.get('homeScore');
    var awayScore = this.get('awayScore');
    var completed = this.get('completed');
    return homeScore === awayScore && completed;
  }),
  pool: Ember.computed('homePlyaer', function() {
    return this.get('homePlayer.pool');
  })
});
