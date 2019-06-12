// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
// Custom Components and Styles
import * as actions from 'actions';
import styles from './CustomDropDownPanel.css';
import { Button } from '@progress/kendo-react-buttons';
import SingleValueSelect from '../../SingleValueSelect/SingleValueSelect';
import MultiValueSelect from '../../MultiValueSelect/MultiValueSelect';

import Picky from "react-picky";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { DIMENSIONS } from '../../../Constants/consts';
import Loading from '../../../Views/Loading/Loading'
import * as _ from 'lodash';
import "react-picky/dist/picky.css";
import filterIcon from '../../../assets/images/filter-solid.svg'
import filterBlackIcon from '../../../assets/images/filter.svg'

// import resetFilterIcon from '../../../assets/images/reset-filter.svg'
import resetFilterIcon from '../../../assets/images/sync-solid.svg'

class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            loading: false,
            isHovering: false,
        }
    }
    componentDidUpdate(prevProps) {
        // Do a quick load to make sure all proper filters show when the container opens
        if (this.props.showContainer !== prevProps.showContainer) {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1);
            })
        }
        // Do a quick load to make sure all proper filters show when preferences are added
        if (this.props.filters.preferencesAreAdded !== prevProps.filters.preferencesAreAdded) {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1);
            })

        }

    }

    closeDropDown = (e) => {
    }
    getGlobalSubFilters(filters, quarterFilterContainer) {

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
            SIGNCAT,
            PRODUCTCAT,
            WEBSEGMENT,
            PVW,
            CATEGORY,
            LTC,
            NONDMSEGMENT,
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;

        switch (this.props.summaryData.primary[this.props.activeCards.primary].index) {

            /** Financial Perf Tab */
            case 0:
                // const selectedRoute = this.props.filters.route.valueFilters
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p>  Route To Market</p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === ROUTE })}
                                options={filters.route.availableFilters}
                                onValueChange={(e) => { let type = ROUTE; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}

                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Segment </p>
                            <SingleValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SEGMENT })}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.props.updateSingleValue}
                                onMenuClose={this.closeDropDownValue}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Product Category</p>
                            <MultiValueSelect
                                options={filters.product.availableFilters}
                                onValueChange={(e) => { let type = PRODUCT; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === PRODUCT })}

                            />
                        </div>
                    </div>
                );
            /** Try Tab */
            case 2:
                // const selectedSignUp = this.props.filters.signupCategory.valueFilters
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p style={{ whiteSpace: 'nowrap' }}> Sign Up Source </p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SIGNCAT })}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.props.updateMultiValue(e, type); }}
                                onMenuClose={this.closeDropDown}
                            />

                        </div>

                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p style={{ whiteSpace: 'nowrap' }}> QFM Type </p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SIGNCAT })}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.props.updateMultiValue(e, type); }}
                                onMenuClose={this.closeDropDown}
                            />

                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Segments </p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Segments  {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''} </p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.props.updateMultiValue(e, type) }}
                                onMenuClose={this.closeDropDown}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}

                            />
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
    onSubmitFilterHover=()=>{

        if(this.state.isHovering){

        }
    }
    render() {
        const { filters } = this.props;
        const { primary } = this.props.activeCards;

        const { GEO,
            MARKET,
            QUARTER,
        } = DIMENSIONS;

        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelDropDownExtendedContainer': (primary === 0 || primary === 2 || primary === 4 || primary === 5) ? true : false,
            'panelBarContainer-open': (this.props.showContainer) ? true : false,
            'panelBarContainer-closed': (this.props.showContainer) ? false : true
        });
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
            'quarterFilterContainer-open': (this.props.showContainer) ? true : false,
            'quarterFilterContainer-closed': (this.props.showContainer) ? false : true
        });
        return (
            (this.state.loading === true && this.props.showContainer === true ? <Loading /> :
                <div className={panelDropDownContainer} >
                    <div className={quarterFilterContainer + ' col-lg-2'} >
                        <p> Quarter</p>
                        <SingleValueSelect
                            activeFilters={filters.quarter.valueFilters}
                            options={filters.quarter.availableFilters}
                            onValueChange={this.props.updateSingleValue}
                            onMenuClose={this.closeDropDownValue}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === QUARTER }))}
                        />
                    </div>
                    <div className={quarterFilterContainer + ' col-lg-2'} >
                        <p> Geo</p>
                        <MultiValueSelect
                            options={filters.geo.availableFilters}
                            onValueChange={(e) => { let type = GEO; this.props.updateMultiValue(e, type) }}
                            onMenuClose={this.closeDropDown}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === GEO }))}
                        />

                    </div>
                    <div className={quarterFilterContainer + ' col-lg-2'} >
                        <p> Market Area</p>
                        <MultiValueSelect
                            options={filters.market.availableFilters}
                            onValueChange={(e) => { let type = MARKET; this.props.updateMultiValue(e, type) }}
                            onMenuClose={this.closeDropDown}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === MARKET }))}
                        />
                    </div>
                    <div className="newFilterDiv resetFilters col-3">
                        <span
                            className=" resetFiltersButton"
                            style={{ marginTop: '5px', cursor: 'pointer' }}
                            onClick={e => { this.props.resetFilters(this.props.preferences) }}>
                            Reset {/* <img className="submitFilterIcon" src={resetFilterIcon} /> */}
                        </span>

                    </div>
                    
                    <div className="newFilterDiv  col-3">
                        <span
                            className=" submitFiltersButton"
                            style={{ marginTop: '5px', cursor: 'pointer' }}
                            onClick={e => { this.props.submitGlobalFilters(e) }}
                            onMouseEnter={e=>{this.onSubmitFilterHover}}>
                            Submit {/* <img className="submitFilterIcon" src={filterIcon} /> */}
                        </span>

                    </div>
                    
                    {this.getGlobalSubFilters(filters, quarterFilterContainer)}
                </div>)
        )
    }
}


function mapStateToProps(state) {
    return {
        filters: state.filters,
        summaryData: state.summaryData,
        activeCards: state.activeCards,
        preferences: state.preferences

    };
}
export default connect(mapStateToProps, actions)(CustomDropDownPanel)