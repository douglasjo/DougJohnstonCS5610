(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);
    function FieldsController($scope, $rootScope, FieldService, $routeParams) {
        var curType = "";
        $scope.table.sortable(); //update actual order in model


        $scope.addField = function (field){
            FieldService.createFieldForForm($rootScope.form._id, field)
        };

        $scope.deleteField = function (fieldId){
            FieldService.deleteFieldFromForm($rootScope.form._id, fieldId)
        };

        $scope.setField = function (type){
            curType = type;
        };
    }
})();