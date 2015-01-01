import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  eventDate: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  state: DS.attr('number', {defaultValue: 0})
});

