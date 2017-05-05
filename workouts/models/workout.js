var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    length: String,
    title: String,
    weeks: [{
        weekNumber: Number,
        days: [{
            totalTime: Number,
            joggingTime: Number,
            walkingTime: Number,
            repetitions: {
                type: Number,
                default: 2,
            },
            restDay: String,
}]
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});



module.exports = mongoose.model("Workout", workoutSchema);
