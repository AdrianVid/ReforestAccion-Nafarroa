import { useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";

const LogIn = () => {
  const [state, setState] = useState({
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
      let response = await axios.post("http://localhost:5000/api/auth/login", {
        email: state.email,
        contraseña: state.contraseña,
      });
      console.log(response.data);

      localStorage.setItem("Token", response.data.token);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="container2">
      <BarraNavegacion />
      <h1>Log-in</h1>
      <p>Completa tu email y contraseña para iniciar sesión</p>
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

export default LogIn;
