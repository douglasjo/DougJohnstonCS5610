(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope) {
        $scope.update = function(user) {
            var person = {"_id": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "username": user.username,
                "password": user.password
            }
            updateUser(person, ???);
        }
    }

})();