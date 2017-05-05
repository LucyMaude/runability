var app = angular.module("runApp");

app.service("mainService", ["$http", function ($http) {

    this.get = function () {
        return $http.get("/api/workout").then(function (response) {
            var raceList = response.data;
            return raceList;
        })
    };
    this.post = function (input) {
        return $http.post("/api/workout", input).then(function (response) {
            var newRace = response.data;
            return newRace;
        })
    };
//    not currently in use
//    this.put = function (input) {
//        var theId = input._id
//        return $http.put("/api/workout/" + theId, input).then(function (response) {
//            var changedRace = response.data;
//            return changedRace;
//        })
//    };
    
    this.delete = function (input) {
        var theId = input._id;
        return $http.delete("/api/workout/" + theId, input).then(function (response) {
            var removedRace = response.data;
            return removedRace;
        })
    };

}]);