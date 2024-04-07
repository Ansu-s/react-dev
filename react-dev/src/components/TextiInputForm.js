import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function TextiInputForm() {
  return (
    <>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your text</Form.Label>
        <Form.Control type="email" placeholder="your text input goes here" />
        <Form.Text className="text-muted">
          Whatever you enter will be seen here
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>
  );
}
