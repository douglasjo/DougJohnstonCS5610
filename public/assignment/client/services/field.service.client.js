"use strict";
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService() {

        return {
            createFieldForForm: function(formId, field) {
                $http.post()
            }


        }

    }
})();