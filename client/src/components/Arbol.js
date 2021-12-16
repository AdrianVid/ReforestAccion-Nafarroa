import { Button } from "react-bootstrap";
import { useState } from "react";

const Arbol = (props) => {
  const [state, setState] = useState({
    plantacion: props.plantacionId,
    arbol: props.arbol.arbol._id,
    cantidad: "",
  });

  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        Tenemos plantados {props.arbol.cantidad}
        <br /> <p>{props.arbol.arbol.nombre}</p>
      </div>
      <input
        name="cantidad"
        placeholder="cantidad"
        onChange={(e) => changeState(e)}
      ></input>

      <div>
        <Button className="mb-3, mt-3" onClick={() => props.apadrinar(state)}>
          Apadrina
        </Button>
      </div>
    </div>
  );
};

export default Arbol;
