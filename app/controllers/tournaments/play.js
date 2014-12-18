import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    unstart: function() {
      var that = this;
      var model = this.get('model');
      model.set('state',0);
      model.save().then(function(tournament) {
        that.transitionToRoute('tournaments.setup', tournament);
      });
    },
    finish: function() {
      var that = this;
      var model = this.get('model');
      model.set('state',2);
      model.save().then(function(tournament) {
        that.transitionToRoute('tournaments.complete', tournament);
      });
    }
  }
});
