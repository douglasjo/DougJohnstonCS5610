(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {
        return {

            getUserById: function(userId) {
                var deferred = $q.defer();
                $http
                    .get("/api/assignment/user/" + userId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
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
                var deferred = $q.defer();

                var credentials = {username: username, password: password};
                console.log("client username is: " + credentials.username);
                console.log("client password is: " + credentials.password);
                /*$http
                    .get("/api/assignment/user?username="+ username + "&password="+ password)
                    .then(function(response){
                        deferred.resolve(response);
                    });*/
                $http
                 .get("/api/assignment/test")
                 .then(function(response){
                    console.log("by credentials!");
                    deferred.resolve(response);
                 });
                return deferred.promise;
            },

            findAllUsers: function() {
                var deferred = $q.defer();
                $http
                    .get("/api/assignment/user")
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*callback(users);
                 */
            },

            createUser: function(user) {
                console.log('client create called');
                console.log(user);
                var deferred = $q.defer();
                $http
                    .post("api/assignment/user", user)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
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
            },

            updateUser: function(userId, user) {
                var deferred = $q.defer();
                $http
                    .put("/api/assignment/user/"+ userId, user)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            findUserByUsername: function (username) {
                var deferred = $q.defer();
                $http
                    .get("/api/assignment/user?username=" + username)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            }
        };
    }
})();
