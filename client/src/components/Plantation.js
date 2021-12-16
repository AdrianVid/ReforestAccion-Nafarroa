import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Plantation = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>
              <h3>{props.plantacion.lugar}</h3>
            </Card.Title>
            <Card.Text>
              <p>
                Dale click para acceder a mas información acerca de esta
                plantación
              </p>
            </Card.Text>
            <Button
              variant="dark"
              onClick={() => {
                navigate(`/plantaciones/${props.plantacion._id}`);
              }}
            >
              Ir a la plantación
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Plantation;
