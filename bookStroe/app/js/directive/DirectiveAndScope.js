var directiveAndScopeModule = angular.module('directiveAndScopeModule', []);

directiveAndScopeController = directiveAndScopeModule.controller("directiveAndScopeController", [
     '$scope', function ($scope) {
           $scope.ctrlFlavor = "white wine and beer,coco";
      }
]);

directiveAndScopeModule.directive("drink", function () {
     return {
         restrict:"AE",
         scope:{
             flavor:'@'
         },
         //template:"<div>I like drink {{ctrlFlavor}} !!!</div>",
         template:"<div><input type ='text' ng-model = 'flavor'>I like drink {{flavor}} !!!</div>"
         // link:function (scope, element, attrs) {
         //     scope.flavor = attrs.flavor;
         // }
     }
});