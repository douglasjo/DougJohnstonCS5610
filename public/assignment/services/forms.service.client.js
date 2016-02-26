function (){
    angular
        .module(app);
        .factory("FormServices", FormService);

    function FormService($scope, $route, $controller) {
        var forms = [];
        forms = [

            {"_id": "000", "title": "Contacts", "userId": 123},

            {"_id": "010", "title": "ToDo",     "userId": 123},

            {"_id": "020", "title": "CDs",      "userId": 234},

        ]

        function createFormForUser(userId, form, callback) {
            var newForm = {
                _id: form._id,
                title: form.title,
                userId: userId
            }
            forms.push(newForm);
            callback();
        }

        function findAllFormsForUser(userId, callback) {
            var result = [];
            function addToResult(form){
                if (form.id==userId){
                    result.push(form);
                }
            }
            $scope.forms.foreach(addToResult);
            callback(result);
        }

        function deleteFormById(formId, callback) {
            function getById(form){
                return (form.id == formId);
            }
            var sheet = forms.find(getById);
            $scope.forms.splice(index,1);
            callback();
        }

        function updateFormById(formId, newForm, callback) {
            function getById(form){
                return (form.id == formId);
            }
            var sheet = $scope.forms.find(getbyid);
            var index = $scope.forms.indexOf(sheet);
            $scope.forms[index] = {
                _id: newForm._id,
                title: newForm.title,
                userId: newForm.userId
            }
            callback();
        }
    }
}


