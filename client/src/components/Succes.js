import React from "react";
import { Alert } from "react-bootstrap";

const Success = (success) => {
  return (
    <div>
      <Alert variant="succes">
        <Alert.Heading>Enhorabuena! Todo ha ido bien</Alert.Heading>
        {success.message}
      </Alert>
    </div>
  );
};

export default Success;
