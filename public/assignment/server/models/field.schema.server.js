var mongoose = require('mongoose');
var schema = mongoose.schema;

var fieldSchema = new schema ({
    label: String,
    type: String,
    placeholder: String,
    options: [{label:STRING,
                value:STRING}]
});

var field = mongoose.model(fieldSchema);