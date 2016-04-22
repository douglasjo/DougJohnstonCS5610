var uuid = require('node-uuid');

/*var passport = require('passport');
 var auth = authorized;*/



module.exports = function (app, model) {

    app.post('/api/assignment/user', function (req, res) {
        console.log("create user server called");
        //if (req.query == null) {
        var user = req.body;
        user._id = uuid.v1();
        model.createUser(user);
        res.send(model.getAllUsers());
        //}

    });

    app.get('/api/assignment/user', function (req, res) {
        console.log("get server called");
        if (req.query.username && req.query.password) {
            console.log("credentials");
            var credentials = {username: req.query.username, password: req.query.password};
            var user = model.findUserByCredentials(credentials);
            console.log("user= "+ user);
            res.send(user);
        } else if (req.query.username) {
            console.log("username= " + req.query.username);
            var user = model.findUserByUsername(req.query.username);
            console.log(user);
            res.send(user);
        } else if (req.params["id"]) {
            console.log("id");
            var id = req.params["id"];
            var user = model.getUserById(id);
            res.send(user);
        } else {
            console.log("all");
            var all_users = model.getAllUsers();
            res.send(all_users);
        }
    });


    app.delete("/api/assignment/user/:id", function (req, res) {
        //console.log("server side deleting...");
        var user_id = req.params["id"];
        model.deleteUserById(user_id);
        var allUsers= model.getAllUsers();
        res.send(allUsers);
    });

    app.put('/api/assignment/user/:id', function (req, res) {
        var user_id = req.params["id"];
        var user = req.body;
        model.updateUserById(user_id, user);
        var allUsers=model.getAllUsers();
        console.log(allUsers);
        res.json(allUsers);
    });
};





