import DS from 'ember-data';

var Player = DS.Model.extend({
  name: DS.attr('string')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Joe',
      tournaments: []
    },
    {
      id: 2,
      name: 'Jack',
      tournaments: []
    },
    {
      id: 3,
      name: 'Jerry',
      tournaments: []
    },
    {
      id: 4,
      name: 'John',
      tournaments: []
    },
    {
      id: 5,
      name: 'Jason',
      tournaments: []
    },
    {
      id: 6,
      name: 'Jeff',
      tournaments: []
    },
    {
      id: 7,
      name: 'Jake',
      tournaments: []
    },
    {
      id: 8,
      name: 'Joe',
      tournaments: []
    }
  ]
});

export default Player;
