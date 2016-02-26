(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);
    function SidebarController($scope) {
        if ($location == "/"){
            $("homemark").addclass("marked")
        } else if (location == "/profile"){
            $("profilemark").addclass("marked")
        } else if (location == "/admin"){
            $("adminmark").addclass("marked")
        } else if (location == "/forms"){
            $("formsmark").addclass("marked")
        }
    }
})();