"use strict";
(function(){
    angular
        .module("ProjectApp", ['algoliasearch'])

        .controller("RegisterController", RegisterController);
    function RegisterController($scope, $rootScope, $location, UserService) {
        $scope.register = function() {
            var client = algolia.Client('S5APOUWNWS', '49ba7b7447c32f9850a99d16027c3967');
            var index = client.initIndex('main_index');

            if ($scope.password != $scope.verify) {
                alert("passwords do not match");
            } else  {
                var person = {
                    "_id": (new Date).getTime(),
                    "firstName": "",
                    "lastName": "",
                    "username": $scope.username,
                    "password": $scope.password,
                    "roles": [],
                    "email": $scope.email
                };
                $rootScope.currentUser = person;
                $rootScope.isLoggedIn = true;
                if (UserService.hasRole(person, "admin")) {
                    $rootScope.adminPriv = true;
                }
                main_index.addObject(person);
                UserService.createUser(person);
                $location.path('/profile');
            }
        };
    }
})();