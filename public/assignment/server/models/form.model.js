var q = require("q");
module.exports=function(mongoose) {
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
            /*var deferred = q.defer();
            Form.find({}, function(err, form) {
                if (!err) {
                    deferred.resolve (form);
                } else {
                    deferred.reject (err);
                }
            return deferred.promise;
            });*/
            /*
            var deferred = q.defer();
            Form.find({}, function(err, form) {
                var formMap = {};
                forms.forEach(function(sheet) {
                    formMap[form._id] = sheet;
                });
                return userMap;
            });*/


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
            /*var deferred = q.defer();
            Form.find({userId: userId},
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/


            function grab (form){
                return (form.userId == userId);
            }
            var myforms = forms.filter(grab);
            return myforms;
        }

        function getFormById(formId) {
            /*var deferred = q.defer();
            Form.find({_id: formId},
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/

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
            /*var deferred = q.defer();
            Form.create(form,
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/


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
            /*var deferred = q.defer();
            Form.remove({_id: formId},
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/


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
            /*var deferred = q.defer();
            Form.update({_id: formId},
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/

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
        }

        function findFormByTitle(title) {
            /*var deferred = q.defer();
            Form.find({title: title},
                function (err, form) {
                    if (!err) {
                        deferred.resolve (form);
                    } else {
                        deferred.reject (err);
                    }
                });
            return deferred.promise;*/


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
