Movies.MoviesController = Ember.ArrayController.extend({
  actions: {
    searchMovie: function(){
      console.log('Searching for: ' + this.get('search'));
      var store = this.store;
      this.deleteRecords('movie');
      var addMovieRecord = this.addMovieRecord;


      $.getJSON('http://omdbapi.com/?s=' + this.get('search'), function(data){
        console.log(data);
        if(data['Error']){
          return;
        }
        data['Search'].forEach(function(movie){
          addMovieRecord(movie, store);
        });
        
      });
    }
  },
  deleteRecords: function(type){
    this.store.unloadAll(type);
  },
  addMovieRecord: function(data, store){
    var movie = store.createRecord('movie', {
      id: data['imdbId'],
      title: data['Title'],
      year: data['Year'],
      imdbId: data['imdbId'],
      type: data['Type']
    });
    movie.save();
  }
  
});