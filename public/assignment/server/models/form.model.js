(function(){
    angular
        .module("FormModelApp", []);

    (function ($http, $q) {
        return {
            getAllForms : getAllForms,
            getFormById : getFormById,
            createForm : createForm,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById,
            findFormByTitle : findFormByTitle
        };

        function getAllForms () {
            var deferred = $q.defer();
            $http
                .get('/api/assignment/form')
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getFormById (formId) {
            var deferred = $q.defer();
            var url = '/api/assignment/form/:' +formId;
            $http
                .get(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function createForm (userId) {
            var deferred = $q.defer();
            var url = "/api/assignment/user/:" + userId +"/form";
            $http
                .post(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function deleteFormById (formId) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/:" + formId;
            $http
                .delete(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function updateFormById (formId) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/:" + formId;
            $http
                .put(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function findFormByTitle (title) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/title/:" + title;
            $http
                .get(url)
                .then(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }
    })();
})();