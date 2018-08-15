import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav.svg";
import { Route,Link } from 'react-router-dom';

class Navigation extends Component {

    
    render() {
       
        return(
            <nav className="navContainer navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className="navbar-brand" href="#">
              <img className="imgLogo" src={logo}  />
            </a>
            <ul>
                <li> 
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/post">Post a Comment</Link>
                </li>
                
            </ul>
          </nav>
        );
    }
}

export default (Navigation);