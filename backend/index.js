const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = require("./routes/UserRoute.js")


app.use(cors());
app.use('/hotel/user', user);

app.listen(5000, () => console.log('Server run on port 5000'))