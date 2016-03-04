(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $rootScope) {
        $scope.logout = function(){

            $scope.$isLoggedIn.status = false;
            $scope.$adminPriv.status = false;
            $scope.$holder.status = false;
            $scope.$currentUser.user = {};

        }
    }
})();

/*
(function(){
    angular
        .module("FormBuilderApp")
        .service("UserService")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $location, $route) {
        $scope.logout = function() {
            $scope.$adminPriv= false;
            $scope.$isLoggedIn = false;
            $scope.$currentUser = {};
        }
    }
})();
    */