(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);
    function HomeController($scope, $rootScope) {

        $scope.setUser = function(){
           /* $scope.$currentUser.user.firstName = "tim";
            $scope.$isLoggedIn.status = false;
            $scope.$holder.status = false;
*/
            $scope.testHome = "Hello Home test!";
        }
    }
})();