var uid = require('node-uuid');

(function() {
    angular
        .module("UserServiceApp")
        .exports = function (app, model, db) {

        //read the data from mock json file
        var users = require('models/user.mock.json');

        //api/assignment apis
        app.post('/api/assignment/user', function (req, res) {
            var user = req.body;
            user._id = uuid.v1();
            users.push(user);
            res.send(users);
        });

        app.get('/api/assignment/user', function (req, res) {
            console.log("after refactoring ----sending users to client..");
            res.send(users);
        });

        app.get('/api/assignment/user/:id', function (req, res) {
            var id = req.params["id"];
            var person = users.filter(function (user) {
                return user.id == id;
            });
            var user_index = users.indexOf(person);
            console.log("sending user back to client.." + user_index);

            res.send(users[user_index]);
        });

        app.get('/api/assignment/user?username=username', function (req, res) {
            var urlUsername = window.location.search;
            var username = urlUsername.substring(10);
            var person = users.filter(function (user) {
                return user.username == username;
            });
            var user_index = users.indexOf(person);
            res.send(users[user_index]);
        });

        app.get('/api/assignment/user?username=alice&password=wonderland', function (req, res) {
            var query = window.location.search;
            var splitIndex = query.indexOf("&");
            var username = urlUsername.substring(10, splitIndex);
            var secondHalf = query.substring(splitIndex);
            var password = secondHalf.substring(10);

            var person = users.filter(function (user) {
                return user.username == username;
            });
            var user_index = users.indexOf(person);
            if (person.password == password) {
                res.send(users[user_index]);
            }
            else res.send(null);
        });

        app.delete("/api/assignment/user/:id", function (req, res) {
            console.log("server side deleting...");
            var user_id = req.params["id"];
            var person = users.filter(function (user) {
                return user.id == user_id;
            });
            var user_index = users.indexOf(person);
            users.splice(user_index, 1);
            res.send(users);
        });

        app.put('/api/assignment/user/:id', function (req, res) {
            var user_id = req.params["id"];
            var person = users.filter(function (user) {
                return user.id == user_id;
            });
            var user_index = users.indexOf(person);
            console.log('updating...' + index);

            var user = req.body;
            console.log('updating..user title: ' + user.userName);

            users[user_index].firstName = user.firstName;
            users[user_index].lastName = user.lastName;
            users[user_index].userName = user.userName;
            users[user_index].password = user.password;

            res.json(users);
        });
    }
})();





