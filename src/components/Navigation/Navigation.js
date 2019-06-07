// Npm Modules
import React, { Component } from "react";
import { Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import { withAuth } from "@okta/okta-react";
import { checkAuthentication } from "../../helper";
import {
  MOBILE_FILTER_PAGE
} from "../../Constants/consts.js";
import styles from "./Navigation.css";
import ReactPiwik from 'react-piwik';
import logo from "../../assets/images/adobe-logo-nav.png";
import filterUnselected from "./assets/filter-unselected.svg";
import filterSelected from "./assets/filter-selected.svg";
import * as utils from '../../utilities';
// Redux
import { connect } from "react-redux";
import * as actions from "actions";
// HTML 2 canvas
import CompanyHeader from './CompanyHeader.js';
import UserNav from './UserNav.js';


class Navigation extends Component {
  //When the component is constructed
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      show: false,
    };
    //Binding functions to this
    this.checkAuthentication = checkAuthentication.bind(this);
    this.showLogo();
  }
  async componentDidMount() {
    this.checkAuthentication();
  }
  async componentDidUpdate() {
    this.checkAuthentication();
  }
  onFilterToggled = e => {
   
    this.props.updateViewSetting(MOBILE_FILTER_PAGE, !this.props.mobileFiltersIsShown);
  };
  // Function to show the logo after 1 second
  showLogo = () => {
    this.timeout = setTimeout(() => {
      this.setState({
        show: true
      });
    }, 1000);
  };

  onDataPreferencesSelcted() {
    this.props.updateDialogVisibility(true);
  }
  updateCommentsNav = () => {
    let toggle = this.props.toggleCommentaryOn;
    this.props.toggleCommentBox(!toggle);
  }

  processLoggedUser = _user => {
    if (Object.keys(_user).length !== 0) {
      return _user.name;
    }
  };

  render() {


    const isLaptop = utils.includes(this.props.deviceType, 'laptop');
    const filterIcon = this.props.mobileFiltersIsShown
      ? filterSelected
      : filterUnselected;
    const { show } = this.state;
    const logos = show ? <img alt="" src={logo} className="imgLogo" /> : null;


    return (
      <Navbar fluid className="navContainer">
        {/* The responseive company logo and */}
        <CompanyHeader
          deviceType={this.props.deviceType}
          isFilterPageVisible={this.props.mobileFiltersIsShown}
          isLaptop={isLaptop}
          filterIcon={filterIcon}
          onFilterToggled={(e) => { this.onFilterToggled(e) }}
          logos={logos}
        />

        <UserNav
          isLaptop={isLaptop}
          onDataPreferencesSelcted={(e) => { this.onDataPreferencesSelcted(e) }}
          username={this.processLoggedUser(this.props.user || " ")}
          logout={() => {
            ReactPiwik.push(['resetUserId']);
            this.props.auth.logout("/");
          }}
          filterIcon={filterIcon}
          toggleCommentaryOn={this.props.toggleCommentaryOn}
          updateCommentsNav={this.updateCommentsNav}
          onFilterToggled={(e) => { this.onFilterToggled(e) }}
          onFeedbackClick={(e) => this.props.onFeedbackChange(e)}
          currentRefreshData={this.props.currentRefreshData}
        />
      </Navbar>
    );
  }
}

function maptStateToProps(state) {
  return {
    dialogIsOpen: state.dialogIsOpen,
    toggleCommentaryOn: state.toggleCommentaryBox,
    user: state.user,
    deviceType: state.appSettings.deviceType,
    currentRefreshData: state.currentRefreshDates,
  };
}

export default connect(
  maptStateToProps,
  actions
)(withAuth(Navigation));