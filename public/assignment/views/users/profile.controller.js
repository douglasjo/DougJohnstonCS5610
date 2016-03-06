(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, UserService) {
        console.log($rootScope.currentUser.username);
        $scope.userName = $rootScope.currentUser.username;
        $scope.password = $rootScope.currentUser.password;
        $scope.firstName = $rootScope.currentUser.firstName;
        $scope.lastName = $rootScope.currentUser.lastName;
        $scope.email = $rootScope.currentUser.email;

        var users = UserService.users;

        $scope.updateLogin = function(person) {
            $rootScope.currentUser = person;
            console.log("updateLogin");
            /*
            $rootScope.firstName = person.firstname ;//person.firstName;
            $rootScope.lastName = person.lastName;
            $rootScope.username = person.username;
            $rootScope.password = person.password;
            $rootScope.email = person.email;
            */
        };


        $scope.update = function() {
            var person = {"_id": UserService.findUserByCredentials($scope.username, $scope.password,
                (function(response){return response._id})),
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "username": $scope.username,
                "password": $scope.password,
                "email": $scope.email
            };
            console.log("update");
            UserService.updateUser(person._id, person, $scope.updateLogin);
        };

    }
})();