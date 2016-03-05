(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $rootScope) {
        $scope.lorem = "hooked up";

        $scope.logOut = function(){
            $scope.lorem="function called";
            $rootScope.isLoggedIn = false;
            $rootScope.adminPriv = false;
            $rootScope.currentUser = {};
        };
    }
})();