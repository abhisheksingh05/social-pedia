import React, { Component } from 'react'

import { Navbar, Nav, Form, FormControl, Button
, Dropdown} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import './nav-bar.scss';
import isLoggedIn from '../../isLoggedIn';

export class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  logOutHandler(){
    sessionStorage.removeItem('user');
  }
  render() {
    let login_SignUpBtn, UserButton;
    if (!isLoggedIn()) {
      login_SignUpBtn =<>
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
      <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link>
      </> 
    } else {
      UserButton = <>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            User
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.logOutHandler}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    }
    return (
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">SocialPedia</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {login_SignUpBtn}
          {/* <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
          <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link> */}
      </Nav>
      {UserButton}
    </Navbar>
    );
  }
}


export default NavBar;
