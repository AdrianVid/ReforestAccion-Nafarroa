import React from "react";
import BarraNavegacion from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Misplantaciones = () => {
  const [state, setPlantaciones] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          "http://localhost:5000/api/users/find/myuser"
        );
        console.log(response);
        setPlantaciones(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  console.log(state);

  return (
    <div className="container2">
      <div>
        <BarraNavegacion />
      </div>
      <h2>Mis plantaciones</h2>
    </div>
  );
};

export default Misplantaciones;
