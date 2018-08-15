import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav-1.svg";
import { Route,Link } from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';
class Navigation extends Component {

    
    render() {
       
        return(
        //     <nav className="navContainer navbar navbar-expand-lg navbar-dark bg-dark" >
        //     <a className="navbar-brand" href="#">
        //       <img className="imgLogo" src={logo}  />
        //     </a>
        //     <ul>
        //         <li> 
        //         <Link to="/">Summary</Link>
        //         </li>
        //         <li>
        //         <Link to="/">Journeys</Link>
        //         </li>
        //         <li>
        //         <Link to="/">LoremIpsum</Link>
        //         </li>
        //         <li>
        //         <Link to="/">Dolorsit</Link>
        //         </li>
        //     </ul>
        //   </nav>

        

        <Nav className="navContainer" bsStyle="pills" activeKey={1} >
            <NavItem className="navBrandLogo" eventKey={1} href="/home">
                <a className="navbar-brand " href="#">
                    <img className="imgLogo" src={logo}  />
                </a>
            </NavItem>
            <NavItem className="navItem" eventKey={2} title="Item">
            Summary
            </NavItem>
            <NavItem className="navItem" eventKey={3} disabled>
            Journeys
            </NavItem>
        </Nav>
        );
    }
}

export default (Navigation);