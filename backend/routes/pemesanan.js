//user
const kamar = require("../models/index").kamar
const tipe_kamar = require("../models/index").tipe_kamar
const user = require("../models/index").user
const detail_pemesanan = require('../models/index').detail_pemesanan

//auth
const auth = require('../middlewares/auth.js')
const SECRET_KEY = '!@#$%^&*()_+';
const jwt = require('jsonwebtoken')
const md5 = require('md5')

//upload
const upload = require('../middlewares/imgUser.js');
const path = require('path');
const fs = require('fs');

//middlewares
const express = require('express')
const { req, res } = require('express');
const { json } = require("body-parser");
const { sequelize } = require("../models/index");
const Op = require(`sequelize`).Op
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
    await sequelize.query(`
    select pemesanans.id,  pemesanans.nomor_pemesanan,pemesanans.nama_pemesanan,pemesanans.tgl_check_in, pemesanans.tgl_check_out, pemesanans.nama_tamu, pemesanans.jumlah_kamar, pemesanans.status_pemesanan,users.nama_user,tipe_kamars.nama_tipe_kamar, FROM pemesanans JOIN tipe_kamars ON tipe_kamars.id = pemesanans.id_tipe_kamar JOIN users ON users.id = pemesanans.id_tipe_kamar'
    `)
        .then(result => res.json({
            data: result,
            message: "pemesanan have been loaded"
        })
            .catch(error => res, json{


            })
        )
})