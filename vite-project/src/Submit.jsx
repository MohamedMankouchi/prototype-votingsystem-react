import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const Submit = ({ submit }) => {
  const useref = useRef();
  return (
    <Form style={{ textAlign: "center", display: "grid" }}>
      <Form.Group
        style={{ textAlign: "center", width: "50%", justifySelf: "center" }}
        className="-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={useref} type="email" placeholder="Enter email" />
      </Form.Group>
      <Button
        style={{ justifySelf: "center", marginTop: "20px" }}
        variant="primary"
        onClick={() => submit(useref.current.value)}
      >
        Vote
      </Button>
    </Form>
  );
};
