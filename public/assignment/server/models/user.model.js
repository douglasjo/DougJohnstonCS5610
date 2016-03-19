
(function(){
    angular
        .module("FormServiceApp")
        .factory("UserService", userService);

    function UserService($http){

        var service = {
            getAllUsers : getAllUsers,
            getUserById : getUserById,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUserById : updateUserById
        };
        return service;

        function getAllUsers(callback){
            $http
                .get("/api/assignment/user")
                .success(callback);
        }

        function getUserById(userId, callback){
            $http
                .get("/api/assignment/user/" + userId)
                .success(callback);
        }

        function createUser(){}

        function deleteUserById(userId, callback){
            console.log("deleting user..." + userId);
            $http
                .delete("/api/assignment/user/" + userId)
                .success(callback);
        }

        function updateUserById(userId, user, callback){
            $http
                .put("/api/assignment/user/"+ userId, user)
                .success(callback);
        }
    }
})();