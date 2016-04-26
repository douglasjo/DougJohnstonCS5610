"use strict";

module.exports=function(app, db){
    var mongoose = require("mongoose");

    var docModel = require("./models/doc.model.js")(mongoose, db);
    var userModel = require("./models/user.model.js")(mongoose, db);

    require("./services/doc.service.server.js")(app, docModel);
    require("./services/user.service.server.js")(app, userModel);
};