import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tournaments: DS.hasMany('tournaments', {async: true}),
});
