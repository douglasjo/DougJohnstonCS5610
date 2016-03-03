(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, UserService) {

        $scope.display = function() {
            $scope.firstName = "joe" ;//person.firstName;
            $scope.lastName = "tim"  ;//person.lastName;
            $scope.username = "bob"; //person.username;
            $scope.password = "thing";// person.password;
            $scope.email = "i@gmail.com";  //person.email;
        };


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

    }
})();