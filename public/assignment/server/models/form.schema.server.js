var mongoose = require('mongoose');
var schema = mongoose.schema;

var form = new schema ({
    userId: String,
    title: String,
    fields: [{type: mongoose.Schema.Types.ObjectId, ref: field}],
    created: Date,
    updated: Date
});

return form;