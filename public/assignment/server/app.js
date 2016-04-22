"use strict";

module.exports=function(app, db){
    var mongoose = require("mongoose");

    var formModel = require("./models/form.model.js")(mongoose, db);
    var userModel = require("./models/user.model.js")(mongoose, db);

    require("./services/form.service.server.js")(app, formModel);
    require("./services/user.service.server.js")(app, userModel);
    require("./services/field.service.server.js")(app, formModel);
};