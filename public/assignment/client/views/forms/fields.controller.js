(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);
    function FieldsController($scope, $rootScope, FieldService, $routeParams) {
        var selectedField= null;
        var curType = "";
        /*
        if (curType == "TEXT" || curType == "TEXTAREA") {

        } else if (curType == "OPTIONS" || curType == "RADIO" || curType == "CHECKBOXES") {

        }*/

        $scope.table.sortable(); //update actual order in model


        $scope.addField = function (field){
            FieldService.createFieldForForm($rootScope.form._id, field)
        };

        $scope.deleteField = function (fieldId){
            FieldService.deleteFieldFromForm($rootScope.form._id, fieldId)
        };

        $scope.setField = function (field){
            selectedField =
            curType = field.type;
        };

        $scope.updateField = function (){
            selectedField.label = $scope.fieldLabel2;
            if (curType == "TEXT" || curType == "TEXTAREA") {
                selectedField.placeholder = $scope.fieldPlaceholder2;
            } else if (curType == "OPTIONS" || curType == "RADIO" || curType == "CHECKBOXES") {
                selectedField.options = $scope.fieldOptions2;
            }

            FieldService.updateField($rootScope.form._id, selectedField._id, selectedField);
        }
    }
})();