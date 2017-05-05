var app = angular.module("RunApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "signupCtrl"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "loginCtrl"
        })
        .when("/logout", {
            template: "",
            controller: "logoutCtrl"
        });

}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
