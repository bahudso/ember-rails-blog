import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
    AuthenticatedRouteMixin, {
    controllerName: 'posts.edit',

    renderTemplate: function() {
      this.render('posts.form');
    },

    model: function() {
        return this.store.createRecord('post');
    },

    deactivate: function () {
      // this is meant to rollback a 'cancel'
      // do we need to guard against rollingback a submit
      this.currentModel.rollback();
    }
});

