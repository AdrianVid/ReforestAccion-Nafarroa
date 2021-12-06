import { useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";

const Registro = () => {
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
      let response = await axios.post(
        "http://localhost:5000/api/auth/crearCuenta",
        {
          nombre: state.nombre,
          email: state.email,
          contraseña: state.contraseña,
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
      <h1>Registro</h1>
      <p>Rellena todos los campos para registrarte</p>
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
        Registro
      </button>
    </div>
  );
};

export default Registro;
