App.Router.map(function(){
	this.resource('movie', {path: '/movies/:imdbId'});
});

App.ApplicationRoute = Ember.Route.extend({
	model: function(){
		return $.getJSON('http://omdbapi.com/?s=social').then(function(response){
			console.log(response.Search);
			return response.Search;
		});	
	}
});

App.SearchRoute = Ember.Route.extend({
	model: function(params){
		return $.getJSON('http://omdbapi.com/?s='+params.search)
	}
})

App.MovieRoute = Ember.Route.extend({
	model: function(params){
		//debugger;
		return $.getJSON('http://omdbapi.com/?i=' +params.imdbId)
		.then(function(response){
			return response;
		});
	}
});