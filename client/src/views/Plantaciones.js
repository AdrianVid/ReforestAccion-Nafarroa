import { useEffect, useState } from "react";
import axios from "axios";
import Plantation from "../components/Plantation";
import BarraNavegacion from "../components/Navbar";
import NavbarUsuario from "../components/NavbarUsuario";

const Plantaciones = () => {
  var tokenUsuario = localStorage.getItem("Token");
  const [plantaciones, setPlantaciones] = useState([]);
  useEffect(() => {
    const getDataP = async () => {
      try {
        let response = await axios("http://localhost:5000/api/plantations");
        console.log(response);
        setPlantaciones(response.data.plantations);
      } catch (err) {
        console.log(err);
      }
    };
    getDataP();
  }, []);

  if (tokenUsuario) {
    return (
      <div>
        <NavbarUsuario />
        <div>
          <div className="miImagen"></div>
        </div>
        <div className="container2">
          <h1>Plantaciones</h1>
          <div className="container">
            {plantaciones.map((plantation, i) => {
              return <Plantation key={i} plantacion={plantation} />;
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <BarraNavegacion />
      <div>
        <div className="miImagen"></div>
      </div>
      <div className="container2">
        <h1>Plantaciones</h1>
        <div className="container">
          {plantaciones.map((plantation, i) => {
            if (!plantation)
              return (
                <div>
                  <h3>
                    Todavia no estás inscrito en ninguna plantación <br />
                    Busca en nuestro apartado de plantaciones y apúntate!{" "}
                  </h3>
                </div>
              );
            else return <Plantation key={i} plantacion={plantation} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Plantaciones;
