
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

        function getAllUsers(){

            $http
                .get("/rest/user")
            //.then();
        }

        function getUserById(userId, callback){
            $http
                .get("/rest/user/" + userId)
                .success(callback);
        }

        function createUser(){}

        function deleteUserById(userId, callback){
            console.log("deleting user..." + userId);
            $http
                .delete("/rest/user/" + userId)
                .success(callback);
        }

        function updateUserById(userId, user, callback){
            $http
                .put("/rest/user/"+ userId, user)
                .success(callback);
        }
    }
})();