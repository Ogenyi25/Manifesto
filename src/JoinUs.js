import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Spinner
} from "reactstrap";
import { connect } from "react-redux";
import { startRegister } from "../../actions/auth.action";

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: "",
        email: "",
        phonenumber: ""
      }
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [name]: value
      }
    });
  };

  submit = event => {
    event.preventDefault();
    const { name, email, phonenumber } = this.state.inputs;
    this.props.dispatch(
      JoinUs({
        name,
        email,
        phonenumber
      })
    );
  };

  render() {
    const { name, email, phonenumber } = this.state.inputs;
    const { feedbackState } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Join Us</h1>
                      <p className="text-muted">Sign Up to create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Fullname"
                          autoComplete="fullname"
                          name="fullname"
                          onChange={this.handleInputChange}
                          value={name}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="Your email"
                          autoComplete="current-email"
                          name="email"
                          onChange={this.handleInputChange}
                          value={email}
                        />
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="phonenumber"
                          placeholder="Phonenumber"
                          autoComplete="current-phonenumber"
                          name="phonenumber"
                          onChange={this.handleInputChange}
                          value={phonenumber}
                        />
                      </InputGroup>

                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={this.submit}
                            disabled={feedbackState.loading}
                          >
                          { feedbackState.loading ? <Spinner color="light" size="sm" /> : null }
                            SignUp
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      feedbackState: state.feedbackState
    };
  };
  
  export default connect(mapStateToProps)(JoinUs);
  