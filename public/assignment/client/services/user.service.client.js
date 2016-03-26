(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {

        //var users = findAllUsers();

        return {
            //users: users,
/*
            fakeCallback: function(response){
                return response;
            },
            */

            getUserById: function(userId) {
                var deferred = $q.defer();
                $http
                    .get("/api/assignment/user/" + userId)
                    .success(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;

                /*
                function sameId(user) {
                    return (user.id == userId);
                }
                return users.find(sameId);*/
            },

            hasRole: function(user, role) {
                if (user.roles == null) {
                    return null;
                } else {
                    function matchRole(string) {
                        return string == role;
                    }
                }
                return user.roles.find(matchRole);
            },

            findUserByCredentials: function(username, password) {
                //var username = credentials.username;
                //var password = credentials.password;
                //var url = "/api/assignment/user?username=" + username + "&password=" + password;
                var deferred = $q.defer();
                //console.log("/api/assignment/user?username=" + username + "&password=" + password);
                $http
                    .get("/api/assignment/user?username=" + username + "&password=" + password)
                    .success(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                function matchByNameAndPassword(user) {
                    return (user.username == username && user.password == password);
                }
                var result = users.find(matchByNameAndPassword);
                if (result == null) {
                    return result;
                } else callback(result);*/
            },

            findAllUsers: function() {
                var deferred = $q.defer();
                $http
                    .get("/api/assignment/user")
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                //callback(users);
            },

            createUser: function(user) {
                console.log('client create called');
                var deferred = $q.defer();
                $http
                    .post("api/assignment/user", user)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                var person = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    password: user.password,
                    email: user.email
                };
                users.push(person);
                callback(person);*/
            },

            deleteUserById: function(userId) {
                var deferred = $q.defer();
                console.log("deleting user..." + userId);
                $http
                    .delete("/api/assignment/user/" + userId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                function sameId(user) {
                    return (user.id == userId);
                }
                var person = users.find(sameId);
                var index = users.indexOf(person);
                $scope.users.splice(index, 1);
                callback(users);*/
            },

            updateUser: function(userId, user) {
                var deferred = $q.defer();
                $http
                    .put("/api/assignment/user/"+ userId, user)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                function sameId(user) {
                    return (user.id == userId);
                }
                var person = users.find(sameId);
                var index = users.indexOf(person);
                users[index] = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    password: user.password,
                    email: user.email
                };
                callback(user);*/
            },

            findUserByUsername: function (username) {
                var deferred = $q.defer();
                var url= "/api/assignment/user?username=" + username;
                $http
                    .get(url)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            }
        };
    }
})();
