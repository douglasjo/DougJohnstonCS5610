"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, UserService) {
        var users = UserService.users;
        $scope.username = $rootScope.currentUser.username;
        $scope.password = $rootScope.currentUser.password;
        $scope.firstName = $rootScope.currentUser.firstName;
        $scope.lastName = $rootScope.currentUser.lastName;
        $scope.email = $rootScope.currentUser.email;

        /*
        $scope.updateLogin = function(person) {
            $rootScope.currentUser = person;
        };
        */


        $scope.update = function() {
            var person = {"_id": $rootScope.currentUser._id,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "username": $scope.username,
                "password": $scope.password,
                "email": $scope.email
            };
            console.log("update");
            $rootScope.currentUser = person;
            UserService.updateUser(person._id, person, $scope.updateLogin);
        };

    }
})();