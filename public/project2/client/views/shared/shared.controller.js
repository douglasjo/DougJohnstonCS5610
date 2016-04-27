"use strict";
(function() {
    angular
        .module("ProjectApp")
        .controller("SharedController", SharedController);
    function SharedController($scope, $rootScope, DocService, ReviewService) {
        $scope.sharedDocs = DocService.getSharedDocs($rootScope.currentUser._id, true);
        $scope.selected = {};

        $scope.select = function(index){
            $scope.selected = $scope.sharedDocs[index];
        };

        $scope.addReview = function(){
            ReviewService.createReviewForDoc($scope.selected._id, $scope.review);
        }
    }
})();