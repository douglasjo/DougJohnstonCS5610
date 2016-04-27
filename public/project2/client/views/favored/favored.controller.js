"use strict";
(function() {
    angular
        .module("ProjectApp")
        .controller("FavoredController", FavoredController);
    function FavoredController($scope, $rootScope, UserService) {
        $scope.myusers = $rootScope.currentUser.favoredReviewers;

        $scope.addUser = function($index) {
            UserService.addOrDeleteFavoredReviewer($rootScope.currentUser._id, $index, true, $scope.toAdd);
        };

        $scope.deleteUser = function($index) {
            UserService.addOrDeletefavoredReviewer($rootScope.currentUser._id, $index, false, $scope.toAdd);
        };
    }
})();