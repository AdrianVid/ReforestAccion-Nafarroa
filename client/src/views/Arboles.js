import { useState, useEffect } from "react";
import axios from "axios";
import Tree from "../components/Tree";
import BarraNavegacion from "../components/Navbar";
import NavbarUsuario from "../components/NavbarUsuario";

const Arboles = () => {
  var tokenUsuario = localStorage.getItem("Token");
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("http://localhost:5000/api/trees");
        console.log(response.data.trees);
        setTrees(response.data.trees);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  if (tokenUsuario) {
    return (
      <div>
        <NavbarUsuario />
        <div>
          <div className="miImagen"></div>
        </div>
        <div className="container2">
          <h1>Nuestros arboles </h1>
          <div className="container">
            <p className="textoPequeño">
              Aquí encontrarás toda la variedad de árboles que hemos ido
              plantando
            </p>
            {trees.map((tree, i) => {
              return <Tree key={i} arbol={tree} />;
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
        <h1>Nuestros arboles </h1>
        <div className="container">
          <p className="textoPequeño">
            Aquí encontrarás toda la variedad de árboles que hemos ido plantando
          </p>
          {trees.map((tree, i) => {
            return <Tree key={i} arbol={tree} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Arboles;
//
