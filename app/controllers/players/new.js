import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var that = this;
      this.get('model').save().then(function () {
        that.transitionToRoute('players');
      });
      return false;
    }
  }
});
