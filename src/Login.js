import React, { Component } from 'react';
import {Button, Row, Col, FormGroup, Label, Input, Form, NavLink, FormText} from 'reactstrap';


class Login extends Component {
  state = {
    email: "",
    loginPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
      <h1>Login to Eat Now</h1>
      <Form className="login" onSubmit={e => this.props.loginSubmitHandler(e, this.state)}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Username">Email</Label>
              <Input type="text" name="email" id="email" placeholder="Enter Email" value={this.state.email}
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Password">Password</Label>
              <Input type="text" name="loginPassword" id="loginPassword" placeholder="Enter Password" value={this.state.loginPassword}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign In</Button>
        </Form>
        <NavLink href="/signup" className="navitem"><Button>Sign Up! </Button></NavLink>
        <FormText> Not a member? Sign Up to use. </FormText>
      </div>
    )
  }
}

export default Login;
