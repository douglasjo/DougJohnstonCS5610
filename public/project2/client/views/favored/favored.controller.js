"use strict";
(function() {
    angular
        .module("ProjectApp")
        .controller("FavoredController", FavoredController);
    function FavoredController($scope, $rootScope, UserService) {
        $scope.myusers = $rootScope.currentUser.favoredReviewers;


        $scope.deleteUser = function($index) {
            UserService.deletefavoredReviewer($rootScope.currentUser._id, $index);
        };
    }
})();