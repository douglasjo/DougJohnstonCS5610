var mongoose = require('mongoose');

module.exports = function () {
    var reviewSchema = require("./review.schema.server.js");

    var docSchema = new mongoose.Schema ({
        userId: String,
        sharedWith: [String],
        title: String,
        content: String,
        reviews: [reviewSchema],
        created: Date,
        updated: Date
    }, {collection: "Doc"});

    return docSchema;
};