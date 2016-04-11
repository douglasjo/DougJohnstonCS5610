"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    function LoginController($scope, $rootScope, $location, UserService) {
        /*function nav(response) {
            if (response == null) {
                alert("not a valid password/username combination");
            } else {
                $rootScope.currentUser=response;
                $rootScope.isLoggedIn = true;
                if (UserService.hasRole(response, "admin")) {
                    $rootScope.adminPriv = true;
                }
                $location.path('/profile');
            }
        }*/

        $scope.login = function() {
            console.log("login called");
            var response = UserService.findUserByCredentials($scope.username, $scope.password);
            if (response == null) {
                alert("not a valid password/username combination");
            } else {
                console.log("response=" + response.object);
                console.log(response.$$state);
                $rootScope.currentUser=response;
                $rootScope.isLoggedIn = true;
                if (UserService.hasRole(response, "admin")) {
                    $rootScope.adminPriv = true;
                }
                $location.path('/profile');
            }
        }
    }
})();