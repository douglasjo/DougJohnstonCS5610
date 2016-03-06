"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $rootScope) {
        $scope.logOut = function(){
            $rootScope.isLoggedIn = false;
            $rootScope.adminPriv = false;
            $rootScope.currentUser = {};
        };
    }
})();