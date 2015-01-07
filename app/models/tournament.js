import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  players: DS.hasMany('player', {async: true}),
  eventDate: DS.attr('string', {
    defaultValue: '2014-12-12'
  }),
  state: DS.attr('number', {defaultValue: 0})
});

