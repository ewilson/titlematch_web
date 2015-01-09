import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tournaments: DS.hasMany('tournaments', {async: true}),
  homeMatches: DS.hasMany('match', {
    inverse: 'homePlayer'
  }),
  awayMatches: DS.hasMany('match', {
    inverse: 'awayPlayer'
  })
});
