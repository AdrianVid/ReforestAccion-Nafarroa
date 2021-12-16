import React from "react";
import BarraNavegacion from "../components/Navbar";
const QuienesSomos = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className="container2">
        <h1 className="eslogan">Plantamos árboles, despertamos conciencias</h1>

        <div className="container">
          <h2>
            ReforestAcción Nafarroa es una asociación sin ánimo de lucro cuyo
            objetivo es la concienciación sobre la crisis climática y ecológica
            a través de actividades que transformen nuestra forma de
            relacionarnos con la naturaleza, principalmente, la plantación de
            árboles.
          </h2>
          <p className="textoPequeño">
            La asociación nace cuando un grupo de personas, procedentes de
            ámbitos diferentes pero unidas por la inquietud frente a la
            emergencia climática y ecológica, decidimos organizarnos y hacer
            algo al respecto.
            <br />
          </p>
          <p className="textoPequeño">
            {" "}
            Nuestro propósito es el aumento de la conciencia ambiental de la
            sociedad, para ello realizamos acciones como:
            <li>Actividades de educación y sensibilización ambiental</li>
            <li>Plantaciones y cuidados de árboles</li>
            <li>Limpiezas de zonas naturales</li>
            <li>Creación y gestión de bancos de semillas y viveros</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
