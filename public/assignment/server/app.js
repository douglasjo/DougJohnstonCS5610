"use strict";

module.exports=function(app){


    require("./services/user.service.server.js")(app);
    require("./services/form.service.server.js")(app);
    require("./services/field.service.server.js")(app);
    require("./models/form.model.js")(app);
    require("./models/user.model.js")(app);

};

/*
(function(){
    angular
        .module("FormServerApp", ["UserModelApp", "FormModelApp", "UserServiceApp",
        "FormServiceAp", "FieldServiceApp"]);
})();

*/
/*
module.exports=function(app, mongoose, db){
    require("./services/user.service.server.js")(app);
    require("./services/form.service.server.js")(app);
};*/
