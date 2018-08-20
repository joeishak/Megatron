import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav-1.svg";
import { Route,Link } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import { Animation, Expand, Fade, Push, Slide, Zoom, Reveal } from '@progress/kendo-react-animation';
import App from '../../Views/App.js';

class Navigation extends Component {
      

    constructor(props) {
        super(props);

        this.showLogo = this.showLogo.bind(this);
        this.showLogo();
    }

    state = {
      loggedUser: 'Mike Apple',
      show: false
    }


    showLogo = () => {
      this.timeout = setTimeout(() => { 
        this.setState({
          show: true
      });
      }, 1000);
    }
    
    render() {

      const { show } = this.state;
      const logos = show ? (<img src={logo} className="imgLogo"/>) : null;

    
        return(

        <Navbar  fluid className="navContainer">
          <Navbar.Header>
            <Navbar.Brand className="navBrandLogo">
              <div href="#brand" style={{width: 130}}><Expand>{logos}</Expand></div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <ul className="nav navbar-nav">
              <li   className="navItem">
                <Link  to="/summary" className=" navText">Summary</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li  className="navItem" >
                <Link  to="/journeys" className="navText">Journeys</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li  className="navItem">
                <Link  to="/products" className="navText">Products</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li   className="navItem">
                <Link  to="/quarterly" className="navText">Quarterly</Link>
                <Route path = "/post" component ={App} />
              </li>

            </ul>
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