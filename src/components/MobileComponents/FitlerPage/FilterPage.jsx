import React, { Component } from 'react';
import styles from './FilterPage.css';
import * as _ from 'lodash';
import * as actions from 'actions';
import { connect } from 'react-redux';
import DropDownFilter from './components/DropDownFilter.jsx';
import classNames from 'classnames';
import { Button } from '@progress/kendo-react-buttons';

import {
    PRIMARY,
    MOBILE_FILTER_PAGE
} from '../../../Constants/consts';
import SingleValueSelect from '../../SingleValueSelect/SingleValueSelect';
import MultiValueSelect from '../../MultiValueSelect/MultiValueSelect';
class FilterPage extends Component {

    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            showContainer: this.props.showContainer,
            selectedFilters: [],
            activeDataFilters: [],
        }
    }
    //Remove a filter from the top portion list
    removeFilter(filterToRemove) {
        this.props.removeMultiFilter(filterToRemove);
    }
    closeSingleValue = (e) => {
        // console.log('Closing Single Value',e);
    }
    closeMultiValue = (e) => {
        // console.log('Closing Multivalue',e);
    }
    generateFilterList = (filterList) => {

        let filterObjectList = Object.keys(filterList).map((ele) => { return filterList[ele]; });
        let arrs = filterObjectList.map((ele) => { return ele; }) // combine the arrays
        let items = _.uniq(_.flatten(arrs)); // flatten the array
        let allDataRemoved = items.map((ele) => {
            if (ele.value !== 'All Data') { return ele }
        });

        return _.pull(allDataRemoved, undefined);
    }

    // when a drop down is selected
    updateActiveFiltersHandler = (e) => {
        this.props.addValueToActiveMultiFilter(e.target.value);
    }
    updateSingleValue = (e) => {
        // console.log('Updating SingleValue',e);
        let copy = this.state.selectedFilters;
        if (this.state.selectedFilters.length === 0) {
            this.setState({ selectedFilters: [e] })
        } else {

            //Find any with the same category
            _.remove(copy, item => { return item.category === e.category });
            _.remove(copy, item => { return item.index === e.index });
            if (copy.length === 0) {
                this.setState({ selectedFilters: [e] })
            } else {
                this.setState({ selectedFilters: [...copy, e] })

            }

        }

    }
    updateMultiValue = (e, type) => {
        // console.log('Updating MultiValue',e,type);
        let copy = this.state.selectedFilters;
        if (e.length === 0) {
            _.remove(copy, item => { return item.category === type });
            this.setState({ selectedFilters: [...copy] })


        } else {
            _.remove(copy, item => { return item.category === e[0].category });
            this.setState({ selectedFilters: [...copy, ...e] })

        }


    }

    submitFilters = (e) => {
        // console.log('Submitting Filters . . . ');

        let newFilters = {
            quarters: [],
            segments: [],
            products: [],
            markets: [],
            routes: [],
            subscriptions: [],
            geos: []
        };

        Object.keys(newFilters).forEach(item => {

            switch (item) {
                case 'quarters':
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === 'quarters' })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === 'quarters' }))] : /* Else */
                        [...this.props.filters.quarters.valueFilters];
                    break;
                case 'segments':
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === 'segments' })) ?
                        [_.find(this.state.selectedFilters, (item => { return item.category === 'segments' }))] :
                        [...this.props.filters.segments.valueFilters];
                    break;
                default:
                    let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category === item }));
                    // console.log(grouped);
                    if (grouped.false !== this.state.selectedFilters.length) {

                        if (grouped.true !== undefined) {
                            newFilters[item] = grouped.true
                        } else {
                            newFilters[item] = [];
                        }
                    } else {
                        newFilters[item] = [];
                    }
                    break;
            }

        });


        this.setState({ selectedFilters: [] })
        // this.props.handleClose();
        this.props.updateViewSetting(MOBILE_FILTER_PAGE, false);

        this.props.submitFilters(newFilters);
        //  this.props.getSummaryData(newFilters);

    }
    render() {
        let { filters } = this.props;
        const filtersApplied = this.generateFilterList(filters.combined.valueFilters);
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        return (
            <div className="filterMobileContainer" >

                <div className="filterMobilePillsContainer">
                    <ul className="filterListMobile">
                        {filters.combined.valueFilters.map((item) => {
                            return <li key={item.index} /* onClick={(e) => this.removeFilter(item)} */ className="filterListMobileLi">{item.value}</li>
                        })}
                    </ul>
                </div>

                <div className="filterMobileDropDownContainer">
                    <div className="dropdowns contentpad">
                        {/* first row */}
                        <div className="row dropRow">
                            <div className="col-lg-6 col-md-6">
                                <p>Quarter</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.quarters}/> */}
                                <SingleValueSelect
                                    activeFilters={filters.quarters.valueFilters}
                                    options={filters.quarters.availableFilters}
                                    onValueChange={this.updateSingleValue}
                                    onMenuClose={this.closeSingleValue}
                                />                                        </div>
                            <div className="col-lg-6 col-md-6">
                                <p>Geo</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.geos}/> */}
                                <MultiValueSelect
                                    options={filters.geos.availableFilters}
                                    onValueChange={(e) => { let type = 'geos'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                />                                        </div>
                        </div>

                        <div className="row dropRow">
                            <div className="col-lg-6 col-md-6">
                                <p>Product name</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.products}/> */}
                                <MultiValueSelect
                                    options={filters.products.availableFilters}
                                    onValueChange={(e) => { let type = 'products'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                />                                        </div>
                            <div className="col-lg-6 col-md-6">
                                <p>Subscription Offering</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} /> */}
                                <MultiValueSelect
                                    options={filters.subscriptions.availableFilters}
                                    onValueChange={(e) => { let type = 'subscriptions'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                />                                        </div>
                        </div>
                        {/* third row */}
                        <div className="row dropRow">
                            <div className="col-lg-6 col-md-6">
                                <p>Market Area</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                <MultiValueSelect
                                    options={filters.markets.availableFilters}
                                    onValueChange={(e) => { let type = 'markets'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    values={_.groupBy(this.state.selectedFilters, (item => { return item.category === 'markets' }))}
                                />                                        </div>
                            <div className="col-lg-6 col-md-6">
                                <p>Route to Market</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.routeToMarkets}/> */}
                                <MultiValueSelect
                                    options={filters.routes.availableFilters}
                                    onValueChange={(e) => { let type = 'routes'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                />                                        </div>
                        </div>
                        {/* fourth row */}
                        <div className="row dropRow">
                            <div className="col-lg-6 col-md-6">
                                <p>Segment</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.segments}/> */}
                                <SingleValueSelect
                                    activeFilters={filters.segments.valueFilters}
                                    options={filters.segments.availableFilters}
                                    onValueChange={this.updateSingleValue}
                                    onMenuClose={this.closeSingleValue}
                                />                                    </div>
                            <div className={' col-lg-12'}>
                                <Button class="button" primary={true} onClick={this.submitFilters} look="flat">Submit</Button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, actions)(FilterPage);