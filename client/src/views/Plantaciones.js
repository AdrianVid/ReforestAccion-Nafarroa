import { useEffect, useState } from "react";
import axios from "axios";
import Plantation from "../components/Plantation";
import BarraNavegacion from "../components/Navbar";

const Plantaciones = () => {
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
  return (
    <div className="container2">
      <div>
        <BarraNavegacion />
      </div>
      <div className="container">
        <h2>Plantaciones</h2>
        {plantaciones.map((plantation, i) => {
          return <Plantation key={i} plantacion={plantation} />;
        })}
      </div>
    </div>
  );
};
export default Plantaciones;
