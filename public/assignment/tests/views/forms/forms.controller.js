(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope, $FormService) {
        ///inject FormService

        $scope.showFields=false;

        $scope.myForms= findAllFormsForUser($scope.userId, $scope.findAllCall);

        var tempForms = [];
        tempForms = [

            {"_id": "000", "title": "Contacts", "userId": 123},

            {"_id": "010", "title": "ToDo",     "userId": 123},

            {"_id": "020", "title": "CDs",      "userId": 234}

        ];

        scope.someForms=tempForms;

        ///make forms available for view to render


        function addForm() {
            createFormForUser($scope.userId, $scope.form, somecallback);
        }

        function updateForm() {
            updateFormById($scope.formId, $scope.userId, $scope.updateCall);
        }

        function deleteForm($index) {

            deleteFormById($scope.formId, $scope.deleteCall);
        }

        function selectForm($index) {

        }


    }
})();