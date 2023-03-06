//tipe_kamar
const tipe_kamar = require("../models/index").tipe_kamar

//auth
const auth = require('../middlewares/auth.js')
const SECRET_KEY = '!@#$%^&*()_+';
const jwt = require('jsonwebtoken')
const md5 = require('md5')

//upload
const upload = require('../middlewares/imgRoom.js');
const path = require('path');
const fs = require('fs');

//middlewares
const express = require('express')
const { req, res } = require('express');
const { uploadImage } = require("../middlewares/imgRoom.js");
const { json } = require("body-parser");
const Op = require(`sequelize`).Op
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//<<<<<<<<<<<<< api >>>>>>>>>>>>>>>>>>>
//api get
app.get('/', async (req, res) => {
    await tipe_kamar.findAll()
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }));
});
app.get('/:id', async (req, res) => {
    let params = { id: req.params.id }
    await tipe_kamar.findOne({ where: params })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: error.message }));
});


app.post('/',auth,upload.uploadImage.single('foto'), async (req, res) => {
    let data = {
        nama_tipe_kamar: req.body.nama_tipe_kamar,
        foto: req.file.filename,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga
    }
    await tipe_kamar.create(data)
        .then((result) => {
            res.json({ message: "data has been inserted", data: result })
        }).catch((err) => {
            res.json({ message: error.message })
        });
})

app.put('/:id', upload.uploadImage.single('foto'), async (req, res) => {
    let params = { id: req.params.id }
    let data = {
        nama_tipe_kamar: req.body.nama_tipe_kamar,
        foto: req.file.filename,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
    }
    if (req.file) {
        let oldImg = await tipe_kamar.findOne({ where: params });
        let oldImgName = oldImg.foto;

        let loc = path.join(__dirname, '../assets/kamar/', oldImgName);
        fs.unlink(loc, (err) => console.log(err));

        data.foto = req.file.filename;
    }
    await tipe_kamar.update(data, { where: params })
        .then(result => res.json({
            success: 1,
            message: "Data has been updated",
            data: {
                params,
                data: data
            }
        }))
        .catch(error => res.json({ message: error.message }))
});

app.delete('/:id',auth, upload.uploadImage.single('foto'), async (req, res) => {
    let params = { id: req.params.id }

    let delimg = await tipe_kamar.findOne({ where: params })
    if (delimg) {
        let delImgName = delimg.foto;
        let loc = path.join(__dirname, '../assets/kamar', delImgName);
        fs.unlink(loc, (err) => console.log(err));
    }
    await tipe_kamar.destroy({ where: params })
        .then(result => res.json({ success: 1, "data deleted": delimg, message: "Thats Data has been deleted" }))
        .catch(error => res.json({ message: error.message }))
});

app.post('/pencarian', async (req, res) => {
    let keyword = req.body.keyword

    let tipe_kamars = await tipe_kamar.findAll({
        where: {
            [Op.or]: [
                { nama_tipe_kamar: { [Op.substring]: keyword } },
                { foto: { [Op.substring]: keyword } },
                { deskripsi: { [Op.substring]: keyword } },
                { harga: { [Op.substring]: keyword } },
            ]
        }
    })
    return res.json({
        data: tipe_kamars,
        message: "data has been loaded"
    })

})

module.exports = app;