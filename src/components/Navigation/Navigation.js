// Npm Modules
import React, { Component } from "react";
import { Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import { Expand } from "@progress/kendo-react-animation";
import { withAuth } from "@okta/okta-react";
import { checkAuthentication } from "../../helper";
import {
  MOBILE_FILTER_PAGE
} from "../../Constants/consts.js";
import styles from "./Navigation.css";


import logo from "../../assets/images/adobe-logo-nav-1.svg";
import userIcon from "./user-icon.svg";
import filterUnselected from "./assets/filter-unselected.svg";
import filterSelected from "./assets/filter-selected.svg";
import commentIconOff from "./assets/images/comment-icon-off.svg";
import commentIconOn from "./assets/images/comment-icon-on.svg";

import * as utils from '../../utilities';

// Redux
import { connect } from "react-redux";
import * as actions from "actions";


import CompanyHeader from './CompanyHeader.js';
import UserNav from './UserNav.js';
class Navigation extends Component {
  //When the component is constructed
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      show: false,
      activeTab: "tab1",
      dataPrefDialogVisible: this.props.dialogIsOpen,
      commentsAreActive: false,
      authenticated: null,
      isFilterPageVisible: false,
    };
    //Binding functions to this
    this.checkAuthentication = checkAuthentication.bind(this);
    this.showLogo = this.showLogo.bind(this);
    this.updateCommentsNav = this.updateCommentsNav.bind(this);
    this.showLogo();
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }
  onFilterToggled = e => {
    const toggleState = !this.state.isFilterPageVisible;
    this.setState({ isFilterPageVisible: toggleState });
    this.props.updateViewSetting(MOBILE_FILTER_PAGE, toggleState);
  };
  // Function to show the logo after 1 second
  showLogo = () => {
    this.timeout = setTimeout(() => {
      this.setState({
        show: true
      });
    }, 1000);
  };
  //Event handler for setting the active tab
  // Dictates the style for the chosen tab
  selectedNavItem(e, tab) {
    e.preventDefault();
    switch (tab) {
      case "tab1":
        // do something
        this.setState({ activeTab: "tab1" });
        break;
      case "tab2":
        // do something
        this.setState({ activeTab: "tab2" });
        break;
      case "tab3":
        // do something
        this.setState({ activeTab: "tab3" });
        break;
      case "tab4":
        // do something
        this.setState({ activeTab: "tab4" });
        break;
      default:
        // do something
        this.setState({ activeTab: "" });
        break;
    }
  }

  onDataPreferencesSelcted() {
    this.props.updateDialogVisibility(true);
  }
  updateCommentsNav() {
    let toggle = this.props.toggleCommentaryOn;
    this.props.toggleCommentBox(!toggle);
  }

  processLoggedUser = _user => {
    if (Object.keys(_user).length !== 0) {
      return _user.name;
    }
  };

  render() {

    
    const isLaptop = utils.includes( this.props.deviceType, 'laptop');
    const filterIcon = this.props.isFilterPageVisible
      ? filterSelected
      : filterUnselected;
    const { show } = this.state;
    const logos = show ? <img alt="" src={logo} className="imgLogo" /> : null;
    const { activeTab } = this.state;


    return (
      <Navbar fluid className="navContainer">
        {/* The responseive company logo and */}
        <CompanyHeader 
        deviceType={this.props.deviceType}
        isFilterPageVisible={this.state.isFilterPageVisible}
        show={show}
        filterIcon={filterIcon}
        onFilterToggled={(e)=>{this.onFilterToggled(e)}}
        logos={logos}
        />

        <UserNav
        isLaptop={isLaptop}
        onDataPreferencesSelcted={(e)=>{this.onDataPreferencesSelcted(e)}}
        username={this.processLoggedUser(this.props.user || " ")}
        logout={()=>{ this.props.auth.logout("/summary");}}
        filterIcon={filterIcon}
        toggleCommentaryOn={this.props.toggleCommentaryOn}
        updateCommentsNav={this.updateCommentsNav}
        onFilterToggled={(e)=>{this.onFilterToggled(e)}}
        />
        
          
          
      </Navbar>
    );
  }
}

function maptStateToProps(state) {
  return {
    dialogIsOpen: state.dialogIsOpen,
    commentBoxIsOpen: state.commentBoxIsOpen,
    toggleCommentaryOn: state.toggleCommentaryBox,
    user: state.user,
    deviceType: state.appSettings.deviceType
  };
}

export default connect(
  maptStateToProps,
  actions
)(withAuth(Navigation));