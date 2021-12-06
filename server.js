const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const TreeRoute = require("./Api/TreeRoute");
const UserRoute = require("./Api/UserRoute");
const PlantationRoute = require("./Api/PlantationRoute");
const AuthRoute = require("./Api/AuthRoute");
const { checkToken } = require("./middleware");
const { PORT, URI } = process.env;

const app = express();
mongoose.connect(URI).then(() => {
  console.log("db connected..!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/trees", TreeRoute);
app.use("/api/users", checkToken, UserRoute);
app.use("/api/plantations", PlantationRoute);
app.use("/api/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});
