import { useState, useEffect } from "react";
import axios from "axios";
import Tree from "../components/Tree";
import BarraNavegacion from "../components/Navbar";

const Arboles = () => {
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

  return (
    <div className="container2">
      <div>
        <BarraNavegacion />
      </div>
      <div className="container">
        <h2>Nuestros arboles </h2>

        <p>
          Aquí encontrarás toda la variedad de árboles que hemos ido plantando
        </p>
        {trees.map((tree, i) => {
          return <Tree key={i} arbol={tree} />;
        })}
      </div>
    </div>
  );
};
export default Arboles;
//
