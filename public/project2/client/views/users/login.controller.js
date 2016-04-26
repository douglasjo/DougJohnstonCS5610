"use strict";
(function() {
    angular
        .module("ProjectApp")
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
            //probably have to remove this
            UserService.login();
            //var person = UserService.findUserByCredentials($scope.username, $scope.password);
            /*person.then(function(response){
                $rootScope.currentUser= response;
                $rootScope.isLoggedIn = true;
                    if (UserService.hasRole(response, "admin")) {
                        $rootScope.adminPriv = true;
                    }
                $location.path('/profile');*/

                UserService.findUserByCredentials($scope.username, $scope.password)
                    .then(function(response) {
                        $rootScope.currentUser = response;
                        $rootScope.isLoggedIn = true;
                        if (UserService.hasRole(response, "admin")) {
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