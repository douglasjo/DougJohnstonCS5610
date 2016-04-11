"use strict";

module.exports=function(app){
    var mongoose = require("mongoose");
    //module.exports = function(app, mongoose, db){
/*
    var formModel = require("./models/form.model.js")();
    var userModel = require("./models/user.model.js")();
*/
    var formModel = require("./models/form.model.js")(mongoose);
    var userModel = require("./models/user.model.js")(mongoose);


     require("./services/user.service.server.js")(app, userModel);
     require("./services/field.service.server.js")(app, formModel);
    require("./services/form.service.server.js")(app, formModel);


};