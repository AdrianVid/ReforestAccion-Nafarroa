import "./App.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacion from "./components/Navbar";
import { Button } from "react-bootstrap";

const App = () => {
  let navigate = useNavigate();
  return (
    <div>
      <BarraNavegacion />

      <div>
        <div className="miImagen"></div>
      </div>
      <div className="container2">
        <h1 className="texto-portada">
          Plantamos árboles, <br />
          despertamos conciencias
        </h1>
        <div>
          <h2 className="subrayado">
            ReforestAcción Nafarroa es una asociación sin ánimo de lucro cuyo
            objetivo es la concienciación sobre la crisis climática y ecológica
            a través de actividades que transformen nuestra forma de
            relacionarnos con la naturaleza, principalmente, la plantación de
            árboles.
          </h2>
        </div>
        <br />
        <div className="container">
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
          <div className="mb-2">
            <Button
              variant="success"
              size="lg"
              onClick={() => {
                navigate("/registro");
              }}
            >
              Únete
            </Button>{" "}
            <Button
              variant="success"
              size="lg"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log-in
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
