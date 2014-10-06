KHalvdagEmber.Router.map(function () {
  // Add your routes here
  this.route('me', {path: '/me'});
  this.route('you', {path: '/you'});
});

KHalvdagEmber.Router.reopen({
	rootURL: '/start'
});
