"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope, $rootScope, FormService) {

        $scope.showFields=false;
        $scope.selectedForm= {};
        $scope.myForms = FormService.findAllFormsForUser($rootScope.currentUser._id,
            (function (response) {return response}));

        $scope.addForm = function() {
            var newForm = {
                "title": $scope.selectedTitle,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };
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
        };

        $scope.fieldTarget = "fields will go here when implemented in future assignment";
    }
})();