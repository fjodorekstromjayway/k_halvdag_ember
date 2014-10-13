Movies.MoviesController = Ember.ArrayController.extend({
	doSearch: function(){
		var query = this.get('search');
		this.set('searchQuery', query);
		this.transitionToRoute('search', query);
	}
});