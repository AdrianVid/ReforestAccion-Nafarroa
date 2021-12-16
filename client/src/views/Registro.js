import { useState } from "react";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Registro = () => {
  let navigate = useNavigate();
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
    try {
      let response = await axios.post(
        "http://localhost:5000/api/auth/crearCuenta",
        {
          nombre: state.nombre,
          email: state.email,
          contraseña: state.contraseña,
        }
      );
      console.log(response.data);
      localStorage.setItem("Token", response.data.token);
      navigate(`/home`);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
    }
  };

  return (
    <div>
      <BarraNavegacion />
      <div>
        <div className="imagenLogin"></div>
      </div>
      <div className="container2">
        <h1>Únete a nosotros</h1>
        <div className="container">
          <p className="textoPequeño">
            Estarás contribuyendo a que la asociación siga actuando y tendrás
            prioridad para participar en todas las actividades que organicemos.
            <br />
            Te informaremos de diferentes actividades en las que podrás
            colaborar. <br />
            Rellena este formulario para hacerte voluntaria/o.
          </p>
          <InputGroup className="mb-3">
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
          <Button
            className="mt-3"
            variant="success"
            size="lg"
            onClick={getData}
          >
            Registro
          </Button>
          <div>{error && <Error error={error} />} </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
