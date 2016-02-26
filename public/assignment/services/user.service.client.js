
function() {
    angular
        .module(app);
        .factory("UserService", UserService);


    function UserService() {
        var users = [];
        users = [
            {"_id": 123, "firstName": "Alice", "lastName": "Wonderland", "username": "alice", "password": "alice"},

            {"_id": 234, "firstName": "Bob", "lastName": "Hope", "username": "bob", "password": "bob"},

            {"_id": 345, "firstName": "Charlie", "lastName": "Brown", "username": "charlie", "password": "charlie"},

            {"_id": 456, "firstName": "Dan", "lastName": "Craig", "username": "dan", "password": "dan"},

            {"_id": 567, "firstName": "Edward", "lastName": "Norton", "username": "ed", "password": "ed"}

        ];


        function findUserByUsernameAndPassword(username, password, callback) {
            function match(user) {
                return (user._id == username && user.password == password);
            }
            var result = users.find(match);
            callback(result);
        }

        function findAllUsers(callback) {
            return users;
            callback($scope.users);
        }

        function createUser(user, callback) {
            var person = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
            };
            users.push(person);
            callback();
        }

        function deleteUserById(userId, callback) {
            function getById(user) {
                return (user.id == userId);
            }

            var person = users.find(getById);
            var index = users.indexOf(person);
            $scope.users.splice(index, 1);
            callback();
        }

        function updateUser(userId, user, callback) {
            function getById(user) {
                return (user.id == userId);
            }

            var person = $scope.users.find(getById);
            var index = $scope.users.indexOf(person);
            $scope.users[index] = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password
            }
            callback(user);
        }
    }
}
