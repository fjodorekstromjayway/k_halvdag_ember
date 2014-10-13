Movies.Movie = DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('string'),
  imdbId: DS.attr('string'),
  type: DS.attr('string')
});
Movies.Movie.FIXTURES = [];
