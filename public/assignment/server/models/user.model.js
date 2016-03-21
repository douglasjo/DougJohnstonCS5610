(function(){
    angular
        .module("UserModelApp", []);

    (function ($http, $q) {
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
            var deferred = $q.defer();
            $http
                .get("/api/assignment/user")
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getUserById(userId){
            var deferred = $q.defer();
            $http
                .get("/api/assignment/user/" + userId)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function createUser(){
            var deferred = $q.defer();
            $http
                .post("api/assignment/user", user)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteUserById(userId){
            var deferred = $q.defer();
            console.log("deleting user..." + userId);
            $http
                .delete("/api/assignment/user/" + userId)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function updateUserById(userId, user){
            var deferred = $q.defer();
            $http
                .put("/api/assignment/user/"+ userId, user)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();
            var url= "/api/assignment/user?username=" + username;
            $http
                .get(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
            var deferred = $q.defer();
            var username = credentials.username;
            var password = credentials.password;
            var url = "/api/assignment/user?username=" + username + "&password=" + password;
            $http
                .get(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    })();
})();