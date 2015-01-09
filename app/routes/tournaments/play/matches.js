import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    completeMatch: function(match) {
      match.set('completed', true);
      match.save();
      return false;
    },
    undoMatch: function(match) {
      match.set('completed', false);
      match.set('homeScore', 0);
      match.set('awayScore', 0);
      match.save();
      return false;
    }
  }
});
