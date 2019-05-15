import React, { Component } from 'react';
import styles from './FilterPage.css';
import * as _ from 'lodash';
import * as actions from 'actions';
import { connect } from 'react-redux';
import DropDownFilter from './components/DropDownFilter.jsx';
import classNames from 'classnames';
import { Button } from '@progress/kendo-react-buttons';
import { DIMENSIONS } from '../../../Constants/consts';

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
      const { GEO,
            MARKET,
            PRODUCT,
            SEGMENT,
            SUBSCRIPTION,
            QUARTER,
            ROUTE,
            VISITSTATUS,
            SIGNSOURCE,
            SIGNAPP,
            PRODUCTCAT,
            WEBSEGMENT,
            PVW,
            CATEGORY,
            LTC,
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;
        let newFilters = {
            quarter: [],
            segment: [],
            product: [],
            market: [],
            route: [],
            subscription: [],
            geo: []
        };

        Object.keys(newFilters).forEach(item => {

            switch (item) {
                case QUARTER:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === QUARTER })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === QUARTER }))] : /* Else */
                        [...this.props.filters.quarter.valueFilters];
                    break;
                case SEGMENT:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === SEGMENT })) ?
                        [_.find(this.state.selectedFilters, (item => { return item.category === SEGMENT }))] :
                        [...this.props.filters.segment.valueFilters];
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
        const { GEO,
            MARKET,
            PRODUCT,
            SEGMENT,
            SUBSCRIPTION,
            QUARTER,
            ROUTE,
            VISITSTATUS,
            SIGNSOURCE,
            SIGNAPP,
            PRODUCTCAT,
            WEBSEGMENT,
            PVW,
            CATEGORY,
            LTC,
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;
        const filtersApplied = this.generateFilterList(filters.combined.valueFilters);
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        return (
            <div className="filterMobileContainer" >

                <div className="filterMobilePillsContainer">
                    <ul className="filterListMobile">
                        {filters.combined.valueFilters.map((item) => {
                            return <li key={item.index}  className="filterListMobileLi">{item.value}</li>
                        })}
                    </ul>
                </div>

                <div className="filterMobileDropDownContainer">
                    <div className="dropdowns contentpad">
                        {/* first row */}
                        <div className="row dropRow">
                            <div className="col-xs-12 col-sm-6 col-md-4 ">
                                <p>Quarter</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.quarter}/> */}
                                <SingleValueSelect
                                    activeFilters={filters.quarter.valueFilters}
                                    options={filters.quarter.availableFilters}
                                    onValueChange={this.updateSingleValue}
                                    onMenuClose={this.closeSingleValue}
                                />                                        </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 ">
                                <p>Geo</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.geo}/> */}
                                <MultiValueSelect
                                    options={filters.geo.availableFilters}
                                    onValueChange={(e) => { let type = 'geo'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                />                                        </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <p>Market Area</p>
                                {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                <MultiValueSelect
                                    options={filters.market.availableFilters}
                                    onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    values={_.groupBy(this.state.selectedFilters, (item => { return item.category === MARKET }))}
                                />                                        </div>

                            <div className={'col-xs-12 col-sm-6 col-md-6'}>
                                <Button className="button" primary={true} onClick={this.submitFilters} look="flat">Submit</Button>
                            </div>
                        </div>

                        <div className="row dropRow">


                        </div>
                        {/* third row */}
                        <div className="row dropRow">


                        </div>
                        {/* fourth row */}
                        <div className="row dropRow">


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