"use strict";
(function(){
    angular
        .module("FormBuilderApp")

        .controller("RegisterController", RegisterController);
    function RegisterController($scope, $rootScope, $location, UserService) {

        var users = UserService.users;

        function regNav (person) {
            $rootScope.currentUser=person;
            $rootScope.isLoggedIn = true;
            if (UserService.hasRole(person, "admin")) {
                $rootScope.adminPriv = true;
            }
            $location.path('/profile');
        }

        $scope.register = function () {
            if ($scope.password != $scope.verify) {
                alert("passwords do not match");
            } else {
                var person = {
                    "_id": (new Date).getTime(),
                    "firstName": "",
                    "lastName": "",
                    "username": $scope.username,
                    "password": $scope.password,
                    "roles": [],
                    "email": $scope.email
                };
                UserService.createUser(person, regNav);
            }
        }
    }
})();