import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		delete: function(post) {
			post.deleteRecord();

			var self = this;
			post.save().then(function() {
				self.transitionToRoute('posts');
			});
		}

	}
});
