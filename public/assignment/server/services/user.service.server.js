
module.exports = function(app){

    //read the data from mock json file
    var users = require('models/user.mock.json');

    //api/assignment apis
    app.post('/api/assignment/user', function(req, res){
        var user = req.body;
        users.push(user);
        res.send(users);
    });

    app.get('/api/assignment/user', function(req, res){
        console.log("after refactoring ----sending users to client..");
        res.send(users);
    });

    app.get('/api/assignment/user/:id', function(req, res){
        var id = req.params["id"];
        var person = users.filter(function(user){return user.id == id;});
        var user_index = users.indexOf(person);
        console.log("sending user back to client.." + user_index);

        res.send(users[user_index]);
    });

    app.get('/api/assignment/user?username=username', function(req, res){
        var username = ;
        var person = users.filter(function(user){return user.username == username;});
        var user_index = users.indexOf(person);
        res.send(users[user_index]);
    });

    app.get('/api/assignment/user?username=alice&password=wonderland', function(req, res){
        var username = ;
        var person = users.filter(function(user){return user.username == alice;});
        var user_index = users.indexOf(person);
        res.send(users[user_index]);
        /*var user_index = req.params["id"];
         console.log("sending user back to client.." + user_index);

         res.send(users[user_index]);*/
    });

    app.delete("/api/assignment/user/:id", function(req, res){
        console.log("server side deleting...");
        var user_id = req.params["id"];
        users.splice(user_id, 1);
        res.send(users);
    });

    app.put('/api/assignment/user/:id', function(req, res){
        var index = req.params["id"];
        console.log('updating...' + index);

        var user = req.body;
        console.log('updating..user title: ' + user.userName);

        users[index].firstName = user.firstName;
        users[index].lastName = user.lastName;
        users[index].userName = user.userName;
        users[index].password = user.password;

        res.json(users);
    });
};





