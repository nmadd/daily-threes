app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('submit', {
		url: "/submit",
		templateUrl: 'js/submit-entry/submit-entry-view.html',
		controller: 'SubmitEntryController'
	})
})