import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class OdysseyNav extends Component {

  loginOrProfile = (currentUser) => {
    if (currentUser) {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/community">Community</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/store">Store</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      )
    } else {
      return(
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      );
    }
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Odyssey</NavbarBrand>
        {this.loginOrProfile(this.props.currentUser)}
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(OdysseyNav);
