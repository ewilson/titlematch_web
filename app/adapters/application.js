import DS from 'ember-data';

export default DS.FixtureAdapter.extend({

});

export default DS.FixtureAdapter.extend({
    queryFixtures: function(records, query, type) {
        return records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value && type === type) { return false; }
            }
            return true;
        });
    }
});


//App.Store = DS.Store.extend({
//    adapter: 'Fixture'
//});