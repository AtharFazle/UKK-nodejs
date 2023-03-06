//user
const user = require("../models/index").user;

//auth
const auth = require("../middlewares/auth.js");
const SECRET_KEY = "!@#$%^&*()_+";
const jwt = require("jsonwebtoken");
const md5 = require("md5");

//upload
const upload = require("../middlewares/imgUser.js");
const path = require("path");
const fs = require("fs");

//middlewares
const express = require("express");
const { req, res } = require("express");
const { uploadImage } = require("../middlewares/imgUser");
const { json } = require("body-parser");
const Op = require(`sequelize`).Op;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//<<<<<<<<<<<<< api >>>>>>>>>>>>>>>>>>>
//api get
app.get("/", auth, async (req, res) => {
  await user
    .findAll()
    .then((result) => res.json({ data: result }))
    .catch((error) => res.json({ message: error.message }));
});

//getbyId
app.get("/:id", auth, async (req, res) => {
  let params = { id: req.params.id };
  await user
    .findOne({ where: params })
    .then((result) => {
      res.json({ data: result });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
});

app.post("/", auth, upload.uploadImage.single("foto"), async (req, res) => {
  let data = {
    nama_user: req.body.nama_user,
    foto: req.file.filename,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
  };

  await user
    .create(data)
    .then((result) =>
      res.json({ message: "Data has been inserted", data: result })
    )
    .catch((error) => res.json({ message: error.message }));
});

app.put("/:id", auth, upload.uploadImage.single("foto"), async (req, res) => {
  let params = { id: req.params.id };
  let data = {
    nama_user: req.body.nama_user,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
  };
  if (req.file) {
    let oldImg = await user.findOne({ where: params });
    let oldImgName = oldImg.foto;

    let loc = path.join(__dirname, "../assets/user/", oldImgName);
    fs.unlink(loc, (err) => console.log(err));

    data.foto = req.file.filename;
  }

  await user
    .update(data, { where: params })
    .then((result) =>
      res.json({ success: 1, message: "Data has been updated", data: data })
    )
    .catch((error) => res.json({ message: error.message }));
});

app.delete("/:id", async (req, res) => {
  let params = { id: req.params.id };

  let delImg = await user.findOne({ where: params });
  if (delImg) {
    let delImgName = delImg.foto;
    let loc = path.join(__dirname, "../assets/user", delImgName);
    fs.unlink(loc, (err) => console.log(err));
  }
  await user
    .destroy({ where: params })
    .then((result) =>
      res.json({ success: 1, message: "Data has been deleted" })
    )
    .catch((error) => res.json({ message: error.message }));
});

app.post("/admin", async (req, res) => {
  let params = {
    email: req.body.email,
    password: md5(req.body.password),
    role: "admin",
  };

  await user
    .findOne({ where: params })
    .then((result) => {
      if (result) {
        let payload = JSON.stringify(result);
        let token = jwt.sign(payload, SECRET_KEY);
        res.json({
          success: 1,
          message: "Login success, as admin",
          token: token,
        });
      } else {
        res.json({
          success: 0,
          message: "login failed check your email or password!",
        });
      }
    })
    .catch((error) => res.json({ message: error.message }));
});

app.post("/resepsionis", async (req, res) => {
  let params = {
    email: req.body.email,
    password: md5(req.body.password),
    role: "resepsionis",
  };
  await user.findOne({ where: params }).then((result) => {
    try {
      if (result) {
        let payload = JSON.stringify(result);
        let token = jwt.sign(payload, SECRET_KEY);
        res.json({
          success: 1,
          message: "login succcess as resepsionis",
          token: token,
        });
      } else {
        res.json({
          success: 0,
          message: "login failed check your email or password!",
        });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  });
});
//filter
app.post("/pencarian", async (req, res) => {
  let keyword = req.body.keyword;

  let users = await user.findAll({
    where: {
      [Op.or]: [
        { nama_user: { [Op.substring]: keyword } },
        { email: { [Op.substring]: keyword } },
        { role: { [Op.substring]: keyword } },
      ],
    },
  });
  return res.json({
    success: true,
    data: users,
    message: `all users have been loaded`,
  });
});
// app.get("/getAdmin", async (req, res) => {
//   await user
//     .findAll({
//       where: {
//         role: admin,
//       },
//     })
//     .then((result) => {
//       res.json({ data: result });
//     })
//     .catch((error) => {
//       res.json({ message: error.message });
//     });
// });

module.exports = app;
