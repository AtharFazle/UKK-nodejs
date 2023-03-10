require("dotenv").config()

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
// const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = require("./routes/UserRoute.js")
const kamar = require("./routes/KamarRoute.js")
const tipe_kamar = require('./routes/Tipe_KamarRoute.js')
const filterKamar = require('./routes/filterKamar')
const pemesanan = require('./routes/pemesanan')
const login = require('./routes/login')


app.use(cors());
app.use('/hotel/user', user);
app.use('/hotel/kamar', kamar);
app.use('/hotel/tipe_kamar', tipe_kamar);
app.use('/hotel/pemesanan', pemesanan);
app.use('/hotel/filter', filterKamar);
app.use('/hotel/login', login);

app.listen(5000, () => console.log('Server run on port 5000'))