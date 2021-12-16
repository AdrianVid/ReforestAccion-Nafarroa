import React from "react";
import BarraNavegacion from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CerrarSesion = () => {
  let navigate = useNavigate();
  const salir = () => {
    try {
      localStorage.removeItem("Token");
      navigate("/");
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <BarraNavegacion />
      <div>
        <div className="imagenLogin"></div>
      </div>
      <div className="container2">
        <h1>Salir</h1>
        <div className="container">
          <p className="textoPequeño">Esperamos volver a verte pronto!</p>
          <Button
            className="mt-3"
            variant="dark"
            size="lg"
            onClick={salir}
            type="submit"
          >
            Cerrar sesion
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CerrarSesion;
