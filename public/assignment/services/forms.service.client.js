"use strict";
(function (){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var forms = [];
        forms = [

            {"_id": "000", "title": "Contacts", "userId": 123},

            {"_id": "010", "title": "ToDo",     "userId": 123},

            {"_id": "020", "title": "CDs",      "userId": 234}

        ];

        return {
            forms: forms,

            fakeCallback: function (response){
                return response;
            },

            createFormForUser: function (userId, form, callback) {
                var newForm = {
                    _id: form._id,
                    title: form.title,
                    userId: userId
                };
                forms.push(newForm);
                callback(newForm);
            },

            /*
            For some reason, when I replaced "return result" with "callback result", giving it a callback of
            (function (response) {return response}), or a call to "fakeCallback" it ceases to evaluate, although the
            same pattern works fine with the UserService.
            in the interest of functionality, I chose to leave it as is.
            */

            findAllFormsForUser: function (userId, callback) {
                var result = [];
                function addToResult(form) {
                    if (form.userId == userId) {
                        result.push(form);
                    }
                }
                forms.forEach(addToResult);
                return result;
            },

            getFormById: function (id) {
                function matchId(form) {
                    return (form.id == formId);
                }
                return forms.find(matchId);
            },

            deleteFormById: function (formId, callback) {
                function checkDelete(form) {
                    if (formId == form._id) {
                        var index = forms.indexOf(form);
                        forms.splice(index, 1);
                    }
                }
                forms.forEach(checkDelete);
                callback(forms);
            },

            updateFormById: function (formId, newForm, callback) {
                function getFormById(id) {
                    function matchId(form) {
                        return (form.id == formId);
                    }
                    return forms.find(matchId);
                }
                var sheet = getFormById(formId);
                var index = forms.indexOf(sheet);
                forms[index] = {
                    _id: newForm._id,
                    title: newForm.title,
                    userId: newForm.userId
                };
                callback(newForm);
            }
        };

    }
})();


