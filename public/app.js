var app = angular.module("runApp", ["ngRoute", "RunApp.Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/plan", {
            templateUrl: "components/plan/plan.html",
            controller: "planCtrl"
        })
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });

}]);
