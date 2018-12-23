import React, { Component } from "react";

import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar
        class="customNavbar"
        style={{
          marginBottom: "0",
          backgroundColor: "rgb(155, 40, 59)",
          color: "white"
        }}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <span href="#home" style={{ color: "white" }}>
              TAPADKOT?
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <span style={{ color: "white" }}>Housing</span>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <span style={{ color: "white" }}>Invite a member</span>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown
              eventKey={3}
              title="my account"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
