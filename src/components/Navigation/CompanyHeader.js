import * as utils from '../../utilities';
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Expand } from "@progress/kendo-react-animation";


 const CompanyHeader = ({deviceType,filterIcon, isFilterPageVisible, show, onFilterToggled,logos}) => {
   
    const filterButton =utils.includes(deviceType, 'tablet') || utils.includes(deviceType, 'mobile') ? (
        <div className="filterButton">
          <img
            alt=""
            className="fitlerIconMobile"
            src={filterIcon}
            onClick={onFilterToggled}
          />
        </div>
      ) : null;


    return ( <Navbar.Header>
    <Navbar.Brand className="navBrandLogo">
      <div href="#brand" style={{ width: 130 }}>
        <Expand>{logos}</Expand>
      </div>
    </Navbar.Brand>
    {filterButton}
  </Navbar.Header>
  );
}

export default CompanyHeader;