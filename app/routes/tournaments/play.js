import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(template) {
      return this.render(template, {
        into: 'tournaments/play',
        outlet: 'settings'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'settings',
        parentView: 'tournaments/play'
      });
    }
  }
});
