const mongoose = require("mongoose");

const PlantationSchema = new mongoose.Schema({
  lugar: { type: String, require: true },
  fecha: { type: Date, require: true },
  participantes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  arboles: [
    {
      arbol: {
        type: mongoose.Types.ObjectId,
        ref: "Arbol",
      },
      cantidad: { type: Number },
      apadrinados: { type: Number, default: 0 },
    },
  ],
});

module.exports = Plantation = mongoose.model("Plantation", PlantationSchema);
