import React from "react";
import BarraNavegacion from "../components/Navbar";
import { useEffect, useState } from "react";

import axios from "axios";
import NavbarUsuario from "../components/NavbarUsuario";

const AñadirPlantacion = () => {
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
        <h1>PLANTACIONES</h1>
        <h3>Cargando</h3>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarUsuario />
        <div className="container2">
          <h1>Mis plantaciones</h1>
          <div className="container">
            <div>
              {state.plantaciones.map((plantacion, i) => {
                if (plantacion.lugar === null)
                  return (
                    <div>
                      <h3>
                        Todavia no estás inscrito en ninguna plantación <br />
                        Busca en nuestro apartado de plantaciones y apúntate!{" "}
                      </h3>
                    </div>
                  );
                else
                  return (
                    <h3 key={i}>
                      Estras inscrito como voluntario en la plantacion de{" "}
                      <h3 className="subrayado"> {plantacion.lugar}</h3>
                    </h3>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AñadirPlantacion;
