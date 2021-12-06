import React from "react";
import { useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";

const MiCuenta = () => {
  const [state, setState] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    try {
      var tokenUsuario = localStorage.getItem("Token");
      console.log(tokenUsuario);
      let response = await axios.post(
        "http://localhost:5000/api/users/find/update",
        {
          headers: {
            Authorization: tokenUsuario,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div className="container2">
      <BarraNavegacion />
      <p>Completa los campos que quieras modificar </p>
      <input
        name="nombre"
        placeholder="nombre"
        onChange={(e) => changeState(e)}
      ></input>
      <br />
      <input
        name="email"
        placeholder="email"
        onChange={(e) => changeState(e)}
      ></input>
      <br />
      <input
        name="contraseña"
        placeholder="contraseña"
        onChange={(e) => changeState(e)}
      ></input>{" "}
      ;
      <br />
      <button onClick={getData} type="submit">
        Guardar
      </button>
    </div>
  );
};

export default MiCuenta;
