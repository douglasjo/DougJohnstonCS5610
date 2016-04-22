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
            var person = UserService.findUserByCredentials($scope.username, $scope.password);
            person.success(function(response){
                $rootScope.currentUser= response;
                $rootScope.isLoggedIn = true;
                    if (UserService.hasRole(response.data, "admin")) {
                        $rootScope.adminPriv = true;
                    }
                $location.path('/profile');
            });

/*
            if (response == null) {
                alert("not a valid password/username combination");
            } else {
                console.log(response.$$state);
                $rootScope.currentUser=response;
                $rootScope.isLoggedIn = true;
                if (UserService.hasRole(response, "admin")) {
                    $rootScope.adminPriv = true;
                }
                $location.path('/profile');

            }*/
        }
    }
})();