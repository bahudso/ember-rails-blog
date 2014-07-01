import Ember from 'ember';

export default Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('post');
  }
});