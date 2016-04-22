var q = require("q");
var mongoose = require("mongoose");

module.exports=function(mongoose, db) {
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
            findFormByTitle: findFormByTitle,
            deleteField: deleteField,
            updateField: updateField,
            createField: createField
        };

        function getAllForms() {
            var deferred = q.defer();
            Form.find(function(err, form){
                deferred.resolve(form);
            });
            return deferred.promise.data;
        }

        function getFormsByUserId(userId) {
            var deferred = q.defer();
            Form.find({userId: userId}, function(err, form){
                deferred.resolve(form);
            });
            return deferred.promise.data;
        }

        function getFormById(formId) {
            var deferred = q.defer();
            Form.findById(userId, function(err, form){
                deferred.resolve(form);
            });
            return deferred.promise.data;
        }

        /*
        might be a problem with this
         */
        function createForm(form) {
            var deferred = q.defer();
            Form.create(page, function(err, doc){
                Form.find(function(err, form){
                    deferred.resolve(form);
                });
            });
            return deferred.promise.data;
        }

        function deleteFormById(formId) {
            var deferred = q.defer();
            Form.findById(userId, function(err, doc) {
                doc.remove();
                From.find(function(err, form) {
                    deferred.resolve(form);
                });
            });
            return deferred.promise.data;
        }

        function updateFormById(formId, form) {
            var deferred = q.defer();
            User.update({_Id: formId}, {userId: form.userId,
                title: form.title,
                fields: form.fields,
                created: form.created,
                updated: form.updated}, function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise.data;
        }

        function findFormByTitle(title) {
            var deferred = q.defer();
            Form.find({title: title}, function (err, form){
                deferred.resolve(form);
            });
            return deferred.promise.data;
        }

        function deleteField(formId, fieldId){
            var deferred = q.defer();

        }

        function updateField(formId, fieldId, field){

        }

        function createField(formId, field){

        }

    })()
};
