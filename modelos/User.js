const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  contraseña: { type: String, require: true },
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
