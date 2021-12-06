import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Tree = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{props.arbol.nombre}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
