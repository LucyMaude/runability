var app = angular.module("runApp");

app.service("sampleService", [function () {


    this.findMinutes = function (inputLength) {
        if (inputLength === "5k") {
            return totalMinutes = 31;
        };
        if (inputLength === "10k") {
            return totalMinutes = 62;
        };
        if (inputLength === "15k") {
            return totalMinutes = 93;
        };
        if (inputLength === "20k") {
            return totalMinutes = 124;
        };
        if (inputLength === "25k") {
            return totalMinutes = 155
        };
        if (inputLength === "30k") {
            return totalMinutes = 186;
        };
        if (inputLength === "Half Marathon") {
            return totalMinutes = 131;
        };
        if (inputLength === "Marathon") {
            return totalMinutes = 262;
        };
    };

    this.sampleWeek = [];

    this.createSample = function (inputObject) {
        var totalMinutes = this.findMinutes(inputObject.length);
        var totalWeeks = inputObject.weeks;
        var userInput = inputObject.current;
        var weeks = [];
        for (var i = 0; i < totalWeeks; i++) {
            var weekAverage = (((totalMinutes * (i + 1))) / (totalWeeks));
            var sevenDays = [];
            if (i % 2 === 0) {
                for (var j = 1; j < 8; j++) {
                    if (j % 2 === 0) {
                        var original = Math.round(weekAverage + j + (userInput / (i + 1)));
                        var jog = Math.round(original / 2);
                        var total = jog * 2;
                        var walk = Math.round(original / 4);
//                        console.log(original);
//                        console.log(total);
//                        console.log(jog);
//                        console.log(walk);
                        var dayobj = {
                            totalTime: total,
                            joggingTime: jog,
                            walkingTime: walk,
                            repetitions: 2,
                        };
                        sevenDays.push(dayobj);
                    } else {
                        var day = "Rest Day";
                        var dayobj = {
                            restDay: day
                        };
                        sevenDays.push(dayobj);
                    }
                }
            } else {
                for (var k = 1; k < 8; k++) {
                    if (k % 2 !== 0) {
                        var original = Math.round(weekAverage + k + (userInput / (i + 1)));
                        var jog = Math.round(original / 2);
                        var total = jog * 2;
                        var walk = Math.round(original / 4);
//                        console.log(original);
//                        console.log(total);
//                        console.log(jog);
//                        console.log(walk);
                        var dayobj = {
                            totalTime: total,
                            joggingTime: jog,
                            walkingTime: walk,
                            repetitions: 2,
                        };
                        sevenDays.push(dayobj);
                    } else {
                        var day = "Rest Day";
                        var dayobj = {
                            restDay: day
                        }
                        sevenDays.push(dayobj);
                    }
                }
            }
            weeks.push(sevenDays);
        }
//        console.log(this.sampleWeek);
        return this.sampleWeek = weeks;
    };
}])
