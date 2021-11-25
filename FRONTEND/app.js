/*const express = require("express");

require("dotenv").config();

const app = express();
const { PORT, URI } = process.env;
const fs = require("fs");
const connectDB = require(`./DB/conection`);
connectDB();

//app.use(express.json({ extended: false }));
app.use(`/api/userModel`, require(`./Api/User`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", (req, res) => {
  let { nombre, apellido } = req.body;
  let obj = {
    nombre,
    apellido,
  };

  // fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(obj), (err) => {
  if (err) {
    return res.status(403).send({
      success: false,
      message: err,
    });
  }
  return res.status(201).send({
    success: true,
    message: "Creado correctamente",
  });
});
//});

app.get("/info/:ms", (req, res) => {
  let param = req.params.ms;
  fs.readFile(`./data/${param}.json`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(JSON.parse(data));
    console.log(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server started`);
});*/
