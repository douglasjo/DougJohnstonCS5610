"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $rootScope) {
        $scope.logOut = function(){
            //probably have to remove this
            UserService.logout();
            $rootScope.isLoggedIn = false;
            $rootScope.adminPriv = false;
            $rootScope.currentUser = {};
        };
    }
})();