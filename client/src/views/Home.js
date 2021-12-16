import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";
import NavbarUsuario from "../components/NavbarUsuario";

import { Button } from "react-bootstrap";

const Home = () => {
  let navigate = useNavigate();
  const [state, setState] = useState({ loading: true });
  useEffect(() => {
    const getData = async () => {
      try {
        var tokenUsuario = localStorage.getItem("Token");
        let response = await axios("http://localhost:5000/api/users/myuser", {
          headers: {
            Authorization: tokenUsuario,
          },
        });
        console.log(response);
        setState(response.data.user);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, []);

  if (state.loading === true) {
    return (
      <div className="container2">
        <BarraNavegacion />
        <h2>HOME</h2>
        <h3>Cargando</h3>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarUsuario />
        <div>
          <div className="imagenLogin"></div>
        </div>
        <div className="container2">
          <h1>HOME</h1>

          <div className="container">
            <h3>Bienvenido {state.nombre}</h3>
            <p className="textoPequeño">Accede a tu cuenta y edita tus datos</p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                navigate("/micuenta");
              }}
            >
              Mi cuenta
            </Button>

            <br />
            <br />
            <p className="textoPequeño">
              Accede al listado de todas las plantaciones en las que has fomado
              parte.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                navigate("/misplantaciones");
              }}
            >
              Mis plantaciones
            </Button>

            <br />
            <br />
            <p className="textoPequeño">
              Aquí podrás ver todos los árboles que has apadrinado
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                navigate("/misarboles");
              }}
            >
              Mis arboles
            </Button>

            <br />
            <br />
            <p className="textoPequeño">Borra tu cuenta</p>
            <Button
              variant="dark"
              size="lg"
              onClick={() => {
                navigate("/eliminar");
              }}
            >
              Borrar
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
export default Home;
