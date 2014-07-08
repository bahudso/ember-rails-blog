import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyFrontendENV.locationType
});

Router.map(function() {
  this.route('application');
  this.route('login');

  this.resource('posts', function() {
	this.route('new');
	this.route('show', {path: ':post_id'});
	this.route('edit', {path: '/:post_id/edit'});
  });
});

export default Router;
