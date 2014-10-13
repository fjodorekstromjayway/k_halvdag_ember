Movies.Router.map(function() {
  this.resource('movies', { path: '/'}, function(){
    this.route('active');
    this.route('completed');
    this.route('search', {path: '/search/:query'});
  });
});

Movies.ApplicationRoute = Ember.Route.extend({
  model: function(){
    this.store.push('movie', {
      id: 1,
      title: 'Apantrapan',
      year: '1976',
      imdbId: '4',
      type: 'movie'
    });
  }
});

Movies.MoviesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('movie');
  }
});

Movies.MoviesIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('movies');
  }
});