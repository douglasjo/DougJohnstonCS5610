var mongoose = require('mongoose');
//var schema = mongoose.schema;

module.exports = function () {
    var userSchema = new mongoose.Schema ({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phones: [String]
    }, {collection: "User"});

    return userSchema;
};