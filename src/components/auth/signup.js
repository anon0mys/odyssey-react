import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../../actions/auth';

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
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Email</label>
        <input
          name='email'
          placeholder='your@email.com'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Password Confirmation</label>
        <input
          type='password'
          name='password_confirmation'
          placeholder='Password Confirmation'
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          /><br/>

        <label>Remember Me</label>
        <input
          type='checkbox'
          name='remember_me'
          value={this.state.remember_me}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
