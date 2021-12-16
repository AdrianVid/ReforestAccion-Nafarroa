const express = require("express");
const cloudinary = require("../client/src/utils/cloudinary");
const upload = require("../client/src/utils/multer");
const { checkToken } = require("../middleware");
const Tree = require("../modelos/Tree");
const TreeRoute = express.Router();

//Crear árbol
TreeRoute.post("/", upload.single("imagen"), checkToken, async (req, res) => {
  try {
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const {
      nombre,
      nombreTecnico,
      familia,
      especie,
      hoja,
      imagen,
      cloudinary_id,
    } = req.body;

    console.log(upload);
    console.log(result);

    if (!nombre || !nombreTecnico || !familia || !especie || !hoja) {
      return res.status(201).json({
        success: false,
        messsage: "Datos incompletos",
      });
    }
    const tree = new Tree({
      nombre,
      nombreTecnico,
      familia,
      especie,
      hoja,
      imagen: result?.secure_url,
      cloudinary_id: result?.public_id,
    });

    const newTree = await tree.save();

    return res.status(201).json({
      success: true,
      tree: newTree,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});
//Buscar arboles
TreeRoute.get("/", async (req, res) => {
  try {
    const trees = await Tree.find({});
    return res.json({
      success: true,
      trees,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});
//Buscar un árbol x id
TreeRoute.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const tree = await Tree.findById(id);
    return res.json({
      success: true,
      tree,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});
//Modificar árbol
TreeRoute.put("/find/:id/update", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nombreTecnico, familia, especie, hoja } = req.body;
    const arbol = await Tree.findById(id);

    if (nombre) {
      arbol.nombre = nombre;
    }
    if (nombreTecnico) {
      arbol.nombreTecnico = nombreTecnico;
    }
    if (familia) {
      arbol.familia = familia;
    }
    if (especie) {
      arbol.especie = especie;
    }
    if (hoja) {
      arbol.hoja = hoja;
    }

    const newTree = await arbol.save();

    /* let plantacionArboles = {
      arbol: cantidad,
    };

    plantacionArboles = await Tree.findById(arbol);
    plantacionArboles.arboles.push(newPlantacion);
    await plantacionArboles.save();*/

    return res.status(201).json({
      success: true,
      arbol: newTree,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

TreeRoute.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    const arbol = await Tree.findByIdAndDelete(id);
    return res.send({
      success: true,
      message: `${arbol.nombre} ha sido borrado`,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});
module.exports = TreeRoute;
