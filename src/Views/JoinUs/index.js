import React, { Component } from "react";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import "./joinUs.css";
class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="join">
        <Container className="App">
          <h2>Join Us</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Your name</Label>
                <Input
                  icon="user"
                  type="name"
                  name="name"
                  id="exampleName"
                  placeholder="your full name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePhonenumber">Phone Number</Label>
                <Input
                  type="phonenumber"
                  name="phonenumber"
                  id="examplePhonenumber"
                  placeholder="081********"
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default JoinUs;