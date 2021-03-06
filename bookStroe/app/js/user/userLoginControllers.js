/*定义一个模块--用户模块**/
var userModule = angular.module("userModule", []);
/*创建一个用户登录的控制器**/
userModule.controller("userLoginController", ['$scope',
    function ($scope) {
        /**初始化一个用户对象*/
        $scope.userInfo = {
            email: "419475374@qq.com",
            password: "123456",
            autoLogin: true
        };

        /**创建一些方法*/
        /**获取用户信息*/
        $scope.getUserInfo = function () {
            console.log($scope.userInfo);
        };

        /**设置用户信息*/
        $scope.setUserInfo = function () {
            $scope.userInfo = {
                email: "8191326@qq.com",
                password: "666666",
                autoLogin: false
            }
        };

        /**重置用户信息*/
        $scope.resetUserInfo = function () {
            $scope.userInfo = {
                email: "",
                password: "",
                autoLogin: false
            }
        };

        $scope.greeting = {
            text:"This is test directive."
        };

    }
]);

/**创建一个自定义指令*/
userModule.directive("hello",function () {
    return {
        restrict:"AEMC",
        template:"<div>Hello Everyone</div>",
        replace:true
    }
});

/**templateUrl与transclude使用*/
userModule.directive("hello2",function () {
    return {
        restrict:"AEMC",
        templateUrl:"tpls/hello.html",
        transclude:true
    }
});

/**$templateCache使用*/
$templateCache.put("caChe.html", "<div>this is test templateCache</div>");
userModule.run(function ($templateCache) {
});
userModule.directive("cache",function ($templateCache) {
    return {
        restrict:"AEMC",
        template:$templateCache.get("caChe.html"),
        replace:true
    }
});