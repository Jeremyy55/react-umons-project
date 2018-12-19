import React, { Component } from "react";
import "./Header.css";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">TAPADKOT?</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Housing
          </NavItem>
          <NavItem eventKey={2} href="#">
            Invite a member
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="my account" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
