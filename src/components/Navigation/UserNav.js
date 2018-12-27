import * as utils from '../../utilities';
import React, { Component } from "react";
import { Navbar , MenuItem, NavDropdown} from "react-bootstrap";
import { Expand } from "@progress/kendo-react-animation";
import commentIconOff from "./assets/images/comment-icon-off.svg";
import commentIconOn from "./assets/images/comment-icon-on.svg";
import userIcon from "./user-icon.svg";

 const UserNav = ({isLaptop,onDataPreferencesSelcted,logout,filterIcon,
                 toggleCommentaryOn,onFilterToggled,username,updateCommentsNav}) => {

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

              <div className="flRight">
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


            </div>
          </span>
      </Navbar.Collapse> :

      //Mobile View
            <div className="filterIconContainer">
                <img
                  className="filterIcon"
                  src={filterIcon}
                  onClick={onFilterToggled}
                />
            </div> 
                
  );
}

export default UserNav