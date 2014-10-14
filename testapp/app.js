var App = Ember.Application.create();

App.ApplicationStore = DS.Store.extend({
	revision: 12,
	adapter: DS.RESTAdapter.create({
		url: 'http://omdbapi.com/'
	})
});

App.Movie = DS.Model.extend({
	imdbId: DS.attr('string'),
	title: DS.attr('string'),
	year: DS.attr('string'),
	rated: DS.attr('string'),
	released: DS.attr('string'),
	runtime: DS.attr('string'),
	genre: DS.attr('string'),
	director: DS.attr('string'),
	writer: DS.attr('string'),
	plot: DS.attr('string'),
	poster: DS.attr('string')
});