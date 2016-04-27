var q = require("q");
var mongoose = require("mongoose");

module.exports=function(mongoose, db) {

    var users = require('./user.mock.json');

    var userSchema = require("./user.schema.server.js")();
    var User = mongoose.model("User", userSchema);
    return {
        getAllUsers : getAllUsers,
        getUserById : getUserById,
        createUser : createUser,
        deleteUserById : deleteUserById,
        updateUserById : updateUserById,
        findUserByUsername : findUserByUsername,
        findUserByCredentials : findUserByCredentials
    };

        function getAllUsers(){
            var deferred = q.defer();
            User.find(function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function getUserById(userId){
            var deferred = q.defer();
            User.findById(userId, function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

    /*
     might be a problem with this
     */
        function createUser(user){
            var deferred = q.defer();
            User.create(user, function(err, doc){
                User.find(function(err, response){
                    deferred.resolve(response);
                });
            });
            return deferred.promise;
        }

        function deleteUserById(userId){
            var deferred = q.defer();
            /*User.remove({userId: userId}, function (err, user){
                deferred.resolve(user);
            });*/

            User.findById(userId, function(err, doc) {
                doc.remove();
                User.find(function(err, user) {
                    deferred.resolve(user);
                });
            });
            return deferred.promise;
        }

        function updateUserById(userId, user){
            var deferred = q.defer();
            User.update({_Id: userId}, {firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                constructiveness: user.constructiveness,
                clarity: user.clarity,
                courtesy: user.courtesy,
                favoredReviewers: user.favoredReviewers,
                password: user.password}, function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function findUserByUsername(username) {
            var deferred = q.defer();
            User.find({username: username}, function (err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
            var deferred = q.defer();
            var username = credentials.username;
            var password = credentials.password;

            User.find({username: username, password: password}, function (err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

};
