(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);
    function FormsController($scope, $rootScope) {
        ///inject FormService
        var users = [];
        users = [
            {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"], "email": "alice@gmail.com"},
            {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"], "email": "bob@gmail.com"},
            {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"], "email": "charliee@gmail.com"},
            {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"], "email": "dan@gmail.com"},
            {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"], "email": "ed@gmail.com"}
        ] ///remove this later






        //var myforms = findAllFormsForUser($rootScope.user._Id, $scope.findAllCall);

        ///make forms available for view to render



        function addForm() {
            createFormForUser($scope.userId, $scope.form, $scope.addCall);
        }

        function updateForm() {
            updateFormById($scope.formId, $scope.userId, $scope.updateCall);
        }

        function deleteForm() {
            deleteFormById($scope.formId, $scope.deleteCall);
        }

        function selectForm() {

        }


    }
})();