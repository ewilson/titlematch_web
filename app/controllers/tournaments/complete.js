import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    reopen: function() {
      var that = this;
      var model = this.get('model');
      model.set('state', 1);
      model.save().then(function (tournament) {
        that.transitionToRoute('tournaments.play', tournament);
      });
    }
  }
});