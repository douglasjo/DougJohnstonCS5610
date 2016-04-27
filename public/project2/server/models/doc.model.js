var q = require("q");
var mongoose = require("mongoose");

module.exports=function(mongoose, db) {
    //var docs = require('./doc.mock.json');
    var docSchema = require("./doc.schema.server.js")();
    var Doc = mongoose.model("Doc", docSchema);

    (function () {
        return {
            getAllDocs: getAllDocs,
            getDocById: getDocById,
            createDoc: createDoc,
            deleteDocById: deleteDocById,
            updateDocById: updateDocById,
            findDocByTitle: findDocByTitle,
            deleteReview: deleteReview,
            createReview: createReview,
            updateReview: updateReview,
            getSharedDocs: getSharedDocs

        };

        function getAllDocs() {
            var deferred = q.defer();
            Doc.find(function(err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

        function getDocsByUserId(userId) {
            var deferred = q.defer();
            Doc.find({userId: userId}, function(err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

        function getDocById(docId) {
            var deferred = q.defer();
            Doc.findById(userId, function(err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

        function createDoc(document) {
            var deferred = q.defer();
            Doc.create(page, function(err, doc){
                Doc.find(function(err, document){
                    deferred.resolve(document);
                });
            });
            return deferred.promise;
        }

        function deleteDocById(docId) {
            var deferred = q.defer();
            Doc.findById(userId, function(err, doc) {
                doc.remove();
                From.find(function(err, document) {
                    deferred.resolve(document);
                });
            });
            return deferred.promise;
        }

        function updateDocById(docId, doc) {
            var deferred = q.defer();
            Doc.update({_Id: docId}, {userId: doc.userId,
                sharedWith: doc.sharedWith,
                title: doc.title,
                content: doc.content,
                created: doc.created,
                reviews: doc.reviews,
                updated: doc.updated}, function(err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

        function findDocByTitle(title) {
            var deferred = q.defer();
            Doc.find({title: title}, function (err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

        function deleteReview(docId, reviewId){
            var deferred = q.defer();
            Doc.findOne({'_id' : docId}, function(err, document) {
                for (var i = 0; i <= document.reviews.length; i++) {
                    if (document.reviews[i]._id == reviewId) {
                        document.reviews.remove(reviewId);
                    }
                }
            });
            return deferred.promise;
        }

        function createReview(docId, review){
            var deferred = q.defer();
            Doc.findOne({'_id' : docId}, function(err, document) {
                document.reviews.create(review);
            });
            return deferred.promise;
        }

        function updateReview(docId, reviewId, review){
            var deferred = q.defer();
            Doc.findOne({'_id' : docId}, function(err, document) {
                for (var i = 0; i <= document.reviews.length; i++) {
                    if (document.reviews[i]._id == reviewId) {
                        document.reviews.update(reviewId, review);
                    }
                }
            });
            return deferred.promise;
        }

        function getSharedDocs(userId){
            var deferred = q.defer();
            Doc.find({sharedWith: userId}, function(err, document){
                deferred.resolve(document);
            });
            return deferred.promise;
        }

    })()
};
