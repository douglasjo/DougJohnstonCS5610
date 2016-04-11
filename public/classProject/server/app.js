module.exports = function(app, db){
    var userModel = require("./models/user.model.js")();

    var r2 = require("./services/user.service.server.js")(app, userModel);


};