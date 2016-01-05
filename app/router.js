import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router;
Router.map(function () {
  this.route('tournaments', function () {
    this.route('new');
    this.route('setup', {path: '/setup/:tournament_id'});
    this.route('play', {path: '/play/:tournament_id'}, function () {
      this.route('matches');
      this.route('standings');
    });
    this.route('complete', {path: '/complete/:tournament_id'}, function() {
      this.route('standings');
      this.route('matches');
    });
    this.route("archive");
  });
  this.route('players', function(){
    this.route('new');
  });
});

Router.reopen({ location: "auto" });
