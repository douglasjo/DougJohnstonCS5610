(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    function RegisterController($scope, $rootScope, $route, UserService) {
        function regnav (person) {
            $rootScope.user=person;
            $route="/profile";
        }

        $scope.register = function (user, verify) {
            if (user.password != verify) {
                alert("passwords do not match");
            } else {
                var person = {
                    "_id": user._id,
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "username": user.username,
                    "password": user.password
                };
                createUser(person, regNav);
            }
        }
    }
})();