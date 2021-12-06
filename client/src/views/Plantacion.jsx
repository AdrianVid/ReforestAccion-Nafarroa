import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";

const Plantacion = () => {
  let { plantacionId } = useParams();
  const [plantacion, setPlantacion] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          `http://localhost:5000/api/plantations/find/${plantacionId}`
        );
        console.log(response.data);
        setPlantacion(response.data.plantation);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, [plantacionId]);
  return (
    <div className="container2">
      <div>
        <BarraNavegacion />
      </div>
      <div className="container">
        <h3>{plantacion.lugar}</h3>
        <div className="box">
          <h4>{plantacion.fecha}</h4>
          <p>Aqui ira informacion de la plantacion.</p>
          <p>participantes, tipo de arboles plantados</p>
          <p>Imagenes de la plantación</p>
        </div>
      </div>
    </div>
  );
};

export default Plantacion;
