import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginPostFetch} from '../../actions/auth';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.loginPostFetch(this.state)
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div class="auth_form">
        <Form onSubmit={this.handleSubmit}>
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
  loginPostFetch: userInfo => dispatch(loginPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
