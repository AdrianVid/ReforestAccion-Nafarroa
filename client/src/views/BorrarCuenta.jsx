import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarUsuario from "../components/NavbarUsuario";
import { Button } from "react-bootstrap";

const BorrarCuenta = () => {
  let navigate = useNavigate();
  var tokenUsuario = localStorage.getItem("Token");
  const delet = async () => {
    try {
      let response = await axios.delete(
        "http://localhost:5000/api/users/find/delete",
        {
          headers: {
            Authorization: tokenUsuario,
          },
        }
      );
      console.log(response.data);

      navigate(`/`);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <NavbarUsuario />
      <div className="container2">
        <h1>Borrar</h1>
        <div className="container">
          <p className="textoPequeño">
            Nos encantaría que siguieras con nosotros!
            <br /> En cualquier caso, si pulsas ese botón, borras tu cuenta de
            ReforestAcción
          </p>
          <Button variant="dark" onClick={delet} type="submit">
            Borrar cuenta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BorrarCuenta;
