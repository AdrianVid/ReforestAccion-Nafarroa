const express = require("express");
const Plantation = require("../modelos/Plantation");
const Tree = require("../modelos/Tree");
const User = require("../modelos/user");
const UserRoute = express.Router();

//Buscar todos los usuarios
UserRoute.get("/", async (req, res) => {
  try {
    const { id } = req.user;
    const users = await User.find({});
    return res.json({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//Buscar un usuario x id
UserRoute.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//Modificar usuario
UserRoute.put("/find/:id/update", async (req, res) => {
  try {
    const { id } = req.user;
    const { nombre, email, contraseña, plantaciones, arbolesApadrinados } =
      req.body;

    const user = await User.findById(id);

    if (nombre) {
      user.nombre = nombre;
    }
    if (email) {
      user.email = email;
    }
    if (contraseña) {
      user.contraseña = contraseña;
    }
    if (plantaciones) {
      user.plantaciones = plantaciones;
    }
    if (arbolesApadrinados) {
      user.arbolesApadrinados = arbolesApadrinados;
    }

    const newUser = await user.save();

    return res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Añadir plantacion
UserRoute.put("/find/:id/plantaciones", async (req, res) => {
  try {
    const { id } = req.user;
    const { plantaciones } = req.body;

    const user = await User.findById(id);
    if (plantaciones) {
      user.plantaciones = plantaciones;
    }
    const newUser = await user.save();

    return res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Borrar una plantacion
UserRoute.put("/find/:id/plantaciones/delete", async (req, res) => {
  try {
    const { id } = req.user;

    const { plantaciones } = req.body;

    if (!plantaciones) {
      return res.status(400).json({
        succes: false,
        message: `Tienes que escribir una plantación`,
      });
    }
    let usuario = await User.findById(id);
    let plantacionA = await Plantation.findById(plantaciones);

    if (!usuario) {
      return res.status(400).json({
        succes: false,
        message: `El usuario no existe`,
      });
    }
    if (!plantacionA) {
      return res.status(400).json({
        succes: false,
        message: `La plantacion no existe`,
      });
    }
    let usuarioPlantacion = plantacionA.participantes.find(function (
      voluntario
    ) {
      if (voluntario.equals(id)) {
        return true;
      }
      return false;
    });
    if (!usuarioPlantacion) {
      return res.status(400).json({
        succes: false,
        message: `No estas inscrito en esta plantacion`,
      });
    }
    plantacionA.participantes.splice(usuarioPlantacion);
    await plantacionA.save();

    let plantacionUsuario = usuario.plantaciones.find(function (evento) {
      if (evento.equals(plantaciones)) {
        return true;
      }
      return false;
    });
    if (!plantacionUsuario) {
      return res.status(400).json({
        succes: false,
        message: `No estas inscrito en esta plantacion`,
      });
    }
    usuario.plantaciones.splice(plantacionUsuario);
    const userAct = await usuario.save();
    return res.status(201).json({
      success: true,
      message: `Has eliminado la plantacion de ${plantacionA.lugar} de tu perfil`,
      arbolesApadrinados: userAct,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Añadir arboles apadrinados
UserRoute.put("/find/:id/apadrinados", async (req, res) => {
  try {
    const { plantacion, arbol, cantidad } = req.body;
    const { id } = req.user;

    if (!plantacion || !arbol || !cantidad) {
      return res.status(400).json({
        succes: false,
        message: `Tienes que completar todos los datos`,
      });
    }
    let usuario = await User.findById(id);
    let plantacionA = await Plantation.findById(plantacion);
    let arbolA = await Tree.findById(arbol);

    if (!usuario) {
      return res.status(400).json({
        succes: false,
        message: `El usuario no existe`,
      });
    }
    if (!arbolA) {
      return res.status(400).json({
        succes: false,
        message: `El arbol no existe`,
      });
    }
    if (!plantacionA) {
      return res.status(400).json({
        succes: false,
        message: `La plantacion no existe`,
      });
    }
    let arbolEnPlantacion = plantacionA.arboles.find(function (plantado) {
      if (plantado.arbol.equals(arbol)) {
        return true;
      }
      return false;
    });
    if (!arbolEnPlantacion) {
      return res.status(400).json({
        succes: false,
        message: `Este arbol no se encuentra en esta plantacion`,
      });
    }
    if (parseInt(cantidad) <= 0) {
      return res.status(400).json({
        succes: false,
        message: `Tienes que apadrinar un número de árboles positivo`,
      });
    }
    if (
      arbolEnPlantacion.apadrinados + parseInt(cantidad) >
      arbolEnPlantacion.cantidad
    ) {
      return res.status(400).json({
        succes: false,
        message: `No se pueden apadrinar mas arboles de los plantados. Se pueden apadrinar ${
          arbolEnPlantacion.cantidad - arbolEnPlantacion.apadrinados
        } ${arbolA.nombreComun}s`,
      });
    }
    let plantacionEncontrada = usuario.arbolesApadrinados.find(function (
      plantada
    ) {
      if (
        plantada.plantacion.equals(plantacion) &&
        plantada.arbol.equals(arbol)
      ) {
        return true;
      }
      return false;
    });

    arbolEnPlantacion.apadrinados += parseInt(cantidad);
    await plantacionA.save();

    if (plantacionEncontrada) {
      plantacionEncontrada.cantidad += parseInt(cantidad);

      const userAct = await usuario.save();

      return res.status(201).json({
        success: true,
        message: `Has apadrinado ${cantidad} ${arbolA.nombre}s de la plantacion de ${plantacionA.lugar}`,
        arbolesApadrinados: userAct,
      });
    }
    const arbolesApadrinados = { plantacion, arbol, cantidad };
    usuario.arbolesApadrinados.push(arbolesApadrinados);
    const userAct = await usuario.save();

    console.log(plantacionA.arboles.apadrinados);

    return res.status(201).json({
      success: true,
      message: `Has apadrinado ${cantidad} ${arbolA.nombreComun}s de la plantacion de ${plantacionA.lugar}`,
      arbolesApadrinados: userAct,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

//Borrar arboles apadrinados
UserRoute.put("/find/:id/apadrinados/delete", async (req, res) => {
  try {
    const { plantacion, arbol, cantidad } = req.body;
    const { id } = req.user;

    if (!plantacion || !arbol || !cantidad) {
      return res.status(400).json({
        succes: false,
        message: `Tienes que completar todos los datos`,
      });
    }
    let usuario = await User.findById(id);
    let plantacionA = await Plantation.findById(plantacion);
    let arbolA = await Tree.findById(arbol);

    if (!usuario) {
      return res.status(400).json({
        succes: false,
        message: `El usuario no existe`,
      });
    }
    if (!arbolA) {
      return res.status(400).json({
        succes: false,
        message: `El arbol no existe`,
      });
    }
    if (!plantacionA) {
      return res.status(400).json({
        succes: false,
        message: `La plantacion no existe`,
      });
    }
    let arbolEnPlantacion = plantacionA.arboles.find(function (plantado) {
      if (plantado.arbol.equals(arbol)) {
        return true;
      }
      return false;
    });
    if (!arbolEnPlantacion) {
      return res.status(400).json({
        succes: false,
        message: `Este arbol no se encuentra en esta plantacion`,
      });
    }
    if (parseInt(cantidad) <= 0) {
      return res.status(400).json({
        succes: false,
        message: `Tienes que apadrinar un número de árboles positivo`,
      });
    }
    if (
      arbolEnPlantacion.apadrinados - parseInt(cantidad) >
      arbolEnPlantacion.cantidad
    ) {
      return res.status(400).json({
        succes: false,
        message: `No puedes dejar de apadrinar mas arboles de los plantados. En la plantacion de ${plantacionA.lugar} hay ${arbolEnPlantacion.apadrinados} ${arbolA.nombreComun}s apadrinados`,
      });
    }
    let plantacionEncontrada = usuario.arbolesApadrinados.find(function (
      plantada
    ) {
      if (
        plantada.plantacion.equals(plantacion) &&
        plantada.arbol.equals(arbol)
      ) {
        return true;
      }
      return false;
    });

    arbolEnPlantacion.apadrinados -= parseInt(cantidad);
    await plantacionA.save();

    if (plantacionEncontrada) {
      plantacionEncontrada.cantidad -= parseInt(cantidad);

      const userAct = await usuario.save();

      return res.status(201).json({
        success: true,
        message: `Has dejado de apadrinar ${cantidad} ${arbolA.nombre}s de la plantacion de ${plantacionA.lugar}`,
        arbolesApadrinados: userAct,
      });
    }
    const arbolesApadrinados = { plantacion, arbol, cantidad };
    usuario.arbolesApadrinados.splice(arbolesApadrinados);
    const userAct = await usuario.save();

    console.log(plantacionA.arboles.apadrinados);

    return res.status(201).json({
      success: true,
      message: `Has dejado de apadrinar ${cantidad} ${arbolA.nombreComun}s de la plantacion de ${plantacionA.lugar}`,
      arbolesApadrinados: userAct,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      succes: false,
      message: err._message || err.message,
    });
  }
});

UserRoute.delete("/find/:id/delete", async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findByIdAndDelete(id);
    return res.send({
      success: true,
      message: `${user.nombre} ha sido eliminado`,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

module.exports = UserRoute;
