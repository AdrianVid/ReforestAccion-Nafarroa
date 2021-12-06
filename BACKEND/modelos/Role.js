const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  name: String,
});

module.exports = Role = mongoose.model("Role", RoleSchema);
