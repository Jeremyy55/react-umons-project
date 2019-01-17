import React, { Component } from "react";
//import Auth from "./Auth/Auth.js";

import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

//const auth = new Auth();

class Header extends Component {
  /*why??*/
  //history = this.props.history;
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  getProfile() {
    this.props.auth.getProfile();
  }
  componentDidMount() {
    const { renewSession } = this.props.auth;
    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    let { isAuthenticated } = this.props.auth;

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
          {isAuthenticated() && (
            <Nav>
              <NavItem eventKey={1} href="#">
                <Link to="/newKot">
                  <span style={{ color: "white" }}>Logements</span>
                </Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <span style={{ color: "white" }}>Invite un Membre</span>
              </NavItem>
            </Nav>
          )}

          <Nav pullRight>
            <NavDropdown
              eventKey={3}
              title="mon compte"
              id="basic-nav-dropdown"
            >
              {!isAuthenticated() && (
                <MenuItem
                  eventKey={3.1}
                  onSelect={() => {
                    //window.alert("haha");
                    this.login();
                  }}
                >
                  Connection
                </MenuItem>
              )}
              {isAuthenticated() && (
                <MenuItem
                  eventKey={3.1}
                  onSelect={() => {
                    //window.alert("haha");
                    this.logout();
                  }}
                >
                  Déconnection
                </MenuItem>
              )}

              <MenuItem
                eventKey={3.2}
                onSelect={() => {
                  let myProfile = this.getProfile();
                  window.alert(myProfile);
                  //this.goTo("home");
                }}
              >
                empty
              </MenuItem>
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
