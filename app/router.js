import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('tournaments', function() {
        this.route('new');
        this.route('setup', { path: '/setup/:tournament_id' });
        this.route('play', { path: '/play/:tournament_id' });
        this.route('complete', { path: '/complete/:tournament_id' });
    });
	this.route('players', { path: '/players'});
});

Router.reopen({ location: "auto" });

export default Router;
