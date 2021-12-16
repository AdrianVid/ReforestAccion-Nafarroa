import React from "react";
import { useState } from "react";
import axios from "axios";
import Error from "../components/Error";
import NavbarUsuario from "../components/NavbarUsuario";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const MiCuenta = () => {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    nombre: "",
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
    var tokenUsuario = localStorage.getItem("Token");
    try {
      console.log(tokenUsuario);
      let response = await axios.put(
        "http://localhost:5000/api/users/find/update",
        state,
        {
          headers: {
            Authorization: tokenUsuario,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  };
  return (
    <div>
      <NavbarUsuario />
      <div className="container2">
        <div className="container">
          <p className="textoPequeño">
            Completa los campos que quieras modificar de tu perfil
          </p>
          <InputGroup className="mb-3">
            {" "}
            <FormControl
              name="nombre"
              placeholder="Nombre"
              onChange={(e) => changeState(e)}
            ></FormControl>
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <FormControl
              name="email"
              placeholder="Em@il"
              onChange={(e) => changeState(e)}
            ></FormControl>
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <FormControl
              name="contraseña"
              placeholder="Contraseña"
              onChange={(e) => changeState(e)}
            ></FormControl>
          </InputGroup>
          <br />
          <Button className="mb-3, mt-3" onClick={getData} type="submit">
            Guardar
          </Button>
          <div>{error && <Error error={error} />}</div>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
