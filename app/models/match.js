import DS from 'ember-data';

export default DS.Model.extend({
  tournament: DS.belongsTo('tournament'),
  homePlayer: DS.belongsTo('player', {async: true}),
  awayPlayer: DS.belongsTo('player', {async: true}),
  homeScore: DS.attr('number', {defaultValue: 0}),
  awayScore: DS.attr('number', {defaultValue: 0}),
  completed: DS.attr('boolean'),

  homeWinner: function() {
    var homeScore = this.get('homeScore');
    var awayScore = this.get('awayScore');
    return homeScore > awayScore;
  }.property('homeScore', 'awayScore'),
  awayWinner: function() {
    var homeScore = this.get('homeScore');
    var awayScore = this.get('awayScore');
    return homeScore < awayScore;
  }.property('homeScore', 'awayScore')

});
