var express = require("express");
var workoutRouter = express.Router();
var Workout = require("../models/workout");
//var Day = require("../models/day")

workoutRouter.route("/")
    .get(function (req, res) {
        Workout.find({
            user: req.user._id
        }, function (err, workouts) {
            if (err) res.status(500).send(err);
            res.send(workouts);
        });
    })
    .post(function (req, res) {
        var convertedObject = {
            length: req.body.length,
            title: req.body.title,
            weeks: []
        };

        for (var i = 0; i < req.body.weeks.length; i++) {
            console.log("first step works");
            var weekObj = {};
            var allDays = req.body.weeks[i];
            console.log(allDays);
            weekObj.weekNumber = (i + 1);
            weekObj.days = allDays;
            weekObj.days = allDays;
            convertedObject.weeks.push(weekObj);
            console.log(weekObj);
        }
        console.log(convertedObject);
        console.log(convertedObject.weeks);
        var workout = new Workout(convertedObject);
        workout.user = req.user;
        workout.save(function (err, newWorkout) {
            if (err) res.status(500).send(err);
            res.status(201).send(newWorkout);
        });
    });

workoutRouter.route("/:workoutid")
    .get(function (req, res) {
        Workout.findOne({
            _id: req.params.workoutid,
            user: req.user._id
        }, function (err, workout) {
            if (err) res.status(500).send(err);
            if (!workout) res.status(404).send("No workout found");
            res.send(workout);
        })
    })
    .put(function (req, res) {
        Workout.findOneAndUpdate({
            _id: req.params.workoutid,
            user: req.user._id
        }, req.body, {
            new: true
        }, function (err, workout) {
            if (err) res.status(500).send(err);
            res.send(workout);
        })

    })
    .delete(function (req, res) {
        Workout.findOneAndRemove({
            _id: req.params.workoutid,
            user: req.user._id
        }, function (err, workout) {
            if (err) res.status(500).send(err);
            res.send(workout);
        })
    })

module.exports = workoutRouter;
