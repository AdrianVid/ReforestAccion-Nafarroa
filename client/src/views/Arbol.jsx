import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";
import { Card } from "react-bootstrap";

const Arbol = () => {
  let { arbolId } = useParams();
  const [arbol, setArbol] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          `http://localhost:5000/api/trees/find/${arbolId}`
        );
        console.log(response.data);
        setArbol(response.data.tree);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, [arbolId]);

  return (
    <div>
      <BarraNavegacion />
      <div>
        <div className="miImagen"></div>
      </div>
      <div className="container2">
        <div className="container">
          <div className="d-flex justify-content-around">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h2>{arbol.nombre}</h2>
                </Card.Title>
                <Card.Text>
                  <h4>
                    Nombre técnico:
                    <h4 className="subrayado">{arbol.nombreTecnico}</h4>
                  </h4>
                  <br />
                  <h4>
                    Familia: <h4 className="subrayado">{arbol.familia}</h4>
                  </h4>
                  <br />
                  <h4>
                    Especie: <h4 className="subrayado"> {arbol.especie}</h4>
                  </h4>
                  <br />
                  <h4>
                    Tipo de hoja: <h4 className="subrayado">{arbol.hoja}</h4>
                  </h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arbol;
