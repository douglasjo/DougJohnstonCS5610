(function(){
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .controller("NavController", function($scope, $location) {
            $scope.$location = $location;
        });
})();