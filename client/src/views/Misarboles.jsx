import React from "react";
import { useEffect, useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";
import NavbarUsuario from "../components/NavbarUsuario";

const MisArboles = () => {
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
        console.log(response.data.user);
        setState(response.data.user);
        console.log(state);
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
        <h2>Mis arboles</h2>
        <h3>Cargando</h3>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarUsuario />
        <div className="container2">
          <h1>Mis Arboles</h1>
          <div className="container">
            <div>
              {state.arbolesApadrinados.map((apadrinados, i) => {
                return (
                  <p key={i}>
                    Tienes apadrinados una cantidad de
                    <br />
                    {apadrinados.cantidad}
                    {apadrinados.arbol.nombre}s <br />
                    en la plantacion de: <br />
                    {apadrinados.plantacion.lugar}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MisArboles;
