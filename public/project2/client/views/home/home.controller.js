"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);
    function HomeController($scope, $rootScope) {
        var output = "";
        var customSearchControl = new google.search.CustomSearchControl();
        customSearchControl.draw('search-api');

        $scope.searchForUser = function(){
            UserService.findUserByUsername($scope.search)
            .then(function(response){
                $scope.output = response;
            })
        }
    }
})();