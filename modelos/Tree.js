const mongoose = require("mongoose");

const TreeSchema = new mongoose.Schema({
  nombre: { type: String },
  nombreTecnico: { type: String },
  familia: { type: String },
  especie: { type: String },
  hoja: { type: String },
});

module.exports = Tree = mongoose.model("Tree", TreeSchema);
