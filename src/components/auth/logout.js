import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutDeleteFetch} from '../../actions/auth';

class Logout extends Component {
  componentDidMount(){
    this.props.logoutDeleteFetch()
    localStorage.removeItem("token")
    this.props.history.push("/");
  }

  render() {
    return(
      <div></div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  logoutDeleteFetch: () => dispatch(logoutDeleteFetch())
})

export default connect(null, mapDispatchToProps)(Logout);
