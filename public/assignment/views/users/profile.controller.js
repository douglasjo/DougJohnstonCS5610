(function(){
    angular
        .module("FormBuilderApp")
        .service("UserService")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope) {


        $rootScope.updateLogin = function(person) {
            $rootScope.currentUser = person;
            /*
            $rootScope.firstName = person.firstname ;//person.firstName;
            $rootScope.lastName = person.lastName;
            $rootScope.username = person.username;
            $rootScope.password = person.password;
            $rootScope.email = person.email;
            */
        };


        $scope.update = function(user) {
            var person = {"_id": findUserByCredentials(user.username, user.password,
                (function(response){return response._id})),
                "firstName": user.firstName,
                "lastName": user.lastName,
                "username": user.username,
                "password": user.password,
                "email": user.email
            };
            updateUser(person, updateLogin);
        };

    }
})();