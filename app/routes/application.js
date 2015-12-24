import Ember from 'ember';
import Menu from '../models/menu';

export default Ember.Route.extend({
  model() {
    var menu = Menu.create();
    menu.set('tournaments',this.store.findAll('tournament'));
    return menu;
  }
});
