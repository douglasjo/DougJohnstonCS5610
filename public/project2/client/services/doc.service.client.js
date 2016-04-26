"use strict";
(function (){
    angular
        .module("ProjectApp")
        .factory("DocService", DocService);

    function DocService($http, $q) {

        return {
            createDocForUser: function(userId, doc) {
                var deferred = $q.defer();
                $http
                    .post("/api/assignment/user/:" + userId+ '/doc', doc)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            findAllDocsForUser: function (userId) {
                var deferred = $q.defer();
                $http
                    .get('/api/assignment/user/' + userId + "doc")
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            getDocById: function (docId) {
                var deferred = $q.defer();
                $http
                    .get('/api/assignment/doc' + docId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            deleteDocById: function (docId) {
                var deferred = $q.defer();
                $http
                    .delete("/api/assignment/doc/" + docId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            updateDocById: function (docId, newDoc) {
                var deferred = $q.defer();
                $http
                    .put("/api/assignment/doc/" + docId, newDoc)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            }
        };

    }
})();


