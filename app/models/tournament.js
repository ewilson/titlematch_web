import DS from 'ember-data';

var Tournament = DS.Model.extend({
  title: DS.attr('string'),
  eventDate: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  state: DS.attr('number', {defaultValue: 0})
});

Tournament.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'March Madness',
      players: [],
      state: 0
    },
    {
      id: 2,
      title: 'February Frenzy',
      players: [],
      state: 0
    },
    {
      id: 3,
      title: 'New Years smackdown',
      players: [],
      state: 0
    },
    {
      id: 4,
      title: 'Cornholier-than-thou',
      players: [],
      state: 0
    },
    {
      id: 5,
      title: 'Basement Brawl',
      players: [],
      state: 0
    },
    {
      id: 6,
      title: 'World Cup',
      players: [],
      state: 0
    },
    {
      id: 7,
      title: 'Grudge Match',
      players: [],
      state: 0
    }
  ]
});

export default Tournament;
