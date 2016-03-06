(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope, $rootScope, FormService) {
        $scope.showFields=false;
        $scope.fields=fields/form-field.view.html;
        $scope.selectedTitle="";
        $scope.selectedForm= {
            "_id": (new Date).getTime(),
            "title": $scope.selectedTitle,
            "userId": $rootScope.currentUser._id
        };

        var filler = FormService.findAllFormsForUser($rootScope.currentUser._id,
            (function (response) {return response}));
        console.log("filler = " + filler);

        $scope.myForms= filler;
        $scope.allForms= FormService.forms;

        $scope.addForm = function() {
            console.log("addform called");
            console.log("selectedTitle= " + $scope.selectedTitle);
            $scope.selectedForm.title= $scope.selectedTitle;
            FormService.createFormForUser($rootScope.currentUser._id, $scope.selectedForm, FormService.fakeCallback);
            $scope.myForms=FormService.findAllFormsForUser($rootScope.currentUser._id,
                (function (response) {return response}));
        };

        $scope.updateForm = function() {
            console.log("updateform called");
            $scope.selectedForm.title= $scope.selectedTitle;
            FormService.updateFormById($scope.formId, $scope.selectedForm, FormService.fakeCallback);
        };

        $scope.deleteForm = function($index) {
            console.log("deleteform called");
            console.log("index = " + $index);
            var formId = $scope.myForms[$index]._id;
            console.log("formId = " + formId);
            FormService.deleteFormById(formId, FormService.fakeCallback);
            $scope.myForms.splice($index, 1);
        };

        $scope.selectForm = function($index) {
            //console.log("selectForm called");
            //console.log("index = " + $index);
            $scope.selectedForm=$scope.myForms[$index];

            $scope.selectedTitle=$scope.selectedForm.title;
            //console.log("selectedtitle is: " + $scope.selectedTitle);
        };
    }
})();