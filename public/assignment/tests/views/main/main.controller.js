(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController",
            function($scope, $location) {
                $scope.$location = $location;
                $scope.$isLoggedIn = false;
            });
})();