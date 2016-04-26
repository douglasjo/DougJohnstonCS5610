"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("AdminController", AdminController);
    function AdminController($scope, $rootScope, UserService) {
        $scope.selectedUser= {};
        var selectedId = 1;
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

        $scope.updateUser = function() {
            $scope.selectedUser.Username= $scope.selectedUsername;
            UserService.updateUser($scope.userId, $scope.selectedUser);
        };

        $scope.deleteUser = function($index) {
            var userId = $scope.allUsers[$index]._id;
            UserService.deleteUser(userId);
        };

        $scope.selectUser = function($index) {
            $scope.selectedUser=$scope.allUsers[$index];
            $scope.selectedUsername=$scope.selectedUser.Username;
        };

    }
})();