import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Plantation = (props) => {
  console.log(props);
  let navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>{props.plantacion.lugar}</Card.Title>
            <Card.Text>{props.plantacion.fecha}</Card.Text>
            <Button
              variant="primary"
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
