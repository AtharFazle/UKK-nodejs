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
const pemesanan = require('./routes/pemesanan.js')


app.use(cors());
app.use('/hotel/user', user);
app.use('/hotel/kamar', kamar);
app.use('/hotel/tipe_kamar', tipe_kamar);
app.use('/hotel/pemesanan', pemesanan);

app.listen(5000, () => console.log('Server run on port 5000'))