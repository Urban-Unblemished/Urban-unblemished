import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../events.css'
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";

export default function LogInForm(){
    return <>
        <Form id="create-form">
  <Row>
    <Col>
      <FormGroup>
        <Label htmlFor="username">
          Username
        </Label>
        <Input
          id="username"
          name="email"
          placeholder="Username"
          type="text"
          autoComplete="username"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
        />
      </FormGroup>
    </Col>
  </Row>
  <Button>
    Log in
  </Button>
</Form>
    </>
}