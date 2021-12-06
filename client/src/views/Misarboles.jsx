import React from "react";
import { useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";

const MisArboles = () => {
  const [state, setState] = useState({
    plantacion: "",
    arbol: "",
    cantidad: "",
  });
  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const getData = async () => {
    try {
      let response = await axios.post(
        "http://localhost:5000/api/users/find/apadrinados",
        {
          plantacion: state.plantacion,
          arbol: state.arbol,
          cantidad: state.cantidad,
        }
      );
      console.log(response.data);
      console.log(state);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="container2">
      <BarraNavegacion />
      <h2>Apadrina un arbol</h2>
      <input
        name="plantacion"
        placeholder="plantacion"
        onChange={(e) => changeState(e)}
      ></input>
      <br />
      <input
        name="arbol"
        placeholder="arbol"
        onChange={(e) => changeState(e)}
      ></input>
      <br />
      <input
        name="cantidad"
        placeholder="cantidad"
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

export default MisArboles;
