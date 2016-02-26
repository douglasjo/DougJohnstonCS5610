(function(){
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/register", {
                    templateUrl: "register/register.view.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "login/login.view.html",
                    controller: "LoginController"
                })
                .when("/forms", {
                    templateUrl: "forms/forms.view.html",
                    controller: "FormsController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();