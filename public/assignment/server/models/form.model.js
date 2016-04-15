var q = require("q");
var mongoose = require("mongoose");

module.exports=function(app, mongoose) {
    var forms = require('./form.mock.json');
    var formSchema = require("./form.schema.server.js")();
    var Form = mongoose.model("Form", formSchema);

    (function () {
        return {
            getAllForms: getAllForms,
            getFormById: getFormById,
            createForm: createForm,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            findFormByTitle: findFormByTitle
        };

        function getAllForms() {
            return forms;

            /*
             var deferred = $q.defer();
             $http
             .get('/api/assignment/form')
             .then(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/
        }

        function getFormByUserId(userId) {
            function grab (form){
                return (form.userId == userId);
            }
            var myforms = forms.filter(grab);
            return myforms;
        }

        function getFormById(formId) {
            function sameId(form) {
                return (form._id == formId);
            }
            return forms.find(sameId);

            /*
             var deferred = $q.defer();
             var url = '/api/assignment/form/:' +formId;
             $http
             .get(url)
             .then(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/
        }

        function createForm(form) {
            var newForm = {
                _id: form._id,
                title: form.title,
                userId: form.userId,
                fields: form.fields
            };
            forms.push(newForm);

            /*
             var deferred = $q.defer();
             var url = "/api/assignment/user/:" + userId +"/form";
             $http
             .post(url)
             .then(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/
        }

        function deleteFormById(formId) {
            function checkDelete(form) {
                if (formId == form._id) {
                    var index = forms.indexOf(form);
                    forms.splice(index, 1);
                }
            }
            forms.forEach(checkDelete);
            return forms;
            /*
             var deferred = $q.defer();
             var url = "/api/assignment/form/:" + formId;
             $http
             .delete(url)
             .then(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/
        }

        function updateFormById(formId, form) {
            function sameId(oldForm) {
                return (oldForm._id == userId);
            }

            var sheet = forms.find(sameId);
            var index = forms.indexOf(sheet);
            forms[index] = {
                _id: form._id,
                title: form.title,
                fields: form.fields
            };
            return forms[index];
        }


            /*
            var sheet = getFormById(formId);
            var index = forms.indexOf(sheet);
            forms[index] = {
                _id: newForm._id,
                title: newForm.title,
                userId: newForm.userId,
                fields: newForm.fields
            };*/
            //return newForm;
        //}

        function findFormByTitle(title) {
            function grab (form){
                return (form.title == title);
            }
            var myforms = forms.filter(grab);
            return myforms;

            /*
             var deferred = $q.defer();
             var url = "/api/assignment/form/title/:" + title;
             $http
             .get(url)
             .then(function(response){
             deferred.resolve(response);
             });
             return deferred.promise;*/
        }
    })()
};
