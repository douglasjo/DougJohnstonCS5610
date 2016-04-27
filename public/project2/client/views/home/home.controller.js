"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);
    function HomeController($scope, $rootScope) {
        var customSearchControl = new google.search.CustomSearchControl();
        customSearchControl.draw('search');
    }
})();