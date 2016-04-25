"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController",
            function($scope, $location, $rootScope) {
                $scope.$location = $location;
                $rootScope.isLoggedIn = false;
                $rootScope.adminPriv = false;
                $rootScope.currentUser = {};
                $rootScope.form=null;
            });
})();