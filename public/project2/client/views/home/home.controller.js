"use strict";
(function(){
    angular
        .module("ProjectApp", ['algoliasearch'])
        .controller("HomeController", HomeController);
    function HomeController($scope) {
        var output = "";
        var client = algolia.Client('S5APOUWNWS', '49ba7b7447c32f9850a99d16027c3967');
        var index = client.initIndex('main_index');

        $scope.searchForUser = function(){
            $scope.query = '';
            $scope.hits = [];

            index.search($scope.search)
                .then(function searchSuccess(content) {
                    $scope.output=content;
                }, function searchFailure(err) {
                    $scope.output=err;
                });
            /*
            UserService.findUserByUsername($scope.search)
            .then(function(response){
                $scope.output = response;
            })*/
        }
    }
})();