import React, { Component } from 'react';
import {Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";


class SignUp extends Component {
  state = {
    signupPassword: "",
    email: "",
    name: "",
    avatar: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  


  render() {
    return (
      <div>
      <h1>Sign Up</h1>
      <Form className="login" onSubmit={e => this.props.signupFormSubmitHandler(e, this.state)}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="text" name="email" id="Email" placeholder="Enter Email Address" value={this.state.email}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter Name" value={this.state.name}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Sign Up Password">Password</Label>
              <Input type="text" name="signupPassword" id="signupPassword" placeholder="Enter Password" value={this.state.signupPassword}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
          <FormGroup>
         <Label for="avatar">Profile Picture</Label>
          <Input type="text" name="avatar" id="avatar" value={this.state.avatar} placeholder="Please enter picture url"
        onChange={this.handleChange}/>
            </FormGroup>
            </Col>
        </Row>
        <Button>Submit</Button>
      </Form>
    </div>
         )
       }
     }

export default SignUp;
