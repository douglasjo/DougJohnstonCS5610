(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    function LoginController($scope, $rootScope, $route, UserService) {
        function nav(response){
            if (response == null) {
                alert("not a valid password/username combination");
            } else {
                $rootScope.user=response;
                $route="/profile";
            }
        }

        $scope.login = function(user){
            users.findUserByCredentials(user.username, user.password, nav);
        }
    }
})();