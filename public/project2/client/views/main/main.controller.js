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
                $rootScope.doc=null;
                $rootScope.last="/home";

                $rootScope.navigate= function(){
                        $rootScope.last=$location;
                    }
            });
})();