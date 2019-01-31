import * as utils from '../../utilities';
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";


class CompanyHeader extends Component {

  render() {
    const { deviceType, filterIcon, isFilterPageVisible, show, onFilterToggled, logos } = this.props;

    const filterButton = utils.includes(deviceType, 'tablet') || utils.includes(deviceType, 'mobile') ? (
      <div className="filterButton">
        <img
          alt=""
          className="fitlerIconMobile"
          src={filterIcon}
          onClick={onFilterToggled}
        />
      </div>
    ) : null;

    return (<span>
      <Navbar.Brand className="navBrandLogo">
        <div href="#brand" style={{ width: 130 }}>
          {logos}
        </div>
      </Navbar.Brand>
      {filterButton}
    </span>)
  }
}

export default CompanyHeader;