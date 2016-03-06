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
        $scope.allForms= FormService.forms;

        $scope.addForm = function() {
            var newForm = {
                "title": $scope.selectedTitle,
                "userId": $rootScope.currentUser._id,
                "_id": (new Date).getTime()
            };

            FormService.createFormForUser($rootScope.currentUser._id, newForm, FormService.fakeCallback);

            $scope.myForms = FormService.findAllFormsForUser($rootScope.currentUser._id,
                (function (response) {return response}))
        };

        $scope.updateForm = function() {
            console.log("updateform called");
            $scope.selectedForm.title= $scope.selectedTitle;
            FormService.updateFormById($scope.formId, $scope.selectedForm, FormService.fakeCallback);
        };

        $scope.deleteForm = function($index) {
            var formId = $scope.myForms[$index]._id;
            FormService.deleteFormById(formId, FormService.fakeCallback);
            console.log($scope.myForms);
            console.log($index);
            $scope.myForms.splice($index, 1);
        };

        $scope.selectForm = function($index) {
            $scope.selectedForm=$scope.myForms[$index];
            $scope.selectedTitle=$scope.selectedForm.title;
        };
    }
})();