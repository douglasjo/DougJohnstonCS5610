//var uid = require('node-uuid');


        module.exports = function (app, model) {

        //api/assignment apis
        app.post('/api/assignment/user', function (req, res) {
            console.log('server create called');
            var user = req.body;
            user._id = 1;//uuid.v1();
            model.createUser(user);
            //users.push(user);
            res.send(users);
        });

        app.get('/api/assignment/user', function (req, res) {
            //console.log("after refactoring ----sending users to client..");
            var all_users = model.getAllUsers();
            res.send(all_users);
        });

        app.get('/api/assignment/user/:id', function (req, res) {
            var id = req.params["id"];
            /*var person = users.filter(function (user) {
                return user.id == id;
            });
            var user_index = users.indexOf(person);
            console.log("sending user back to client.." + user_index);
            */
            var result = model.getUserById(id);

            res.send(result);
            //res.send(users[user_index]);
        });

        app.get('/api/assignment/user?username=username', function (req, res) {
            var urlUsername = window.location.search;
            var username = urlUsername.substring(10);
            //console.log(username);
            /*var person = {"_id": 123, "firstName": "Alice",
                "lastName": "Wonderland",        "username": "alice",         "password": "alice"};*/

            var person = model.findUserByUsername;
            res.send(person);


            /*
             var person = users.filter(function (user) {
             return user.username == username;
             });
             var user_index = users.indexOf(person);*/
            //res.send(users[user_index]);
        });

        app.get('/api/assignment/user?username=alice&password=wonderland', function (req, res) {
            var query = window.location.search;
            var splitIndex = query.indexOf("&");
            var username = urlUsername.substring(10, splitIndex);
            var secondHalf = query.substring(splitIndex);
            var password = secondHalf.substring(10);
            var credentials= {username: username, password: password};

            console.log('username=' + username);
            console.log(password);
            var person = model.findUserByCredentials(credentials);
            res.send(person);
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
            model.updateUserById(user_id);
            var allUsers=model.getAllUsers();
            res.json(allUsers);
        });
    };





