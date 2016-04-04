"use strict";
(function (){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {

        return {
            createFormForUser: function(userId, form) {
                var deferred = $q.defer();
                $http
                    .post("/api/assignment/form/:" + userId+ '/form', form)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
            },

            findAllFormsForUser: function (userId) {
                var deferred = $q.defer();
                $http
                    .get('/api/assignment/form/' + userId + "form")
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;

                /*var result = [];
                function addToResult(form) {
                    if (form.userId == userId) {
                        result.push(form);
                    }
                }
                forms.forEach(addToResult);
                return result;*/
            },

            getFormById: function (formId) {
                var deferred = $q.defer();
                $http
                    .get('/api/assignment/form' + formId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                function matchId(form) {
                    return (form.id == formId);
                }
                return forms.find(matchId);*/
            },

            deleteFormById: function (formId) {
                var deferred = $q.defer();
                $http
                    .delete("/api/assignment/form/" + formId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
                function checkDelete(form) {
                    if (formId == form._id) {
                        var index = forms.indexOf(form);
                        forms.splice(index, 1);
                    }
                }
                forms.forEach(checkDelete);
                callback(forms);*/
            },

            updateFormById: function (formId, newForm) {
                var deferred = $q.defer();
                $http
                    .put("/api/assignment/form/" + formId)
                    .then(function(response){
                        deferred.resolve(response);
                    });
                return deferred.promise;
                /*
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
                callback(newForm);*/
            }
        };

    }
})();


