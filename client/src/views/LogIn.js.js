import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraNavegacion from "../components/Navbar";
import axios from "axios";
import Error from "../components/Error";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const LogIn = () => {
  let navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    contraseña: "",
  });
  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      let response = await axios.post("http://localhost:5000/api/auth/login", {
        email: state.email,
        contraseña: state.contraseña,
      });
      console.log(response.data);
      localStorage.setItem("Token", response.data.token);
      navigate(`/home`);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
      console.log(error);
    }
  };

  return (
    <div>
      <BarraNavegacion />
      <div>
        <div className="imagenLogin"></div>
      </div>
      <div className="container2">
        <h1>Log-in</h1>
        <div className="container">
          <p className="textoPequeño">
            Encantad@s de tenerte otra vez de vuelta!
            <br /> Completa tu email y contraseña para acceder a tu perfil y
            poder inscribirte en las siguientes acciones.
          </p>
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
            type="submit"
          >
            Registro
          </Button>
          <div>{error && <Error error={error} />}</div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
