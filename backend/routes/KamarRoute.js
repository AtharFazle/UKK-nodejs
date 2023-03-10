//user
const kamar = require("../models/index").kamar
const tipe_kamar = require("../models/index").tipe_kamar

//auth
const SECRET_KEY = '!@#$%^&*()_+';
const jwt = require('jsonwebtoken')
const { mustLogin, mustBeAdmin } = require("../middlewares/auth")
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


app.post('/', mustLogin, mustBeAdmin, async (req, res) => {
  const nama_tipe_kamar = req.body.nama_tipe_kamar;
  let tipeId = await tipe_kamar.findOne({
    where: {
      [Op.and]: [{ nama_tipe_kamar: { [Op.substring]: nama_tipe_kamar } }],
    },
  });
  console.log(tipeId);

  if (tipeId === null) {
    return response.json({
      success: false,
      message: `Tipe kamar yang anda inputkan tidak ada`,
    });
  } else {
    let newRoom = {
      nomor_kamar: req.body.nomor_kamar,
      id_tipe_kamar: tipeId.id,
    };
    kamar
      .create(newRoom)
      .then((result) => {
        return res.json({
          success: true,
          data: result,
          message: `New kamar has been inserted`,
        });
      })
      .catch((error) => {
        return res.json({
          success: false,
          message: error.message,
        });
      });
  }
})

app.put('/:id', mustLogin, mustBeAdmin, async (req, res) => {
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

app.delete('/:id', mustLogin, mustBeAdmin, async (req, res) => {
  let params = {
    id: req.params.id
  }
  const response = await kamar.destroy({ where: params })
    .then(result => res.json({ success: 1, message: "delete success" }))
    .catch((error) => res.json({ error: error.message }))
})



module.exports = app;