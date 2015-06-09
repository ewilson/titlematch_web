import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    openModal: function(template) {
      return this.render(template, {
        into: 'tournaments/complete',
        outlet: 'settings'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'settings',
        parentView: 'tournaments/complete'
      });
    }
  }

});
