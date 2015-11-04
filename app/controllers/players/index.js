import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove: function(player) {
      var tournaments = player.get('tournaments').toArray();
      if (tournaments.length === 0) {
        player.destroyRecord();
      } else {
        var titles = [];
        for (var i = 0; i < tournaments.length; i++) {
          titles.push(tournaments[i].get('title'));
        }
        var msg = 'Cannot delete player now';
        var msgDetail = player.get('name') + ' is in tournament(s): ' + titles.join();
        this.set('notification', true);
        this.set('notificationBody', msgDetail);
        this.set('notificationHeading', msg);
      }
    },
    closeNotification: function() {
      this.set('notification', null);
    },
  }
});
