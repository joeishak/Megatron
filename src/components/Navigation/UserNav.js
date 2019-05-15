import * as utils from '../../utilities';
import React, { Component } from "react";
import { Navbar, MenuItem, NavDropdown } from "react-bootstrap";
import commentIconOff from "./assets/images/comment-icon-off.svg";
import commentIconOn from "./assets/images/comment-icon-on.svg";
import feedbackIcon from "../../assets/images/feedback.png";

import userIcon from "./user-icon.svg";

const UserNav = ({ isLaptop, onDataPreferencesSelcted, logout, filterIcon,
  toggleCommentaryOn, onFeedbackClick, onFilterToggled, username, updateCommentsNav, currentRefreshData }) => {

  return (
    isLaptop === true ?
      // Desktop View
      <Navbar.Collapse>
        <span className="right-bar-span">
          <div className="dropDownContainerBox">
            <div className="flLeft">
              <NavDropdown
                eventKey={3}
                className="dropDownContainer"
                title={username || ""}
                id="nav-dropdown"
                noCaret
              >
                <MenuItem eventKey={3.1}>Account Settings</MenuItem>
                <MenuItem
                  eventKey={3.2}
                  onClick={onDataPreferencesSelcted}
                >
                  Data Preferences
                  </MenuItem>
                <MenuItem eventKey={3.3} onClick={logout}>
                  Log Out
                  </MenuItem>
              </NavDropdown>
            </div>
            <div className="flLeft">
              <img alt="" className="userIcon" src={userIcon} />
            </div>

            <div className="flLeft">
              {" "}
              <img
                alt=""
                className="commentIcon"
                onClick={updateCommentsNav}
                src={
                  !toggleCommentaryOn
                    ? commentIconOff
                    : commentIconOn
                }
              />{" "}
            </div>
            <div className="flLeft">

              <img
                alt=""
                className="feedbackIcon"
                src={feedbackIcon}
                onClick={onFeedbackClick}
              />

            </div>
            <div className="flLeft" style={{ paddingTop: '10px', paddingLeft: '10px' }}>

              Updated On {currentRefreshData.updatedAsOf.slice(5,7) + '/' + currentRefreshData.updatedAsOf.slice(8,10) }
              <div style={{ borderRadius: '50px', backgroundColor: '#3c3c3c', textAlign: 'center', color: 'white' }}>
                {currentRefreshData.currentQuarterWeek}
              </div>
            </div>
          </div>
        </span>
      </Navbar.Collapse > :

      //Mobile View
      <div className="filterIconContainer">
        <div className="flLeft currentQuarter" style={{  }}>

          <div style={{ borderRadius: '50px', backgroundColor: '#3c3c3c', textAlign: 'center',padding:'5px', color: 'white' }}>
            {currentRefreshData.currentQuarterWeek}
          </div>

        </div>
        <img
          className="filterIcon"
          src={filterIcon}
          onClick={onFilterToggled}
        />
      </div>

  );
}

export default UserNav