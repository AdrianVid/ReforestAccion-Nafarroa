const express = require("express");
const Plantation = require("../modelos/Plantation");
const Tree = require("../modelos/Tree");
const Usuario = require("../modelos/User");
const PlantationRoute = express.Router();

//Crear plantación
PlantationRoute.post("/", async (req, res) => {
  try {
    const { lugar, fecha, participantes, arboles } = req.body;

    if (!lugar || !fecha) {
      return res.status(201).json({
        success: false,
        messsage: "Datos incompletos",
      });
    }
    const plantation = new Plantation({
      lugar,
      fecha,
      participantes,
      arboles,
    });

    const newPlantation = await plantation.save();

    return res.status(201).json({
      success: true,
      plantation: newPlantation,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Buscar todas las plantaciones
PlantationRoute.get("/", async (req, res) => {
  try {
    const plantations = await Plantation.find({}).populate({
      path: "arboles.arbol",
      select: "nombre",
    });
    return res.json({
      success: true,
      plantations,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//Buscar plantación x id
PlantationRoute.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plantation = await Plantation.findById(id).populate({
      path: "arboles.arbol",
      select: "nombre",
    });
    return res.json({
      success: true,
      plantation,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//Modificar plantación
PlantationRoute.put("/find/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { lugar, fecha, participantes, arboles } = req.body;
    const plantacion = await Plantation.findById(id);

    if (lugar) {
      plantacion.lugar = lugar;
    }
    if (fecha) {
      plantacion.fecha = fecha;
    }
    if (participantes) {
      plantacion.participantes.push(participantes);
    }
    if (arboles) {
      plantacion.arboles.push(arboles);
    }
    const newPlantacion = await plantacion.save();

    return res.status(201).json({
      success: true,
      plantation: newPlantacion,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Añadir arboles a una planatación existente
PlantationRoute.put("/find/:id/arboles", async (req, res) => {
  try {
    const { arbol, cantidad } = req.body;
    const { id } = req.params;
    const arboles = {
      arbol,
      cantidad,
    };

    let plantacion = await Plantation.findById(id);
    let arbolP = await Tree.findById(arbol);
    /* let usuario = await Usuario.findById(usuaro);

    if (usuario.roles !== "admin") {
      return res.status(400).json({
        succes: false,
        message: `No tienes autorizacion`,
      });
    }*/
    let arbolEncontrado = plantacion.arboles.find(function (plantado) {
      if (plantado.arbol.equals(arbol)) {
        return true;
      }
      return false;
    });

    if (arbolEncontrado !== undefined) {
      arbolEncontrado.cantidad += parseInt(cantidad);
      const plantacionAct = await plantacion.save();

      return res.status(201).json({
        success: true,
        message: `Se han añadido ${cantidad} ${arbolP.nombre}s a la plantacion`,
        plantacion: plantacionAct,
      });
    }

    plantacion.arboles.push(arboles);
    const plantacionAct = await plantacion.save();

    return res.status(201).json({
      success: true,
      message: `Se han añadido ${cantidad} ${arbolP.nombre}s a la plantacion`,
      plantacion: plantacionAct,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

PlantationRoute.delete("/find/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;

    const plantation = await Plantation.findByIdAndDelete(id);

    return res.send({
      success: true,
      message: `La plantacion de ${plantation.lugar} ha sido borrada`,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

module.exports = PlantationRoute;
