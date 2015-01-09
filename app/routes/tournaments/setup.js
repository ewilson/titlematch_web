import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var that = this;
    var players = this.store.find('player');
    players.then(function() {
      that.controllerFor('players').set('model',players);
    });
  }
});
