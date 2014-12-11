import DS from 'ember-data';

var Tournament = DS.Model.extend({
    name: DS.attr('string'),
    eventDate: DS.attr('date', {
        defaultValue: function() { return new Date(); }
    }),
    state: DS.attr('number', {defaultValue: 0})
});

Tournament.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'March Madness',
            state: 0
        },
        {
            id: 2,
            name: 'February Frenzy',
            state: 2
        },
        {
            id: 3,
            name: 'New Years smackdown',
            state: 2
        },
        {
            id: 4,
            name: 'Cornholier-than-thou',
            state: 2
        },
        {
            id: 5,
            name: 'Basement Brawl',
            state: 1
        },
        {
            id: 6,
            name: 'World Cup',
            state: 1
        },
        {
            id: 7,
            name: 'Grudge Match',
            state: 0
        }
    ]
});

export default Tournament;
