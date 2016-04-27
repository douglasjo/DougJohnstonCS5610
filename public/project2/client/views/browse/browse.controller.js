"use strict";
(function() {
    angular
        .module("ProjectApp")
        .controller("BrowseController", BrowseController);
    function BrowseController($scope, $rootScope, UserService) {
        $scope.allUsers = UserService.findAllUsers();

        $scope.addUser = function(index){
            UserService.addOrDeleteFavoredReviewer(allUsers[index]._id, 0, true, allUsers[index]);
        }

    }
})();