import React, { Component } from 'react';
import {connect } from 'react-redux';
import  classNames from 'classnames';
import * as actions from 'actions';
import FilterBarHeader from './FilterBarHeader/FilterBarHeader.js';
import FilterPage from "../MobileComponents/FitlerPage/FilterPage.jsx";

import CustomDropDownPanel from './CustomDropDownPanel/CustomDropDownPanel.js';
class FilterPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            filterPanelIsOpen: false,
            showDropDowns: false
        };

        this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
    }
   
    /* Event Handler for the Filter Box to open the filter panel with the drop downs */
    openDialogFilterPanel() {
        // Opening the panel
        if (this.state.filterPanelIsOpen===false) {
        this.setState({ showDropDowns: true });
        this.setState({ filterPanelIsOpen: true });
        } else {
        /* Closing the Panel */
        this.setState({ showDropDowns: false });
        // this.setState({filterPanelIsOpen: false});
        this.time = setTimeout(() => {
            this.setState({ filterPanelIsOpen: false });
        }, 300);
        }
    }
    render(){
        let {activeFilters,filters, availableFilters, mobileFiltersIsShown,window} = this.props;
        const filtersPage = this.props.mobileFiltersIsShown ? (
            <FilterPage
              windowHeight={window.height}
              filters={filters}
              availableFilters={availableFilters}
            />
          ) :  <div>
          <FilterBarHeader handleNewFilterClick={this.openDialogFilterPanel} filterPanelIsOpen={this.state.filterPanelIsOpen} />
          <CustomDropDownPanel
            handleClose={this.openDialogFilterPanel}
            showContainer={this.state.filterPanelIsOpen}
            showSlide={this.state.showDropDowns}
          />
          </div>;
        return(
           filtersPage
        )
    }
}
function mapStateToProps(state) {
    return {
        activeFilters: state.activeFilters,
        filters: state.filters,
        availableFilters: state.availableFilters,
        mobileFiltersIsShown: state.appSettings.views.mobileFilterPageIsVisible
};
}
export default connect(mapStateToProps,actions) (FilterPanel)