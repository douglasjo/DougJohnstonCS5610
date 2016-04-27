"use strict";
(function () {
    angular
        .module("ProjectApp")
        .factory("ReviewService", ReviewService);

    function ReviewService($http, $q) {

        return {
            createReviewForDoc : createReviewForDoc,
            getReviewsForDoc : getReviewsForDoc,
            getReviewForDoc : getReviewForDoc,
            deleteReviewFromDoc : deleteReviewFromDoc,
            updateReview : updateReview
        };

        function createReviewForDoc (docId, review) {
            var deferred = $q.defer();
            $http
                .post("/api/assignment/doc/" + docId + '/review', review)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getReviewsForDoc (docId) {
            var deferred = $q.defer();
            $http
                .get('/api/assignment/doc/' + docId +'/review')
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getReviewForDoc (docId, reviewId) {
            var deferred = $q.defer();
            $http
                .get('/api/assignment/doc/' + docId +'/review' + reviewId)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteReviewFromDoc (docId, reviewId) {
            var deferred = $q.defer();
            $http
                .delete("/api/assignment/doc/" + docId + 'review' + reviewId)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function updateReview (docId, reviewId, newreview) {
            var deferred = $q.defer();
            $http
                .put("/api/assignment/doc/" + docId + 'review' + reviewId, newreview)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    }
})();