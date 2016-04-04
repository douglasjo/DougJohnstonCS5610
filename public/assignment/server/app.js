"use strict";

module.exports=function(app){

    var formModel = require("./models/form.model.js")();
    var userModel = require("./models/user.model.js")();

    var r1 = require("./services/form.service.server.js")(app, formModel);
    var r2 = require("./services/user.service.server.js")(app, userModel);
    var r3 = require("./services/field.service.server.js")(app, formModel);



};