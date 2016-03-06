"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    function LoginController($scope, $rootScope, $location, UserService) {
        //var users = UserService.users;
        function nav(response){
            if (response == null) {
                alert("not a valid password/username combination");
            } else {
                //console.log(response);
                $rootScope.currentUser=response;
                $rootScope.isLoggedIn = true;
                if (UserService.hasRole(response, "admin")) {
                    $rootScope.adminPriv = true;
                }
                $location.path('/profile');;
            }
        }

        $scope.login = function(){
            //console.log("login called");
            //console.log("username: " + $scope.username);
            //console.log("password: " + $scope.password);
            UserService.findUserByCredentials($scope.username, $scope.password, nav);
        }
    }
})();