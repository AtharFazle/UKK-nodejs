const sequelize = require(`sequelize`);
const Op = sequelize.Op;

const express = require("express")

const app = express()
app.use(express.json())

const models = require("../models/index")
const kamar = models.kamar
const tipe_kamar = models.tipe_kamar
const detail_pemesanan = models.detail_pemesanan

app.post('/', async (req, res) => {
    let checkInDate = req.body.tgl_check_in;
    let checkOutDate = req.body.tgl_check_out;

    let roomData = await tipe_kamar.findAll({ include: [{ model: kamar, as: "kamar" }] });

    let roomBookedData = await tipe_kamar.findAll({
        attributes: ["id", "nama_tipe_kamar"],
        include: [
            {
                model: kamar,
                as: "kamar",
                include: [
                    {
                        model: detail_pemesanan,
                        as: "detail_pemesanan",
                        attributes: ["tgl_akses"],
                        where: {
                            tgl_akses: {
                                [Op.between]: [checkInDate, checkOutDate],
                            },
                        },
                    },
                ],
            },
        ],
    });

    let available = [];
    let availableByType = [];

    for (let i = 0; i < roomData.length; i++) {
        roomData[i].kamar.forEach((kamar) => {
            let isBooked = false;
            roomBookedData.forEach((booked) => {
                booked.kamar.forEach((bookedRoom) => {
                    if (kamar.id === bookedRoom.id) {
                        isBooked = true;
                    }
                });
            });
            if (!isBooked) {
                available.push(kamar);
            }
        });
    }

    for (let i = 0; i < roomData.length; i++) {
        let roomType = {};
        roomType.id = roomData[i].id;
        roomType.nama_tipe_kamar = roomData[i].nama_tipe_kamar;
        roomType.harga = roomData[i].harga;
        roomType.deskripsi = roomData[i].deskripsi;
        roomType.foto = roomData[i].foto;
        roomType.kamar = [];
        available.forEach((kamar) => {
            if (kamar.id_tipe_kamar === roomData[i].id) {
                roomType.kamar.push(kamar);
            }
        });
        if (roomType.kamar.length > 0) {
            availableByType.push(roomType);
        }
    }

    return res.json({ kamar: availableByType });
});


module.exports = app