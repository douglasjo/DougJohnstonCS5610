(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController",
            function($scope, $location) {
                $scope.$location = $location;
                $scope.$isLoggedIn = {status:true};
                $scope.$adminPriv = {status:false};
                $scope.$holder = {status:true};
                $scope.$currentUser = {user: {"_id":123, "firstName":"Alice", "lastName":"Wonderland",
                    "username":"alice",  "password":"alice",   "roles": ["student"], "email": "alice@gmail.com"}};

            });
})();