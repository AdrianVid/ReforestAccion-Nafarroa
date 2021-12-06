import "./App.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNavegacion from "./components/Navbar";

const App = () => {
  let navigate = useNavigate();
  return (
    <div>
      <BarraNavegacion />
      <div className="container2">
        <h1>ReforestAccion</h1>
        <p>
          Bienvenidos a ReforestAccion Nafarroa. Somos una asociacion sin ánimo
          de lucro que nos dedicamos a la plantacion y creación de nuevas zonas
          boscosas. Create una cuenta y apuntate como voluntario para proximos
          proyectos o simplemente puedes hechar un vistazo a nuestros anteriores
          eventos.
        </p>
        <button
          onClick={() => {
            navigate("/registro");
          }}
        >
          Registrate
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log-in
        </button>
      </div>
    </div>
  );
};

export default App;
