import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../../actions/auth';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    remember_me: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div class="auth_form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="username" sm={{ size: 2, offset: 3 }}>Email</Label>
            <Col sm={4}>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='your@email.com'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="username" sm={{ size: 2, offset: 3 }}>Username</Label>
            <Col sm={4}>
              <Input
                type='username'
                name='username'
                id='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password" sm={{ size: 2, offset: 3 }}>Password</Label>
            <Col sm={4}>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="password_confirmation" sm={{ size: 2, offset: 3 }}>Password</Label>
            <Col sm={4}>
              <Input
                type='password'
                name='password_confirmation'
                id='password_confirmation'
                placeholder='Password Confirmation'
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                />
            </Col>
          </FormGroup>

          <FormGroup check>
            <Col sm={{ size: 8, offset: 5 }}>
              <Input
                type='checkbox'
                name='remember_me'
                id='remember_me'
                value={this.state.remember_me}
                onChange={this.handleChange}
                />
              <Label for="remember_me" check>Remember Me</Label>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={{ size: 8, offset: 5 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
