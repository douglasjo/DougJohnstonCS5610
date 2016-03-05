(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController",
            function($scope, $location, $rootScope) {
                $scope.$location = $location;
                $rootScope.isLoggedIn = true;
                $rootScope.adminPriv = false;
                $rootScope.currentUser = {"_id":123, "firstName":"Alice", "lastName":"Wonderland",
                    "username":"alice",  "password":"alice",   "roles": ["student"], "email": "alice@gmail.com"};
            });
})();