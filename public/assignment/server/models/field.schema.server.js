var mongoose = require('mongoose');
//var schema = mongoose.schema;

module.exports = function () {
    var fieldSchema = new mongoose.Schema({
        label: String,
        type: String,
        placeholder: String,
        options: [{label:String,
            value:String}]
    }, {collection: "Field"});

    return fieldSchema;
};

