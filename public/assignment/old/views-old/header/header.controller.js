(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);
    function HeaderController($scope, $rootScope, $location) {
        if ($location == "/") {
            $("registerlink").show();
            $("loginlink").show();
            $("profilelink").show();
            $("homelink").show();
        } else if ($location == "/profile") {
            $("registerlink").hide();
            $("loginlink").hide();
            $("profilelink").addclass("notlink");
        } else if ($location == "/admin"){
            $("registerlink").hide();
            $("loginlink").hide();
        } else if ($location == "/forms")
            $("registerlink").hide();
            $("loginlink").hide();
        if ($location == "register"){
            $("registerlink").addclass("notlink").show();
            //$("registerlink").show();
            $("loginlink").show();
        } else if ($location == "login"){
            $("loginlink").addclass("notlink").show();
            $("registerlink").show();
            //$("loginlink").show();
        }

        $scope.logout = function() {
            $rootScope.user = null;
        }
    }
})();