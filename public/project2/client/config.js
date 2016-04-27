"use strict";
(function(){
    angular
        .module("ProjectApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/docs", {
                    templateUrl: "views/docs/doc.view.html",
                    controller: "DocController"
                })
                .when("/browse", {
                    templateUrl: "views/browse/browse.view.html",
                    controller: "BrowseController"
                })
                .when("/shared", {
                    templateUrl: "views/shared/shared.view.html",
                    controller: "SharedController"
                })
                .when("/favored", {
                    templateUrl: "views/favored/favored.view.html",
                    controller: "FavoredController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();