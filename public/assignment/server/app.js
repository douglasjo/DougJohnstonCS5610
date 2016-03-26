"use strict";

module.exports=function(app){

    //require("./services/user.service.server.js")(app);

    //var model =

    var m1 = require("./models/form.model.js")();
    var m2 = require("./models/user.model.js")();

    require("./services/form.service.server.js")(app, m1);
    require("./services/user.service.server.js")(app, m2);
    require("./services/field.service.server.js")(app, m1);


};