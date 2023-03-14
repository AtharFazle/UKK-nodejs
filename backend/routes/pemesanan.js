/** memanggi library express */
const express = require('express');
const { Op } = require('sequelize');

// membuat objek express nya
const app = express();
const { mustLogin, mustBeAdmin } = require("../middlewares/auth")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//import model
const tipe_kamar = require('../models/index').tipe_kamar;
const kamar = require('../models/index').kamar;
const pemesanan = require('../models/index').pemesanan;
const detail_pemesanan = require('../models/index').detail_pemesanan;

//post
app.post("/", async (req, res) => {
    let dt = Date.now();
    let receiptNum = Math.floor(Math.random() * (1000000000 - 99999999) + 99999999);


    let data = {
        nomor_pemesanan: receiptNum,
        nama_pemesanan: req.body.nama_pemesanan,
        tgl_pemesanan: dt,
        tgl_check_in: req.body.tgl_check_in,
        tgl_check_out: req.body.tgl_check_out,
        nama_tamu: req.body.nama_tamu,
        jumlah_kamar: 1,
        id_tipe_kamar: req.body.id_tipe_kamar,
        status_pemesanan: "baru",
        id_user: req.body.id_user,
    };

    // data kamar
    let dataKamar = await kamar.findAll({ where: { id_tipe_kamar: data.id_tipe_kamar } });
    console.log(dataKamar)
    // data tipe kamar
    let dataTipeKamar = await tipe_kamar.findOne({ where: { id: data.id_tipe_kamar } });
    console.log(dataTipeKamar)
    // data pesan
    let dataPemesanan = await tipe_kamar.findAll({
        attributes: ["id", "nama_tipe_kamar"],
        where: { id: data.id_tipe_kamar },
        include: [
            {
                model: kamar,
                as: "kamar",
                attributes: ["id", "id_tipe_kamar"],
                include: [
                    {
                        model: detail_pemesanan,
                        as: "detail_pemesanan",
                        attributes: ["tgl_akses"],
                        where: {
                            tgl_akses: {
                                [Op.between]: [data.tgl_check_in, data.tgl_check_out]
                            }
                        }
                    }
                ]
            },
        ]
    });
    console.log(dataPemesanan)
    //  cari kamar yang ada
    let pesanKamarId = dataPemesanan[0].kamar.map((room) => room.id);
    console.log(pesanKamarId)
    let adaKamar = dataKamar.filter((room) => !pesanKamarId.includes(room.id));
    console.log(adaKamar)
    // proses pesan kamar kalo ada
    let pilihDataKamar = adaKamar.slice(0, data.jumlah_kamar);
    console.log(pilihDataKamar)
    // hitung hari
    let checkIn = new Date(data.tgl_check_in);
    let checkOut = new Date(data.tgl_check_out);
    const totalHari = Math.round((checkOut - checkIn) / (1000 * 3600 * 24));

    if (dataKamar === null || adaKamar.length < data.jumlah_kamar || totalHari === 0 || pilihDataKamar === null) {
        return res.json({ message: "Kamar tidak tersedia" });
    } else {
        await pemesanan.create(data)
            .then(async (result) => {
                for (let i = 0; i < totalHari; i++) {
                    for (let j = 0; j < pilihDataKamar.length; j++) {
                        let tgl_akses = new Date(checkIn);
                        tgl_akses.setDate(tgl_akses.getDate() + i);

                        let reqDataDetail = {
                            id_pemesanan: result.id,
                            id_kamar: pilihDataKamar[j].id,
                            tgl_akses: tgl_akses,
                            harga: dataTipeKamar.harga,
                        };
                        console.log(reqDataDetail)
                        await detail_pemesanan.create(reqDataDetail);
                    }
                }
                res.json({ success: 1, message: "Berhasil pesan kamar", data: result })
            })
            .catch(err => res.json({ message: err.message }))
    };
}

)
app.put("/:id", mustLogin, async (req, res) => {
    let param = { id: req.params.id }
    let status = req.body.status_pemesanan
    await pemesanan
        .update({
            status_pemesanan: status
        }, {
            where: param
        })
        .then((result) =>
            res.json({ success: 1, message: "Data has been updated" })
        )
        .catch((error) => res.json({ message: error.message }));
});


app.get('/', mustLogin, async (req, res) => {
    await pemesanan.findAll({ include: ['user', 'tipe_kamar'] })
        .then(result => res.json({ pemesanan: result }))
        .catch(error => res.json({ message: error.message }));
});

app.get("/:id", mustLogin, async (req, res) => {
    let param = { id: req.params.id }
    pemesanan.findOne({ where: param, include: ['user', 'tipe_kamar'] })
        .then(result => {
            res.json({ data: result })
        })
        .catch(error => {
            res.json({ message: error.message })
        })
})

app.delete("/:id", mustLogin, async (req, res) => {
    let param = {
        id: req.params.id
    }

    await detail_pemesanan.destroy({
        where: {
            id_pemesanan: param.id
        }
    })

    await pemesanan.destroy({ where: param })
        .then(result => {
            res.json({ message: "Data has been deleted" })
        })
        .catch(error => {
            res.json({ message: error.message })
        })
})

module.exports = app;