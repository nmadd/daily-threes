app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('entries', {
		url: "/entries",
		templateUrl: 'js/entries/entries-view.html',
		controller: 'EntriesController',
		resolve: {
			theEntries: function(EntriesFactory){
				return EntriesFactory.getEntries()
				.then(function(response){
					return response;
				})
			}
		}

	})
});