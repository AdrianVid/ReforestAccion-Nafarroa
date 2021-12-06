const mongoose = require("mongoose");

const Roles = {
  ADMIN: "admin",
  USER: "user",
};

const UserSchema = new mongoose.Schema({
  nombre: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  contraseña: { type: String, require: true },
  roles: {
    type: [
      {
        type: String,
      },
    ],
    default: ["user"],
  },
  plantaciones: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Plantation",
    },
  ],
  arbolesApadrinados: [
    {
      plantacion: {
        type: mongoose.Types.ObjectId,
        ref: "Plantation",
      },
      arbol: {
        type: mongoose.Types.ObjectId,
        ref: "Arbol",
      },
      cantidad: {
        type: Number,
      },
    },
  ],
});

module.exports = User = mongoose.model("User", UserSchema);
module.exports = { Roles };
