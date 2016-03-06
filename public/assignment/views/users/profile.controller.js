"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, UserService) {
        console.log($rootScope.currentUser.username);
        $scope.username = $rootScope.currentUser.username;
        $scope.password = $rootScope.currentUser.password;
        $scope.firstName = $rootScope.currentUser.firstName;
        $scope.lastName = $rootScope.currentUser.lastName;
        $scope.email = $rootScope.currentUser.email;

        var users = UserService.users;

        $scope.updateLogin = function(person) {
            $rootScope.currentUser = person;
            console.log("updateLogin");
            console.log(person);
            console.log($rootScope.currentUser);

        };


        $scope.update = function() {
            var person = {"_id": $rootScope.currentUser._id,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "username": $scope.username,
                "password": $scope.password,
                "email": $scope.email
            };
            console.log("update");
            UserService.updateUser(person._id, person, $scope.updateLogin);
        };

    }
})();