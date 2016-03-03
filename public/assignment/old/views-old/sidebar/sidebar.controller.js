(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);
    function SidebarController($scope, $rootscope, $route) {
       // if (hasRole($rootScope.user, "admin") == True) {
        //    $adminmark.removeClass(ng-hide);
        //} else $adminmark.addClass(ng-hide);
        $scope.notAdmin = function() {
            return true;
            //hasRole($rootScope.user, "admin";
        };

        //if ($location == "/"){
        //    $("homemark").addclass("active")
        //} else if (location == "/profile"){
        //    $("profilemark").addclass("active")
        //} else if (location == "/admin"){
        //    $("adminmark").addclass("active")
        //} else if (location == "/forms"){
        //    $("formsmark").addclass("active")
        //}
    }
})();