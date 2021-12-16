import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BarraNavegacion from "../components/Navbar";
import Error from "../components/Error";
import { Card, Button } from "react-bootstrap";
import Arbol from "../components/Arbol";
import NavbarUsuario from "../components/NavbarUsuario";

const Plantacion = () => {
  let { plantacionId } = useParams();
  const [error, setError] = useState(null);
  const [plantacion, setPlantacion] = useState({ loading: true });
  var tokenUsuario = localStorage.getItem("Token");

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          `http://localhost:5000/api/plantations/find/${plantacionId}`
        );
        console.log(response.data);
        setPlantacion(response.data.plantation);
      } catch (err) {
        console.log(err.response);
      }
    };
    getData();
  }, [plantacionId]);

  let arbolesPlantados = plantacion.arboles;

  const apadrinar = async (data) => {
    var tokenUsuario = localStorage.getItem("Token");
    setError(null);
    try {
      let colaborar = await axios.put(
        "http://localhost:5000/api/users/find/apadrinados",
        data,
        {
          headers: {
            Authorization: tokenUsuario,
          },
        }
      );
      console.log(data);
      console.log(colaborar.data);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
    }
  };

  const inscripcion = async () => {
    var tokenUsuario = localStorage.getItem("Token");
    setError(null);
    try {
      let info = await axios.put(
        "http://localhost:5000/api/users/find/plantaciones",
        {
          plantaciones: plantacionId,
        },
        {
          headers: {
            Authorization: tokenUsuario,
          },
        }
      );

      console.log(info.data);
    } catch (err) {
      console.log(err.response);
      setError(err.response.data);
    }
  };

  if (plantacion.loading === true) {
    return (
      <div className="container2">
        <BarraNavegacion />
        <h2>PLANTACION</h2>
        <h3>Cargando</h3>
      </div>
    );
  } else {
    return (
      <div>
        <NavbarUsuario />
        <div>
          <div className="imagenLogin"></div>
        </div>
        <div className="container2">
          <div className="container">
            <div className="d-flex justify-content-around">
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>
                    <h3>{plantacion.lugar}</h3>
                  </Card.Title>
                  <br />
                  <Card.Text>{plantacion.fecha}</Card.Text>
                  <Card.Text>
                    {arbolesPlantados.map((tree, i) => {
                      if (!tokenUsuario) {
                        return (
                          <div>
                            Tenemos plantados {tree.cantidad}
                            <br /> <p>{tree.arbol.nombre}</p>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <Arbol
                              key={i}
                              arbol={tree}
                              plantacionId={plantacionId}
                              apadrinar={apadrinar}
                            />
                            <Button
                              className="mb-3, mt-3"
                              variant="dark"
                              onClick={inscripcion}
                            >
                              Apuntarme a la plantacion
                            </Button>
                            ;
                          </div>
                        );
                      }
                    })}
                  </Card.Text>{" "}
                </Card.Body>
              </Card>
            </div>
          </div>
          <div>{error && <Error error={error} />}</div>
        </div>{" "}
      </div>
    );
  }
};

export default Plantacion;
