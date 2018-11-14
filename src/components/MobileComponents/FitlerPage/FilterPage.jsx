import React, { Component } from 'react';
import styles from './FilterPage.css';
import * as _ from 'lodash';
import * as actions from 'actions';
import {connect } from 'react-redux';
import KendoDropDownList from '../../KendoDropDownList/KendoDropDownList.js';

// components
import DropDownFilter from './components/DropDownFilter.jsx';

class FilterPage extends Component {

    //Remove a filter from the top portion list
    removeFilter (filterToRemove) {
        this.props.removeMultiFilter(filterToRemove);
    }

    generateFilterList = (filterList) => {

        let filterObjectList = Object.keys(filterList).map((ele) => { return  filterList[ele]; });
        let arrs = filterObjectList.map( (ele) => { return ele; }) // combine the arrays
        let items =  _.uniq(_.flatten(arrs)); // flatten the array
        let allDataRemoved = items.map((ele) => {
            if (ele.value !== 'All Data') { return ele }
        });

        return _.pull(allDataRemoved, undefined);
    }

    // when a drop down is selected
    updateActiveFiltersHandler = (e) => {
        this.props.addValueToActiveMultiFilter(e.target.value);
    }

    render () {

        const filtersApplied = this.generateFilterList(this.props.activeFilters);

        return (
            <div className="filterMobileContainer">

                <div className="filterMobilePillsContainer">
                    <ul className="filterListMobile">
                        {filtersApplied.map((item) => {
                            return <li onClick={(e) => this.removeFilter(item)} className="filterListMobileLi">{item.value}</li>
                        })}
                    </ul>
                </div>

                <div className="filterMobileDropDownContainer">
                    <DropDownFilter 
                        title="Quarter" 
                        updateFilter={this.updateActiveFiltersHandler} 
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.quarters}/>
                    <DropDownFilter 
                        title="Geo" 
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.geos}/>
                    <DropDownFilter 
                        title="Product Name" 
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.products}/>
                    <DropDownFilter 
                        title="Subscription Offering" 
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.subscriptionOfferings}/>
                    <DropDownFilter 
                        title="Market Area" 
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.marketAreas}/>
                    <DropDownFilter 
                        title="Route To Market"
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.routeToMarkets}/>
                    <DropDownFilter 
                        title="Segment" 
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters} 
                        options={this.props.availableFilters.segments}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps,actions)(FilterPage);