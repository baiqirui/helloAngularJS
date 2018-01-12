/*创建一个用户登录的控制器**/
var userLoginController2 =
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
    };
// userLoginController2.$inject = ['$scope'];