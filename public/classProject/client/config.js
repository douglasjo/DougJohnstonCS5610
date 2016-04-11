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
                .otherwise({
                    redirectTo: "/"
                });
        });
})();