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
            findDocByTitle: findDocByTitle
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

        /*
        might be a problem with this
         */
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
            User.update({_Id: docId}, {userId: doc.userId,
                title: doc.title,
                content: doc.content,
                created: doc.created,
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

    })()
};
