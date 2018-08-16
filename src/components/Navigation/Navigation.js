import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav-1.svg";
import { Route,Link } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';


class Navigation extends Component {

    state = {
      loggedUser: 'Mike Apple'
    }
    
    render() {

    
        return(

        <Navbar  fluid className="navContainer">
          <Navbar.Header>
            <Navbar.Brand className="navBrandLogo">
              <a href="#brand"><img src={logo} className="imgLogo"/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav>
              <NavItem eventKey={1} href="#" className="navItem">
                <p className="navText">Summary</p>
              </NavItem>
              <NavItem eventKey={2} href="#" className="navItem" >
                <p className="navText">Journeys</p>
              </NavItem>
              <NavItem eventKey={2} href="#" className="navItem">
               <p className="navText">Products</p>
              </NavItem>
              <NavItem eventKey={2} href="#" className="navItem">
               <p className="navText">Quarterly</p>
              </NavItem>
            
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} className="dropDownContainer" title={this.state.loggedUser} id="nav-dropdown">
                <MenuItem eventKey={3.1}>Log Out</MenuItem>
                <MenuItem eventKey={3.2}>Settings</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default (Navigation);