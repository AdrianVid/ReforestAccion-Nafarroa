import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Tree = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>
              <h3>{props.arbol.nombre}</h3>
            </Card.Title>
            <Card.Text>
              Todos nuestros árboles estan tratados contra enfermedades y
              parasitos para un crecimiento sano y una buena preservación.
            </Card.Text>
            <Button
              variant="dark"
              onClick={() => {
                navigate(`/arboles/${props.arbol._id}`);
              }}
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Tree;
