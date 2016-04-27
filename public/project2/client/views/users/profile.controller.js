"use strict";
(function(){
    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, UserService) {
        //var users = UserService.users;
        $scope.username = $rootScope.currentUser.username;
        $scope.password = $rootScope.currentUser.password;
        $scope.firstName = $rootScope.currentUser.firstName;
        $scope.lastName = $rootScope.currentUser.lastName;
        $scope.email = $rootScope.currentUser.email;

        var constructiveness = 0;
        for(var i = 0; i< $rootScope.currentUser.constructiveness.length; i++) {
            constructiveness +=  $rootScope.currentUser.constructiveness[i];
        }
        $scope.construcivenessInput = constructiveness/$rootScope.currentUser.constructiveness.length;

        var clarity = 0;
        for(var j = 0; j< $rootScope.currentUser.clarity.length; j++) {
            constructiveness +=  $rootScope.currentUser.clarity[j];
        }
        $scope.clarityInput = clarity/$rootScope.currentUser.clarity.length;

        var courtesy = 0;
        for(var k = 0; k< $rootScope.currentUser.courtesy.length; k++) {
            courtesy +=  $rootScope.currentUser.courtesy[k];
        }
        $scope.courtesyInput = courtesy/$rootScope.currentUser.courtesy.length;


        $scope.update = function() {
            var person = {"_id": $rootScope.currentUser._id,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "username": $scope.username,
                "password": $scope.password,
                "email": $scope.email
            };
            $rootScope.currentUser = person;
            UserService.updateUser(person._id, person, $scope.updateLogin);
        };

    }
})();