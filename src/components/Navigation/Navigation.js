import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav.svg";
class Navigation extends Component {

    
    render() {
       
        return(
            <nav className="navContainer navbar navbar-expand-lg navbar-dark bg-dark" >
            <a className="navbar-brand" href="#">
              <img className="imgLogo" src={logo}  />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <p className="navText navbar-text" >OCF - DMe GTM Running the Business</p>
                <br />
                <h5 className="white">SUMMARY</h5>
            </div>
          </nav>
        );
    }
}

export default (Navigation);