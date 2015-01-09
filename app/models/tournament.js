import DS from 'ember-data';

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
  }.property('matches.@each.completed')
});

