module.exports=function(app) {

    //var multer = require('multer');
    //var users = multer({dest: __dirname+'/../../user.mock.json'});
    var users = require('./user.mock.json');

/*
    var users = [

        {"_id": 123, "firstName": "Alice",         "lastName": "Wonderland",        "username": "alice",         "password": "alice"},

        {"_id": 234, "firstName": "Bob",        "lastName": "Hope",                 "username": "bob",         "password": "bob"},

        {"_id": 345, "firstName": "Charlie","lastName": "Brown",                 "username": "charlie", "password": "charlie"},

        {"_id": 456, "firstName": "Dan",        "lastName": "Craig",                 "username": "dan",         "password": "dan"},

        {"_id": 567, "firstName": "Edward","lastName": "Norton",                "username": "ed",        "password": "ed"}

    ];*/
        console.log(users);

        return {
            getAllUsers : getAllUsers,
            getUserById : getUserById,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUserById : updateUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials
        };

        function getAllUsers(){
            return users;
        }

        function getUserById(userId){
            console.log ("getById called");
            function sameId(user) {
                return (user._id == userId);
            }
            return users.find(sameId);
        }

        function createUser(user){
            console.log ("createUser called");
            var person = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
                //email: user.email
            };
            users.push(person);
            return users;
        }

        function deleteUserById(userId){
            console.log ("deleteUser called");
            function sameId(user) {
                return (user.id == userId);
            }
            var person = users.find(sameId);
            var index = users.indexOf(person);
            users.splice(index, 1);
            return users;
        }

        function updateUserById(userId, user){
            console.log ("updateUser called");
            function sameId(oldUser) {
                return (oldUser.id == userId);
            }
            var person = users.find(sameId);
            var index = users.indexOf(person);
            users[index] = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
                //email: user.email
            };
            return user;
        }

        function findUserByUsername(username) {
            console.log ("findbyusername called");
            function matchByName(user) {
                return (user.username == username);
            }
            var result = users.find(matchByName);
            return result;
        }

        function findUserByCredentials(credentials) {
            console.log ("findbycredentials called");
            var username = credentials.username;
            var password = credentials.password;

            function matchByNameAndPassword(user) {
                return (user.username == username && user.password == password);
            }
            var result = users.find(matchByNameAndPassword);
            return result;
        }

};
