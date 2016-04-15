"use strict";

module.exports=function(app){
    var mongoose = require("mongoose");

    var formModel = require("./models/form.model.js")(app, mongoose);
    var userModel = require("./models/user.model.js")(app, mongoose);

    require("./services/form.service.server.js")(app, formModel);
    require("./services/user.service.server.js")(app, userModel);
    require("./services/field.service.server.js")(app, formModel);
};