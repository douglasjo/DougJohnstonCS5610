(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [];
        users = [
            {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"], "email": "alice@gmail.com"},
            {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"], "email": "bob@gmail.com"},
            {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"], "email": "charliee@gmail.com"},
            {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"], "email": "dan@gmail.com"},
            {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"], "email": "ed@gmail.com"}
        ];


        return {

            users: users,

            fakeCallback: function(response){
                return response;
            },

            getUserById: function(userId) {
                function sameId(user) {
                    return (user.id == userId);
                }
                return users.find(sameId);
            },

            hasRole: function(user, role) {
                if (user.roles == null) {
                    return null;
                } else {
                    function matchRole(string) {
                        return string == role;
                    }
                }
                return user.roles.find(matchRole);
            },

            findUserByCredentials: function(username, password, callback) {
                function matchByNameAndPassword(user) {
                    return (user.username == username && user.password == password);
                }
                var result = users.find(matchByNameAndPassword);
                if (result == null) {
                    return result;
                } else callback(result);
            },

            findAllUsers: function(callback) {
                callback(users);
            },

            createUser: function(user, callback) {
                var person = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    password: user.password,
                    email: user.email
                };
                users.push(person);
                callback(person);
            },

            deleteUserById: function(userId, callback) {
                function sameId(user) {
                    return (user.id == userId);
                }
                var person = users.find(sameId);
                var index = users.indexOf(person);
                $scope.users.splice(index, 1);
                callback(users);
            },

            updateUser: function(userId, user, callback) {
                function sameId(user) {
                    return (user.id == userId);
                }
                var person = users.find(sameId);
                var index = users.indexOf(person);
                users[index] = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    password: user.password,
                    email: user.email
                };
                callback(user);
            }
        }
    }
})();
