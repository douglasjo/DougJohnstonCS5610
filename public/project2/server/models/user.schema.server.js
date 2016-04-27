var mongoose = require('mongoose');

module.exports = function () {

    var userSchema = new mongoose.Schema ({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: [String],
        constructiveness: [Number],
        courtesy: [Number],
        clarity: [Number],
        reviewers: [String]
    }, {collection: "User"});

    return userSchema;
};