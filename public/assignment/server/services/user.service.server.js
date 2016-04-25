var uuid = require('node-uuid');
var passport      = require('passport');
var auth = authorized;
app.post  ('/api/login', passport.authenticate('local'), login);
app.post  ('/api/logout',         logout);
app.post  ('/api/register',       register);
app.post  ('/api/user',     auth, createUser);
app.get   ('/api/loggedin',       loggedin);
app.get   ('/api/user',     auth, findAllUsers);
app.put   ('/api/user/:id', auth, updateUser);
app.delete('/api/user/:id', auth, deleteUser);

function authorized (req, res, next) {
    if (!req.isAuthenticated()) {
        res.send(401);
    } else {
        next();
    }
}

var userModel = require("../models/user.model.js")();
passport.use(new LocalStrategy(localStrategy));
function localStrategy(username, password, done) {
    userModel
        .findUserByCredentials({username: username, password: password})
        .then(
            function(user) {
                if (!user) { return done(null, false); }
                return done(null, user);
            },
            function(err) {
                if (err) { return done(err); }
            }
        );
}


/*var passport = require('passport');
 var auth = authorized;*/

module.exports = function (app, model) {

    app.post('/api/assignment/user', passport.authenticate('basic', { session: false }),
        function (req, res) {
        console.log("create user server called");
        var user = req.body;
        user._id = uuid.v1();
        model.createUser(user);
        res.send(model.getAllUsers());
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





