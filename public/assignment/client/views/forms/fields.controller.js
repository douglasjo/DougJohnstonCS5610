(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);
    function FieldsController($scope, $rootScope, FieldService, $routeParams) {
        $scope.table.sortable(); //update actual order in model

        $scope.addField = function (){

        };

        $scope.deleteField = function (){

        };

        $scope.edit = function (){

        };

        /*$scope.selectForm = function (){

        }*/
    }
})();