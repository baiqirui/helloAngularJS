var directiveToControllerModule = angular.module("directiveToControllerModule", []);
directiveToControllerModule.controller("directiveToController1", ["$scope",
         function ($scope) {
                 $scope.loadData = function () {
                     console.log("loading Data1......");
                 }

                 $scope.sayHello = function (name) {
                     alert("hello" + name);
                 }
         }]
);

directiveToControllerModule.controller("directiveToController2", ['$scope',
        function ($scope) {
            $scope.loadData2 = function () {
                console.log("loading Data2......");
            }
        }]
);

/**定义loader指令*/
directiveToControllerModule.directive("loader", function () {
     return {
         restrict:"AE",
         link:function ($scope, element, attrs) {
             element.bind("mouseenter", (function (event) {
                 var howToLoad = attrs.howtoload;
                 $scope.$apply(howToLoad);
             }))
         }

     };
});

directiveToControllerModule.directive("greeting", function () {
      return {
          restrict:"AE",
          scope : {
              //&传递父scope函数中的
              greet:"&"
          },
          template:"<input type = 'text' ng-model='userName'><br/>" +
          " <input type='button' ng-click='greet({name1:userName})' value ='sayHello' >"
      }
});
