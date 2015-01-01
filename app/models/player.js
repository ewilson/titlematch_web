import DS from 'ember-data';

var Player = DS.Model.extend({
  name: DS.attr('string')
});

Player.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Joe'
    },
    {
      id: 2,
      name: 'Jack'
    },
    {
      id: 3,
      name: 'Jerry'
    },
    {
      id: 4,
      name: 'John'
    },
    {
      id: 5,
      name: 'Jason'
    },
    {
      id: 6,
      name: 'Jeff'
    },
    {
      id: 7,
      name: 'Jake'
    },
    {
      id: 8,
      name: 'Joe'
    }
  ]
});

export default Player;
