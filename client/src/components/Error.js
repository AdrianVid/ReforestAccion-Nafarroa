import React from "react";
import Alert from "react-bootstrap/Alert";

const Error = ({ error }) => {
  return (
    <div>
      <Alert variant="danger">
        <Alert.Heading>Oooops! Algo ha salido mal!</Alert.Heading>
        {error.message}
      </Alert>
    </div>
  );
};

export default Error;
