/*import { useState } from "react";
import Persona from "./Persona";

const Child = () => {
  const [loading, setLoading] = useState(true);
  const lista = ["Abel", "Adrian", "Javier", "Miguel"];

  const content = () => {
    return (
      <div>
        {lista.map((nombre, i) => {
          return <Persona key={i} name={nombre} />;
        })}
      </div>
    );
  };

  const loader = () => {
    return (
      <>
        <p>.....loading</p>
        <button onClick={() => setLoading(false)}>Cambiar estado</button>
      </>
    );
  };

  return <>{loading ? loader() : content()} </>;
};
export default Child;*/
