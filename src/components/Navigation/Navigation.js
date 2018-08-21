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
      show: false,
      activeTab: 'tab1'
    }


    showLogo = () => {
      this.timeout = setTimeout(() => { 
        this.setState({
          show: true
      });
      }, 1000);
    }

    selectedNavItem (e, tab) {
      e.preventDefault();
      switch(tab) {
        case 'tab1':
          // do something
          this.setState({activeTab: 'tab1'});
          break;
        case 'tab2':
          // do something
          this.setState({activeTab: 'tab2'});
          break;
        case 'tab3':
          // do something
          this.setState({activeTab: 'tab3'});
          break;
        case 'tab4':
          // do something
          this.setState({activeTab: 'tab4'});
          break;
        default:
          // do something
          this.setState({activeTab: ''});
          break;
      }
      // console.log(index);
      // e.preventDefault();
      // this.setState({
      //   isSelected: !this.state.isSelected
      // })
    }

    
    render() {

      const { show } = this.state;
      const logos = show ? (<img src={logo} className="imgLogo"/>) : null;

      const { activeTab } = this.state;
    
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
              <li className={`navItem ${activeTab === 'tab1' ? 'selected' : ''}`} onClick={e => this.selectedNavItem(e, 'tab1')}>
                <Link  to="/summary" className="navText">Summary</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab2' ? 'selected' : ''}`} onClick={e => this.selectedNavItem(e, 'tab2' )} >
                <Link  to="/journeys" className="navText">Journeys</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab3' ? 'selected' : ''}`} onClick={e => this.selectedNavItem(e, 'tab3')}>
                <Link  to="/products" className="navText">Products</Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab4' ? 'selected' : ''}`} onClick={e => this.selectedNavItem(e, 'tab4')}>
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