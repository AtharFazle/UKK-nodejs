
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const express = require('express');
const { Op } = require('sequelize');
const jwt = require("jsonwebtoken");
const md5 = require("md5");
// membuat objek express nya
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const user = require("../models/index").user;



app.post('/', async (req, res, next) => {
    let email = req.body.email
    console.log(email)
    user.findOne({
        where: {
            email: email
        },
    }).then((user) => {
        if (user === null) {
            res.status(403).json({ message: 'Wrong username or password' });
            return;
        }

        if (md5(req.body.password) != user.password) {
            res.status(403).json({ message: 'Wrong username or password' });
            return;
        }

        jwt.sign(
            {
                id: user.id,
                username: user.username,
                role: user.role
            },
            process.env.SECRET_KEY,
            { expiresIn: 60 * 60 },
            (err, token) => {
                if (err) {
                    res.status(500).json({ message: err.message });
                    return;
                }

                res.json({
                    type: "Bearer",
                    token: token
                });
            }
        );
    }).catch((error) => {
        next(error);
    });
});

module.exports = app;