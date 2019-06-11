// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Custom Components and Styles
import addIcon from '../../../assets/images/add-icon-white.svg';
import checkIcon from '../../../assets/images/check.svg';
import cancel from '../../../assets/images/cancel.svg';

import * as actions from 'actions';
import FilterPillBox from '../FilterPillBox/FilterPillBox.js';
import styles from './FilterBarHeader.css';

class FilterBarHeader extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            filterButtonTitle: 'View Filters',
            filterBarArr: [],
            totalFilterPills: 0
        }
    }

    // Function that renders the Filter Pills
    renderFilterPills() {
        // As long as there is an active filter
        let filters = this.props.filters
        let filterBarArr = [];
        filters.quarter.valueFilters.forEach(item => {
            filterBarArr.push(item);
        });
        if (filterBarArr.length > 0) {
            // Return this 
            return (
                //For each active filter, return a Filter Pill Box Component mapped to the filter
                filterBarArr.map(filter => {
                    if (filter !== undefined) {

                        return <FilterPillBox key={this.state.totalFilterPills++} data={filter} />
                    } else return <span />
                })
            )
        }
        else return null;
    }

    changeFilterPanelStatus = () => {
        this.props.handleNewFilterClick();
        if (this.props.filterPanelIsOpen) {
            this.setState({
                filterButtonTitle: 'View Filters',
            });
        } else {
            this.setState({
                filterButtonTitle: 'Hide Filters ',
            });
        }
    }

    render() {
        var newFilterButtonClass = classNames({
            newFilterButton: true,
            'newFilterButton-selected': this.props.filterPanelIsOpen,
            'newFilterButton-close': !this.props.filterPanelIsOpen
        });

        return (
            <div className="filterContainer container-fluid row">
                <div className="pillsContainer col-8">
                    {/* {this.renderFilterPills()} */}
                </div>
                <div className="newFilterStateDiv col-2">
                    <div
                        onClick={this.changeFilterPanelStatus}
                        className={newFilterButtonClass} >{this.props.filterPanelIsOpen ? <div className="cancelIcon"  /> : 'View Filters'}</div>

                </div>

               

            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        filters: state.filters,
        preferences: state.preferences,
    };
}

export default connect(mapStateToProps, actions)(FilterBarHeader)