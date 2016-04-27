"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("AdminController", AdminController);
    function AdminController($scope, $rootScope, UserService) {
        $scope.selectedUser= {};
        $scope.allUsers = UserService.findAllUsers();

        $scope.addUser = function() {
            var newUser = {
                "Username": $scope.selectedUsername,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };
            DocService.createUser(newUser);
            $scope.allUsers = UserService.findAllUsers();
        };

        $scope.deleteUser = function($index) {
            var userId = $scope.allUsers[$index]._id;
            UserService.deleteUser(userId);
        };

        $scope.selectUser = function($index) {
            $scope.selectedUser=$scope.allUsers[$index];
            $scope.selectedUsername=$scope.selectedUser.Username;
        };

        $scope.update = function() {
            var person = {"_id": $scope.selectedUser._id,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "username": $scope.username,
                "password": $scope.password,
                "email": $scope.email
            };
            $rootScope.currentUser = person;
            UserService.updateUser(person._id, person, $scope.updateLogin);
        };
    }
})();