var app = angular.module("RunApp.Auth");

app.controller("planCtrl", ["$scope", "mainService", "sampleService", function ($scope, mainService, sampleService) {

    mainService.get().then(function (response) {
        $scope.schedule = response;
    });
    
    $scope.create = function (input) {
        console.log(input);
        mainService.post(input).then(function (response) {
            $scope.schedule.push(response);
            $scope.example = [];
        })
    };
    
    $scope.delete = function (input, index) {
        var thisIndex = index;
        mainService.delete(input).then(function (reponse) {
            $scope.schedule.splice(thisIndex, 1);
        })
    }

    $scope.adjustSample = function (input1, input2) {
        for (var key in input2){
            if (input2.repetitions){
                input1.repetitions = input2.repetitions;
            }
            if (input2.joggingTime) {
                input1.joggingTime = input2.joggingTime;
            }
            if (input2.walkingTime) {
                input1.walkingTime = input2.walkingTime;
            }
        };
        
        input1.totalTime = (input1.joggingTime * input1.repetitions);
      
    };

    $scope.example;

    $scope.sample = function (input) {
        sampleService.createSample(input);
        $scope.example = {
            length: input.length,
            title: input.title,
            weeks: sampleService.sampleWeek
        };
    }
}]);
