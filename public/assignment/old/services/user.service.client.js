(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [];
        users = [
            {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"], "email": "alice@gmail"},
            {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"], "email": "bob@gmail"},
            {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"], "email": "charliee@gmail"},
            {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"], "email": "dan@gmail"},
            {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"], "email": "ed@gmail"}
        ];

        function getUserById(userId) {
            function sameId(user) {
                return (user.id == userId);
            }
            return users.find(sameId);
        }

        function hasRole(user, role) {
            function matchRole(string) {
                return string == role;
            }
            user.roles.find(matchRole)
        }

        function findUserByCredentials(username, password, callback) {
            function matchByNameAndPassword(user) {
                return (user._id == username && user.password == password);
            }
            var result = users.find(matchByNameAndPassword);
            if (result == null) {
                return result;
            } else callback(result);
        }


        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
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
        }

        function deleteUserById(userId, callback) {
            var person = getUserById(userId);
            var index = users.indexOf(person);
            $scope.users.splice(index, 1);
            callback(users);
        }

        function updateUser(userId, user, callback) {
            var person = getUserById(userId)
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
})();
