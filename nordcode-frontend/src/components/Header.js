import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
        <Navbar.Brand href="/">NordCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
