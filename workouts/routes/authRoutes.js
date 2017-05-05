var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/login", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) res.status(500).send(err);
        if (!user) {
            res.status(401).send({
                success: false,
                message: "username does not exist"
            })
        } else if (user) {
            user.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                if (!match) res.status(401).send({
                    success: false,
                    message: "Incorrect password"
                });
                else {
                    var token = jwt.sign(user.toObject(), config.secret, {
                        expiresIn: "24h"
                    });
                    res.send({
                        user: user.withoutPassword(),
                        token: token,
                        success: true,
                        message: "Here's your token!"
                    });
                }
            });
        }
    });
});

authRoutes.post("/signup", function (req, res) {
    User.find({
        username: req.body.username
    }, function (err, existingUser) {
        if (err) return res.status(500).res(err);
        if (existingUser.length) return res.send({
            success: false,
            message: "Username already taken"
        });
        else {
            var newUser = new User(req.body);
            newUser.save(function (err, userObj) {
                if (err) return res.status(500).send(err);
                res.send({
                    user: userObj,
                    message: "New User Created",
                    success: true
                });
            });
        }
    })
});

module.exports = authRoutes;
