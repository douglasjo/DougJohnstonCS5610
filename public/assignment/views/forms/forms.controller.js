(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope) {
        ///inject FormService
        var myforms = findAllFormsForUser($scope.userId, "some callback");

        ///make forms available for view to render



        function addForm() {
            createFormForUser($scope.userId, $scope.form, "some callback");
        }

        function updateForm() {
            updateFormById($scope.formId, $scope.userId, "some callback");
        }

        function deleteForm() {
            deleteFormById($scope.formId, "some callback");
        }

        function selectForm() {

        }


    }
})();