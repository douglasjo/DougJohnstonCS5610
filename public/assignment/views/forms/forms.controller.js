(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope) {
        ///inject FormService
        var myforms = findAllFormsForUser(???UserId, ???);

        ///make forms available for view to render

        function addForm() {
            createFormForUser();
        }

        function updateForm() {
            updateFormById("formid from here", "userid from here", "some callback");
        }

        function deleteForm() {
            deleteFormById("formid from here", "some callback");
        }

        function selectForm() {

        }
    }
})();