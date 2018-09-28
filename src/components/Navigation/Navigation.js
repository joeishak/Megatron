// Npm Modules
import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import {Nav,  Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import {  Expand, } from '@progress/kendo-react-animation';
import classNames from 'classnames';
// Custom Components and Styles
import App from '../../Views/App.js';
import userIcon from './user-icon.svg';
import styles from './Navigation.css';
import logo from "../../assets/images/adobe-logo-nav-1.svg";
import commentsOn from "../../assets/images/comments-on.png";

import { DataPreferenceDialog } from './Components/DataPreferences/DataPreferenceDialog.js';

// Redux
import {connect } from 'react-redux';
import * as actions from 'actions';

class Navigation extends Component {
      

    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
          loggedUser: 'J. Summerson',
          show: false,
          activeTab: 'tab1',
          dataPrefDialogVisible: this.props.dialogIsOpen,
          commentsAreActive: false
        }
        //Binding functions to this
        this.showLogo = this.showLogo.bind(this);
        this.updateCommentsNav  = this.updateCommentsNav.bind(this);
        this.showLogo();
    }

    // Function to show the logo after 1 second
    showLogo = () => {
      this.timeout = setTimeout(() => { 
        this.setState({
          show: true
      });
      }, 1000);
    }

    //Event handler for setting the active tab
    // Dictates the style for the chosen tab
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
    }

    onDataPreferencesSelcted () {
      let dialogState = this.state.dataPrefDialogVisible;

      this.setState({dataPrefDialogVisible: !dialogState}, () => {
        this.props.updateDialogVisibility(this.state.dataPrefDialogVisible);
      });
    }
    updateCommentsNav(){
      // switch(this.props.commentBoxIsOpen){
      //   case true:
      //   // this.props.hideCommentBox();
      //   this.props.toggleCommentBox(false);
      //   break;
      //   case false:
      //   // this.props.showCommentBox();
      //   this.props.toggleCommentBox(true);
      //   break;
      // }
      let toggle = this.props.toggleCommentaryOn;
      this.props.toggleCommentBox(!toggle);
    }
    
    render() {

      //local constants for showing the logo with an animation 
      const { show } = this.state;
      const logos = show ? (<img src={logo} className="imgLogo"/>) : null;
      
      const { activeTab } = this.state;
    
      let commentsNavigationItem = classNames({
        roundButton: true,
        commentsOff: (this.props.toggleCommentaryOn) ? false : true,
        commentsOn: (this.props.toggleCommentaryOn) ? true : false,

        
      }) 
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
              <li className={`navItem ${activeTab === 'tab1' ? 'selected' : ''}`} 
                onClick={e => this.selectedNavItem(e, 'tab1')}>
                <Link  to="/summary" className="navText">
                <div >
                Summary</div>
                </Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab2' ? 'selected' : ''}`} 
                onClick={e => this.selectedNavItem(e, 'tab2' )} >
                <Link  to="/journeys" className="navText">
                <div  >
                Journeys</div></Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab3' ? 'selected' : ''}`} 
                onClick={e => this.selectedNavItem(e, 'tab3')}>
                <Link  to="/products" className="navText">
                <div >
                Products</div>
                </Link>
                <Route path = "/post" component ={App} />
              </li>
              <li className={`navItem ${activeTab === 'tab4' ? 'selected' : ''}`} 
                onClick={e => this.selectedNavItem(e, 'tab4')}>
                <Link  to="/quarterly" className="navText">
                <div >
                Quarterly</div>
                </Link>
                <Route path = "/post" component ={App} />
              </li>

            </ul>
          
            <Nav pullRight>
            <div className="dropDownContainerBox">
              <div className="flLeft">
                  <NavDropdown eventKey={3} className="dropDownContainer" title={this.state.loggedUser} id="nav-dropdown" noCaret>
                      <MenuItem eventKey={3.1}>Account Settings</MenuItem>
                      <MenuItem eventKey={3.2} onClick={e => this.onDataPreferencesSelcted(e)}>Data Preferences</MenuItem>
                      <MenuItem eventKey={3.3}>Log Out</MenuItem>

                  </NavDropdown>
              </div>
              <div className="flLeft"><img className="userIcon" src={userIcon}/></div>
              <div className='flRight'> 
                <a className={commentsNavigationItem} onClick={this.updateCommentsNav}>
                  <div className="redicon"></div>
                  <div className="redicontext">
                  </div>
                </a>
              </div>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}

function maptStateToProps(state) {
  return {
    dialogIsOpen: state.dialogIsOpen,
    commentBoxIsOpen: state.commentBoxIsOpen,
    toggleCommentaryOn: state.toggleCommentaryBox
  }
}

export default connect(maptStateToProps, actions) (Navigation);