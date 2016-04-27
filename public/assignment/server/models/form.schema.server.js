var mongoose = require('mongoose');
//var schema = mongoose.schema;

module.exports = function () {
    var fieldSchema = require("./field.schema.server.js");

    var formSchema = new mongoose.Schema ({
        userId: String,
        title: String,
        fields: [fieldSchema],
        created: Date,
        updated: Date
    }, {collection: "Form"});

    return formSchema;
};