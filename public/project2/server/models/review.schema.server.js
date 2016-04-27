var mongoose = require('mongoose');

module.exports = function () {
    var reviewSchema = new mongoose.Schema ({
        username: String,
        constructiveness: Number,
        clarity: Number,
        courtesy: Number,
        content: String
    }, {collection: "Review"});

    return reviewSchema;
};