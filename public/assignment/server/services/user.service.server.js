var uuid = require('node-uuid');

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
            //add rest in front?
        app.get('/api/assignment/user', function (req, res) {
            console.log("get server called");
            if (req.query.username && req.query.password) {
                console.log("credentials");
                var credentials = {username: req.query.username, password: req.query.password};
                var user = JSON.stringify(model.findUserByCredentials(credentials));
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
/*
        app.get('/api/assignment/user/:id', function (req, res) {

            /*var person = users.filter(function (user) {
                return user.id == id;
            });
            var user_index = users.indexOf(person);
            console.log("sending user back to client.." + user_index);
            */
    /*
            var id = req.params["id"];
            var result = model.getUserById(id);

            res.send(result);
            //res.send(users[user_index]);
        });*/
/*
        app.get('/api/assignment/user?username=username', function (req, res) {
            console.log("what the heck");
            var urlUsername = window.location.search;
            var username = urlUsername.substring(10);
            console.log("username is:" +  username);
            var person = model.findUserByUsername(username);
            res.send(person);
        });*/

    /*
        app.get('/api/assignment/user?username=alice&password=wonderland', function (req, res) {
            console.log("getby credentials server called");
            var credentials = {alice, alice};
            //var credentials = req.body;
           // var username = req.query.username;
           // var password = req.query.password;
            /*
            var query = window.location.search;
            var splitIndex = query.indexOf("&");
            var username = urlUsername.substring(10, splitIndex);
            var secondHalf = query.substring(splitIndex);
            var password = secondHalf.substring(10);
            */
            //var credentials= {username: username, password: password};

            //console.log('username=' + username);
            //console.log("password is " + password);
    /*
            var person = model.findUserByCredentials(credentials);
            res.send(person);
        });*/
/*
            app.get("/api/assignment/user?username=:/username/password:/password", function (req, res) {
                console.log("getby credentials server called");
                var credentials = {username: req.params.username, password: req.params.password};
                var person = model.findUserByCredentials(credentials);
                res.send(person);
            });*/

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





