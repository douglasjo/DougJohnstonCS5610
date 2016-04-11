var q = require("q");
module.exports=function(mongoose) {
    //module.exports=function(mongoose, db) {

    //var multer = require('multer');
    //var users = multer({dest: __dirname+'/../../user.mock.json'});
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
            User.find({}, function(err, user) {
                if (!err) {
                    deferred.resolve (user);
                } else {
                    deferred.reject (err);
                }
                return deferred.promise;
            });


            /*var deferred = q.defer();
            User.find({}, function(err, user) {
                var userMap = {};
                users.forEach(function(person) {
                    userMap[user._id] = person;
                });
                return userMap;
            });*/
        }

        function getUserById(userId){
            var deferred = q.defer();
            User.find({_id: userId},
            function (err, user) {
                if (!err) {
                    deferred.resolve (user);
                } else {
                    deferred.reject (err);
                }
            });
            return deferred.promise;

            /*
            console.log ("getById called");
            function sameId(user) {
                return (user._id == userId);
            }
            return users.find(sameId);
            */
        }

    function createUser(user){
        var deferred = q.defer();
        User.create (user,
        function (err, user) {
            if (!err) {
                deferred.resolve(user);
            } else {
                deferred.reject(err);
            }
        });
        return deferred.promise;
    }
/*
        function createUser(user){
            console.log ("createUser called");
            var person = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
                //email: user.email
            };
            users.push(person);
            console.log("users are now: " + users);

            return users;
        }
*/
        function deleteUserById(userId){
            var deferred = q.defer();
            User.remove ({_id: userId},
                function (err, user) {
                    if (!err) {
                        deferred.resolve(user);
                    } else {
                        deferred.reject(err);
                    }
                });
            return deferred.promise;

            /*
            console.log ("deleteUser called");
            function sameId(user) {
                return (user.id == userId);
            }
            var person = users.find(sameId);
            var index = users.indexOf(person);
            users.splice(index, 1);
            return users;*/
        }

        function updateUserById(userId, user){
            var deferred = q.defer();
            User.update (
                    {_id: userId},
                    {$set: user},
                    function (err, stats) {
                        if (!err) {
                            deferred.resolve(stats);
                        } else {
                            deferred.reject(err);
                        }
                    }
                );
            return deferred.promise;
            /*
            console.log ("updateUser called for: " + userId);
            console.log("user is: " + user);
            function sameId(oldUser) {
                return (oldUser._id == userId);
            }
            var person = users.find(sameId);
            var index = users.indexOf(person);
            users[index] = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
                //email: user.email
            };
            return user;*/
        }

        function findUserByUsername(username){
            var deferred = q.defer();
            User.find({username: username},
                function (err, user) {
                    if (!err) {
                        deferred.resolve (user);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;
        /*
            console.log ("findbyusername called");
            function matchByName(user) {
                return (user.username == username);
            }
            var result = users.find(matchByName);
            return result;*/
        }

        function findUserByCredentials(credentials) {
            var deferred = q.defer();
            User.find({_id: credentials.userId, password: credentials.password},
                function (err, user) {
                    if (!err) {
                        deferred.resolve (user);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;


            /*
            console.log ("findbycredentials called");
            var username = credentials.username;
            var password = credentials.password;
            console.log(credentials);
            for (i = 0; i < users.length; i++) {
                if (users[i].username == username && users[i].password == password) {
                    console.log(users[i]);
                    return users[i];
                }
            }*/

/*
            function matchByNameAndPassword(user) {
                console.log(user);
                var fits = false;
                if (user.username == username && user.password == password) {
                    fits = true;
                };
                console.log(fits);
                return (user.username == username && user.password == password);
            }
            var result = users.find(matchByNameAndPassword);
            console.log("result=" + result.object);
            return result;
            */
        }

};
