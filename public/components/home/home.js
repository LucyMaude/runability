var app = angular.module("RunApp.Auth");

app.controller("homeCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    
    $scope.login = function (user) {
        console.log(user);
        UserService.login(user).then(function (response) {
            $location.path("/plan");
        }, function (response) {
            alert(response.data.message);
        });
    };

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There was an issue: " + response.data);
            });
        }
    };
}]);
