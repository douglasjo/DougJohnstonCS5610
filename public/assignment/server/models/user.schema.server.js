var mongoose = require('mongoose');
var schema = mongoose.schema;

var user = new schema ({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emails: [String],
    phones: [String]
});