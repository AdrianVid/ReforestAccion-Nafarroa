import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";

const Home = () => {
  let navigate = useNavigate();
  const [state, setState] = useState({ loading: true });
  useEffect(() => {
    const getData = async () => {
      try {
        var tokenUsuario = localStorage.getItem("Token");
        let response = await axios(
          "http://localhost:5000/api/users/find/myuser",
          {
            headers: {
              Authorization: tokenUsuario,
            },
          }
        );
        console.log(response.data.user);
        setState(response.data.user);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, []);

  if (state.loading === true) {
    return (
      <div>
        <BarraNavegacion />
        <h2>HOME</h2>
        <h3>Cargando</h3>
      </div>
    );
  } else {
    return (
      <div className="container2">
        <BarraNavegacion />
        <h2>HOME</h2>
        <h4>Bienvenido {state.nombre}</h4>

        <p>Accede a tu cuenta y edita tus datos</p>
        <button
          onClick={() => {
            navigate("/micuenta");
          }}
        >
          Mi cuenta
        </button>
        <br />
        <br />
        <p>Mis plantaciones: apuntate como voluntario</p>
        <button
          onClick={() => {
            navigate("/misplantaciones");
          }}
        >
          Mis plantaciones
        </button>
        <br />
        <br />
        <p>Mis arboles: apadrina un arbol</p>
        <button
          onClick={() => {
            navigate("/misarboles");
          }}
        >
          Mis arboles
        </button>
        <br />
        <br />
        <p>Borrar cuenta</p>
        <button>Borrar</button>
      </div>
    );
  }
};
export default Home;
