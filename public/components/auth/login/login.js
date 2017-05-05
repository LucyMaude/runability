var app = angular.module("RunApp.Auth");

app.controller("loginCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $location.path("/plan");
        }, function (response) {
            alert(response.data.message);
        });
    }
}]);