const express = require('express')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const kamar = require("../models/index").kamar
const auth = require('../middlewares/auth.js')
const SECRET_KEY = '!@#$%^&*()_+';
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())