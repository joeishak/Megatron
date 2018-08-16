import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav.svg";
import { Route,Link } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
class Navigation extends Component {

    
    render() {
       
        return(

        <Navbar inverse style={{marginBottom: 0, borderRadius:0}} collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Summary
              </NavItem>
              <NavItem eventKey={2} href="#">
                Journeys
              </NavItem>
              <NavItem eventKey={2} href="#">
                Journeys
              </NavItem>
              <NavItem eventKey={2} href="#">
                Journeys
              </NavItem>
            
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="John Doe" id="basic-nav-dropdown">
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