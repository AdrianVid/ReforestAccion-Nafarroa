/*const express = require("express");
const mongoose = require("mongoose");
const User = require("../User");
const route = express.Router();

route.post("./", (req, res) => {
  let { nombre, apellido } = req.body;
  let user = {};
  user.nombre = nombre;
  user.apellido = apellido;
  let userModel = new User(user);
  userModel.save();
  res.json(userModel);
});

module.exports = route;*/
