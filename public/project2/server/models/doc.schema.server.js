var mongoose = require('mongoose');

module.exports = function () {

    var docSchema = new mongoose.Schema ({
        userId: String,
        title: String,
        content: String,
        created: Date,
        updated: Date
    }, {collection: "Doc"});

    return docSchema;
};