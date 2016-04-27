"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("DocController", DocController);
    function DocController($scope, $rootScope, DocService, ReviewService) {
        $scope.selectedDoc= {};
        $scope.myDocs = DocService.findAllDocsForUser($rootScope.currentUser._id);

        $scope.addReviewer = function(){
            ReviewService.addReviewer($scope.selectedDoc._id, $scope.revName);
        };

        $scope.rateReview = function($index) {
            var review = selectedDoc.reviews[$index];
            var newReview = {
                "_id": review._id,
                "username": review.username,
                constructiveness: $scope.constructiveness,
                clarity: $scope.clarity,
                courtesy: $scope.courtesy,
                content: review.content
            };
            ReviewService.updateReview($scope.selectedDoc._id, review._id, newReview);
        };

        $scope.addDoc = function() {
            var newDoc = {
                "title": $scope.selectedTitle,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };
            DocService.createDocForUser($rootScope.currentUser._id, newDoc);
            $scope.myDocs = FormService.findAllDocsForUser($rootScope.currentUser._id);
        };

        $scope.updateDoc = function() {
            $rootScope.doc=$scope.selecteddoc;
            $scope.selectedDoc.title= $scope.selectedTitle;
            FormService.updateDocById($scope.formId, $scope.selectedDoc);
        };

        $scope.deleteDoc = function($index) {
            var docId = $scope.myDocs[$index]._id;
            DocService.deleteDocById(docId);
        };

        $scope.selectDoc = function($index) {
            $scope.selectedDoc=$scope.myDocs[$index];
            $scope.selectedTitle=$scope.selectedDoc.title;
            $rootScope.form=$scope.selectedDoc;
        };
    }
})();