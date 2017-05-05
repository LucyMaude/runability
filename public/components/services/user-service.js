angular.module("runApp");

app.service("UserService", ["$http", "TokenService", "$location", function($http, TokenService, $location){
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };
    
    this.login = function (user) {
        console.log(user);
        return $http.post("/auth/login", user).then(function(response){
            TokenService.setToken(response.data.token);
            return response
        })
    };
    
    this.logout = function () {
        console.log("userService working")
        TokenService.removeToken();
        $location.path("/home");
    };
    
    this.isAuthenticated = function() {
        return !!TokenService.getToken();
    };
    
}]);

