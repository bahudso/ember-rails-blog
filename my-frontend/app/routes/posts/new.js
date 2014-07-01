export default Ember.Route.extend(
    Ember.SimpleAuth.ApplicationRouteMixin, {
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

