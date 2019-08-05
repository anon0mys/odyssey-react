import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import OdysseyNav from './components/universal/navbar';
import Homepage from './components/homepage';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Navbar">
            <OdysseyNav />
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' componenet={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(App);
