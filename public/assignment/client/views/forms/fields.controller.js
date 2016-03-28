(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);
    function FieldsController($scope, $rootScope, FieldService, $routeParams) {
        var locationLength = length(location) - 7;
        var formId = location.substring(7, locationLength);
        var form = FormService.get(formId);
        var UserId = form.UserId;
        var model = {};
        model.fields = form.fields;


        var selectedField= null;
        var curType = "";

        $scope.table.sortable(); //update actual order in model


        $scope.addField = function (fieldtype){
            var newfield = {};
            if (curType == "TEXT" || curType == "TEXTAREA") {
                 newField = {
                    _id: null,
                    type: fieldtype,
                    placeholder: ""
                }
            } else if (curType == "OPTIONS" || curType == "RADIO" || curType == "CHECKBOXES") {
                newField = {
                    _id: null,
                    type: fieldtype,
                    options: {}
                }
            } else {
                     newField = {
                        _id: null,
                        type: fieldtype
                }
            }
            FieldService.createFieldForForm($rootScope.form._id, newfield)
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