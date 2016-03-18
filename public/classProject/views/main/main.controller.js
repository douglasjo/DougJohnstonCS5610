"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("MainController",
            function($scope, $location, $rootScope) {
                $scope.$location = $location;
                $rootScope.isLoggedIn = false;
                $rootScope.adminPriv = false;
                $rootScope.currentUser = {};

            });
})();