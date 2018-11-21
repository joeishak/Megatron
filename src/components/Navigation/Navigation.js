// Npm Modules
import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import {Nav,  Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import {  Expand, } from '@progress/kendo-react-animation';
import classNames from 'classnames';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helper';

import App from '../../Views/App/App.js';
import styles from './Navigation.css';

// Images Imports, Adobe Logo, User Icon, CommentIcon ON, CommentsIcon Off

import logo from "../../assets/images/adobe-logo-nav-1.svg";
import userIcon from './user-icon.svg';
import commentIconOff from './assets/images/comment-icon-off.svg';
import commentIconOn from './assets/images/comment-icon-on.svg';

import profilePic from "./assets/images/amit-profile.png";



// Redux
import {connect } from 'react-redux';
import * as actions from 'actions';

class Navigation extends Component {
      

    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
          show: false,
          activeTab: 'tab1',
          dataPrefDialogVisible: this.props.dialogIsOpen,
          commentsAreActive: false,
          authenticated: null
        }
        //Binding functions to this
        this.checkAuthentication = checkAuthentication.bind(this);
        this.showLogo = this.showLogo.bind(this);
        this.updateCommentsNav  = this.updateCommentsNav.bind(this);
        this.logout = this.logout.bind(this);
        this.showLogo();
    }

    async componentDidMount() {
      this.checkAuthentication();
    }
  
    async componentDidUpdate() {
      this.checkAuthentication();
    }
    async logout() {
      this.props.auth.logout('/');
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
      
        this.props.updateDialogVisibility(true);
    }
    updateCommentsNav(){
      let toggle = this.props.toggleCommentaryOn;
      this.props.toggleCommentBox(!toggle);
    }

    processLoggedUser = (_user) => {
      if (Object.keys(_user).length !== 0) {
        return _user.name;
      }       
    }
    navToggle = (e) => {
      console.log('toggled');
      // if mobile view show filter screen and hide NavbarCollapse, else function as a toggle.
    }
    
    render() {
      //local constants for showing the logo with an animation 
      const { show } = this.state;
      const logos = show ? (<img alt="" src={logo} className="imgLogo"/>) : null;
      const { activeTab } = this.state;
      const filterButton = (this.props.deviceType === 'tablet' || this.props.deviceType === 'mobile' ? <div className="k-float-right"><button>FILTER</button></div>);
    
        return(

        <Navbar  fluid className="navContainer">
          <Navbar.Header>
            <Navbar.Brand className="navBrandLogo">
              <div href="#brand" style={{width: 130}}><Expand>{logos}</Expand></div>
            </Navbar.Brand>
            <Navbar.Toggle onClick={e => this.navToggle(e)}/>

          </Navbar.Header>
          <Navbar.Collapse >  
            <ul className="nav navbar-nav">
              <li className={`navItem ${activeTab === 'tab1' ? 'selected' : ''}`} 
                onClick={e => this.selectedNavItem(e, 'tab1')}>
                <Link  to="/" className="navText">
                <div >
                Summary</div>
                </Link>
                <Route path = "/post" component ={App} />
              </li>
            </ul>
            <Nav pullRight>
            <div className="dropDownContainerBox">
              <div className="flLeft">
                  <NavDropdown eventKey={3} className="dropDownContainer" title={this.processLoggedUser(this.props.user) || ""} id="nav-dropdown" noCaret>
                      <MenuItem eventKey={3.1}>Account Settings</MenuItem>
                      <MenuItem eventKey={3.2} onClick={e => this.onDataPreferencesSelcted(e)}>Data Preferences</MenuItem>
                      <MenuItem eventKey={3.3} onClick={this.logout}>Log Out</MenuItem>
                  </NavDropdown>
              </div>
              <div className="flLeft"><img alt="" className="userIcon" src={userIcon}/></div>

              <div className='flRight'> 

                <img alt="" className="commentIcon" onClick={this.updateCommentsNav} src={!this.props.toggleCommentaryOn ? commentIconOff : commentIconOn}/>
              </div>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}

function maptStateToProps(state) {
  console.log(state);
  return {
    dialogIsOpen: state.dialogIsOpen,
    commentBoxIsOpen: state.commentBoxIsOpen,
    toggleCommentaryOn: state.toggleCommentaryBox,
    user: state.user,
    deviceType: state.appSettings.deviceType
  }
}

export default connect(maptStateToProps, actions)(withAuth(Navigation));