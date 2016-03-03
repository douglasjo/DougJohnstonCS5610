(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, UserService) {
        function display (person) {
            $scope.user.firstName= person.firstName;
            $scope.user.lastName= person.lastName;
            $scope.user.username= person.username;
            $scope.user.password= person.password;
            $scope.user.email=person.email;
        }

        $scope.update = function(user) {
            var person = {"_id": findUserByCredentials(user.username, user.password,
                function(response){return response._id}),
                "firstName": user.firstName,
                "lastName": user.lastName,
                "username": user.username,
                "password": user.password,
                "email": user.email
            };
            updateUser(person, display);
        };

        display(getUserById($rootScope.userId));

    }
})();