(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    function RegisterController($scope) {
        $scope.register() = function(user) {
            var person = {"_id": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "username": user.username,
                "password": user.password
            }
            createUser(person, ???);
        }
    }
})();