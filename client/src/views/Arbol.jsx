import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";

const Arbol = () => {
  let { arbolId } = useParams();
  const [arbol, setArbol] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          `http://localhost:5000/api/trees/find/${arbolId}`
        );
        console.log(response.data);
        setArbol(response.data.tree);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, [arbolId]);

  return (
    <div className="container2">
      <div>
        <BarraNavegacion />
      </div>
      <div className="container">
        <h3>{arbol.nombre}</h3>
        <div className="box">
          Nombre técnico: {arbol.nombreTecnico}
          <br />
          Familia: {arbol.familia}
          <br />
          Especie: {arbol.especie}
          <br />
          Tipo de hoja: {arbol.hoja}
        </div>
      </div>
    </div>
  );
};

export default Arbol;
