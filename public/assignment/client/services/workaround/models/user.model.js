module.exports=function(app) {
    var users = require('models/user.mock.json');

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
        function sameId(user) {
            return (user._id == userId);
        }
        return users.find(sameId);
    }

    function createUser(user){
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
        function sameId(user) {
            return (user.id == userId);
        }
        var person = users.find(sameId);
        var index = users.indexOf(person);
        users.splice(index, 1);
        return users;
    }

    function updateUserById(userId, user){
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
        function matchByName(user) {
            return (user.username == username);
        }
        var result = users.find(matchByName);
        return result;
    }

    function findUserByCredentials(credentials) {
        var username = credentials.username;
        var password = credentials.password;

        function matchByNameAndPassword(user) {
            return (user.username == username && user.password == password);
        }
        var result = users.find(matchByNameAndPassword);
        return result;
    }
};
