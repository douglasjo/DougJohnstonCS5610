"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope, $rootScope, FormService) {

        $scope.showFields=false;
        $scope.selectedForm= {};
        var selectedId = 1;
        $scope.myForms = FormService.findAllFormsForUser($rootScope.currentUser._id,
            (function (response) {return response}));

        $scope.fieldUrl="#/form/"+ selectedId + "formId/fields";

        $scope.addForm = function() {
            var newForm = {
                "title": $scope.selectedTitle,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };
            console.log("id is: " + $rootScope.currentUser._id);
            console.log("newform is: " + newForm);
            FormService.createFormForUser($rootScope.currentUser._id, newForm);

            $scope.myForms = FormService.findAllFormsForUser($rootScope.currentUser._id,
                (function (response) {return response}))
        };

        $scope.updateForm = function() {
            console.log("updateform called");
            $rootScope.form=$scope.selectedForm;
            $scope.selectedForm.title= $scope.selectedTitle;
            FormService.updateFormById($scope.formId, $scope.selectedForm);
        };

        $scope.deleteForm = function($index) {
            var formId = $scope.myForms[$index]._id;
            FormService.deleteFormById(formId);
            console.log($scope.myForms);
            console.log($index);
            $scope.myForms.splice($index, 1);
        };

        $scope.selectForm = function($index) {
            $scope.selectedForm=$scope.myForms[$index];
            $scope.selectedTitle=$scope.selectedForm.title;
            $rootScope.form=$scope.selectedForm;
        };

        $scope.fieldClick = function() {
            //$scope.showFields=true;
            if (selectedForm != null) {
                $location='form/'+ selectedForm._id + '/fields';
            }


            //$scope.fieldTarget = fields.view.html;
        };



            //"fields will go here when implemented in future assignment";
    }
})();