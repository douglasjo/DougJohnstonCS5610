(function(){
    angular
        .module("FormBuilderApp")

        .controller("RegisterController", RegisterController);
    function RegisterController($scope, $rootScope, $route, UserService) {

        $scope.Users = UserService.all();

        function regnav (person) {
            $rootScope.user=person;
            $rootScope.isLoggedIn = true;
            $route="/profile";
        }

        $scope.register = function () {
            if ($scope.password != $scope.verify) {
                alert("passwords do not match");
            } else {
                var person = {
                    "_id": 10,
                    "firstName": "",
                    "lastName": "",
                    "username": $scope.username,
                    "password": $scope.password,
                    "email": $scope.email
                };
                createUser(person, regNav);
            }
        }
    }
})();