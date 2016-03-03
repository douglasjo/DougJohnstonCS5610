(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, $rootScope) {
        $rootScope.user = null;
        $scope.location = $location;
        $rootScope.adminStatus= false;


            console.log("I am at: " + $location.url);
            $scope.$location = $location;

    }
})();