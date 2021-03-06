app.controller("SubmitEntryController", function($scope, $http, SubmitEntryFactory, AuthService) {

    $scope.entryFormData = {};

    $scope.fields = [{prompt: "Dummy Question Data"}, {prompt: "Another hard coded test question"}];


    $scope.createArray = function(num) {
        return new Array(num);
    };

    // $scope.addField = function() {
    //     var newField = {
    //         prompt: $scope.prompt,
    //         date: new Date(),
    //         answer_lines: $scope.number_answers,
    //         answer_type: $scope.answer_type
    //     };
    //     $http({
    //         method: "POST",
    //         url: "/api/fields/",
    //         data: newField
    //     })
    // };

    $scope.addEntry = function(entryFormData) {
    	var entryKeys = Object.keys(entryFormData);
        var fields = entryKeys.map(function(key) {
            return entryFormData[key];
        });

        AuthService.getLoggedInUser()
            .then(function(user) {
               
                var newEntry = {
                    user: user._id,
                    date: new Date(),
                    fields: fields
                };
                $http({
                    method: "POST",
                    url: "/api/entries/",
                    data: newEntry
                })
            })


    };
})
