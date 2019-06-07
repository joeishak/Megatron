// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Custom Components and Styles
import addIcon from '../../../assets/images/add-icon-white.svg';
import checkIcon from '../../../assets/images/check.svg';

import * as actions from 'actions';
import FilterPillBox from '../FilterPillBox/FilterPillBox.js';
import styles from './FilterBarHeader.css';

class FilterBarHeader extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            filterButtonTitle: 'Add Filters',
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
                filterButtonTitle: 'Add Filters',
            });
        } else {
            this.setState({
                filterButtonTitle: 'Submit Filters',
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

                <div className="newFilterDiv col-2">
                    <span className="newFilterText" >{this.props.filterPanelIsOpen ? 'Submit Filters' : 'Add Filters'}</span>
                    {this.props.filterPanelIsOpen ?
                        <img
                            src={checkIcon} alt=""
                            className={newFilterButtonClass}
                            onClick={this.changeFilterPanelStatus}></img> :
                        <img
                            src={addIcon} alt=""
                            className={newFilterButtonClass}
                            onClick={this.changeFilterPanelStatus}></img>}

                </div>

                <div className="newFilterDiv col-2">
                    <span
                        className="badge badge-pill badge-primary"
                        style={{ marginTop: '5px', cursor: 'pointer' }}
                        onClick={e => { this.props.resetFilters(this.props.preferences) }}>
                        Reset Filters
                    </span>
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