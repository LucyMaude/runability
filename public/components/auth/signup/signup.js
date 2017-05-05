var app = angular.module("RunApp.Auth");

app.controller("signupCtrl", ["$scope", "$location", "UserService", function ($scope, $location, UserService){
    $scope.signup = function(user){
        if (user.password !== $scope.passwordRepeat){
            $scope.passwordMessage = "Passwords do not match";
        } else {
            UserService.signup(user).then(function(response){
                $location.path("/home"); 
            }, function (response){
                alert("There was an issue: " + response.data);
            });
        }
    }
}]);