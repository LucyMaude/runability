var app = angular.module("RunApp.Auth");

app.controller("logoutCtrl", ["UserService", function (UserService) {
    UserService.logout();
    console.log("this works");
}]);
