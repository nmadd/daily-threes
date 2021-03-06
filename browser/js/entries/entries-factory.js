app.factory('EntriesFactory', function($http, AuthService) {
    var factory = {};


    factory.getEntries = function() {
        return AuthService.getLoggedInUser()
        .then(function(user) {
            return $http({
                method: "GET",
                url: "/api/entries/" + user._id
            })
        })

        .then(function(response) {
            return response.data
        })
    };

    return factory;
})
