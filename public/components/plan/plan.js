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
        console.log(input1);
        console.log(input2);
        for (var key in input1) {
            if (input2.repetitions) {
                input1.repetitions = input2.repetitions;
                input1.joggingTime = (input1.totalTime / input1.repetitions);
                console.log(input1.joggingTime)
            }
            if (input2.joggingTime){
                input1.joggingTime = input2.joggingTime;
                input1.repetitions = Math.round(input1.totalTime / input1.joggingTime);
            } if (input2.totalTime) {
                input1.totalTime = input2.totalTime;
                input1.repetitions = Math.round(input1.totalTime / input1.joggingTime);
            }
        };
    };

    $scope.example;

    $scope.sample = function (input) {
        sampleService.createSample(input);
        $scope.example = {
            length: input.length,
            title: input.title,
            weeks: sampleService.sampleWeek
        };
        //        console.log($scope.example);
    }
}]);
