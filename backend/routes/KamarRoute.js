//user
const kamar = require("../models/index").kamar
const tipe_kamar = require("../models/index").tipe_kamar

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
const { request, response } = require('express');
const { uploadImage } = require("../middlewares/imgRoom");
const { json } = require("body-parser");
const { sequelize } = require("../models/index");
const Op = require(`sequelize`).Op
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', async (req, res) => {
    await kamar.findAll()
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }));
});

app.get("/:id", async (req, res) => {
    let params = { id: req.params.id }
    await kamar.findOne(params)
        .then(result => res.json({
            data: result,
            message: "data has been loaded",
        }))
})


app.post('/', async (req, res) => {
    let nama_tipe_kamar = req.body.nama_tipe_kamar
    let tipeId = await tipe_kamar.findOne({
        where: {
            [Op.and]: [{ nama_tipe_kamar: { [Op.substring]: nama_tipe_kamar } }],
        },
    });
    console.log(tipeId);
    if (tipeId === null) {
        return res.json({
            success: false,
            message: `Tipe kamar has not found`,
        });
    } else {
        let data = {
            nomor_kamar: req.body.nomor_kamar,
            id_tipe_kamar: req.body.id_tipe_kamar
        }
        kamar
            .create(data)
            .then((result) => {
                return res.json({
                    success: true,
                    data: result,
                    message: `New Kamar Has been Inserted`,
                });
            });
    }
})

app.put('/:id', async (req, res) => {
    let params = { id: req.params.id }
    let nama_tipe_kamar = req.body.nama_tipe_kamar
    let tipeId = await tipe_kamar.findOne({
        where: {
            [Op.and]: [{ nama_tipe_kamar: { [Op.substring]: nama_tipe_kamar } }],
        },
    });
    console.log(nama_tipe_kamar);
    if (tipeId === null) {
        return res.json({
            success: false,
            message: `Tipe kamar has not founded`,
        });
    } else {
        let data = {
            nomor_kamar: req.body.nomor_kamar,
            id_tipe_kamar: req.body.id_tipe_kamar
        }
        kamar
            .update(data, { where: params })
            .then((result) => {
                return res.json({

                    success: true,
                    "nama tipe kamar": nama_tipe_kamar,
                    data: data,
                    message: `New Kamar Has been updated`,
                });
            });
    }
})

app.delete('/:id', async (req, res) => {
    let params = {
        id: req.params.id
    }
    const response = await kamar.destroy({ where: params })
        .then(result => res.json({ data: res -= ult, message: "delete success" }))
        .catch((error) => res.json({ error: error.message }))
})

app.post('/avaible', async (req, res) => {
    const tgl_akses_satu = new Date(req.body.tgl_akses_satu)
    const tgl_akses_dua = new Date(req.body.tgl_akses_dua)
    let tgl1 = moment(tgl_akses_satu).format("YYYY-MM-DD");
    let tgl2 = moment(tgl_akses_dua).format("YYYY-MM-DD");

    const result = await sequelize.query(
        `select tipe_kamars.nama_kamar, kamars.nomor_kamar FROM kamars 
        LEFT JOIN tipe_kamars ON kamars.id_tipe_kamar = tipe_kamar.id LEFT JOIN detail_pemesanans ON detail_pemesanans.id_kamar = kamars.id WHERE kamars.id NOT IN 
        (SELECT id_kamar from detail_pemesanans WHERE tgl_akses BETWEEN '$(tgl1)' AND '$(tgl2)')
        GROUP BY kamars.nomor_kamar `
    )
    return res.json({
        success: true,
        sisa_kamar: result[0].length,
        data: result[0],
        message: `Room have been loaded`,

    })
})
module.exports = app;