const express = require("express");
const { JWT_SECRET } = process.env;
const { User } = require("../modelos/User");
const AuthRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

AuthRoute.post("/crearCuenta", async (req, res) => {
  try {
    const {
      nombre,
      email,
      contraseña,
      plantaciones,
      arbolesApadrinados,
      roles,
    } = req.body;

    if (!nombre || !email || !contraseña) {
      return res.status(201).json({
        success: false,
        messsage: "Datos incompletos",
      });
    }
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(401).json({
        success: false,
        message: "El email ya existe",
      });
    }
    if (contraseña < 6) {
      res.status(401).json({
        success: false,
        message: "La contraseña debe tener al menos 6 caracteres",
      });
    }
    // const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(contraseña, 10);

    const user = new User({
      nombre,
      email,
      contraseña: hash,
      plantaciones,
      arbolesApadrinados,
      roles,
    });
    const newUser = await user.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "240h",
    });

    return res.status(201).json({
      success: true,
      user: newUser,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

AuthRoute.post("/login", async (req, res) => {
  const { email, contraseña } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Campo incorrecto (email)",
    });
  }
  const match = await bcrypt.compare(contraseña, user.contraseña);

  if (!match) {
    return res.status(401).json({
      succes: false,
      message: "Campo incorrecto (contraseña)",
    });
  }
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "24h" });

  return res.json({
    success: true,
    token,
  });
});

module.exports = AuthRoute;
