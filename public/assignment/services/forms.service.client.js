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
                        //console.log("id passes: " + form.userId);
                        //console.log(form);
                        //console.log("length is" + result.length);
                    }
                }
                forms.forEach(addToResult);
                //console.log("result = " + result);
                return result;
                //callback(result);
            },

            getFormById: function (id) {
                function matchId(form) {
                    return (form.id == formId);
                }
                return forms.find(matchId);
            },

            deleteFormById: function (formId, callback) {
                function getFormById(id) {
                    function matchId(form) {
                        console.log("checking: " + form.id);
                        console.log("against: " + formId);
                        return (form.id == formId);
                    }
                    console.log("forms are: " + forms);
                    var holder = forms.find(matchId);
                    console.log("holder= " + holder);
                    return forms.find(matchId);
                }
                var sheet = getFormById(formId);
                console.log("sheet = " + sheet);
                var index = forms.indexOf(sheet);
                console.log("index2 = " + index);
                forms.splice(index, 1);
                console.log("forms now = " + forms);
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


