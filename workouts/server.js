var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan"); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret:config.secret}));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/workout", require("./routes/workoutRoutes"));

mongoose.connect(config.database, function(err){
    if (err) throw err;
    console.log("Connected to DB");
})

app.use("/auth", require("./routes/authRoutes"));


app.listen(port, function(){
    console.log(`Server listening on port ${port}`);
});