app.directive("loader", function ($rootScope) {
   return function($scope, element, attrs) {
           $scope.$on("loader_show", function () {
               if (element.hasClass("hidden")) {
                   element.removeClass("hidden")
               }
            });
            return $scope.$on("loader_hide", function () {
                if(!element.hasClass("hidden")){
                    element.addClass("hidden")
                }
            });
        } 
   
   /* return{
        restrict: 'A',
link: function (scope, element, attrs) {
        scope.$on("loader_show", function () {
            return element.show();
        });
        return scope.$on("loader_hide", function () {
            return element.hide();
        });
    }
    }*/
}
)