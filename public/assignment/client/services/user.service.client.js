(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {

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

            findUserByUsername(username) {

            }
        }
    }
})();
