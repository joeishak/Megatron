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
import { DIMENSIONS } from '../../../Constants/consts';
import * as _ from 'lodash';

class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            isButtonHighlighted: false,
            showContainer: this.props.showContainer,
            selectedFilters: [...this.props.filters.combined.valueFilters],
            activeDataFilters: [],
            stringList: '',
        }
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

        this.setState({ isButtonHighlighted: true });

    }

    updateMultiValue = (e, type) => {


        let copy = this.state.selectedFilters;
        
        if (e.length === 0) {
            _.remove(copy, item => { return item.category === type });
            this.setState({ selectedFilters: [...copy] })

        } else {
            _.remove(copy, item => { return item.category === e[0].category });
            this.setState({ selectedFilters: [...copy, ...e] })
        }

        this.setState({ isButtonHighlighted: true });
    }

    componentWillUnmount() {
        console.log('here');
        this.setState({ selectedFilters: [] })
    }
    closeSingleValue = (e) => {
        console.log('Closing Single Value',this.state.selectedFilters);
    }
    closeMultiValue = (e) => {
        console.log('Closing Multivalue',this.state.selectedFilters);
    }
    updateActiveFiltersHandler = (e) => {
        if (!_.find(this.state.selectedFilters, (item => { return item.index === e.index }))) {
            this.setState({ selectedFilters: [...this.state.selectedFilters, e] })
        }
    }


    submitFilters = (e) => {
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
            VISITS,
            SIGNCAT
        } = DIMENSIONS;
        // console.log('Submitting Filters . . . ');
        this.setState({ isButtonHighlighted: false })
        let newFilters = {
            quarter: [],
            segment: [],
            product: [],
            market: [],
            route: [],
            subscription: [],
            geo: [],
            signupCategory:[],
            nonDMSegment:[]

        };
        console.log(newFilters.QUARTER);
        Object.keys(newFilters).forEach(item => {
            console.log(item);
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
                console.log('Grouping',this.state.selectedFilters);
                    let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category ===  item }));
                    console.log(grouped);
                    if (grouped.false !== this.state.selectedFilters.length) {
                        console.log()
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
            console.log(newFilters);

        });


        // this.setState({ selectedFilters: [] })
        // console.log(newFilters);
        this.props.submitFilters(newFilters);
        this.props.handleClose();
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
            NEWVSREPEAT,
            MOBILEVSDESKTOP,
            CONVERSION,
            VISITS
        } = DIMENSIONS;

        // console.log('here',this.props.summaryData.primary[this.props.activeCards.primary].index );
        switch (this.props.summaryData.primary[this.props.activeCards.primary].index) {

            /** Financial Perf Tab */
            case 0:
            // const selectedRoute = this.props.filters.route.valueFilters
            // //     console.log('testing', selectedRoute );
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-3'} >
                            <p>  Route To Market</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === ROUTE})}
                                options={filters.route.availableFilters}
                                onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                // values={this.props.filters.route.valueFilters}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-3'} >
                            <p> Segment</p>
                            <SingleValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SEGMENT})}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-3'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SUBSCRIPTION})}
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-3'} >
                            <p> Product Category</p>
                            <MultiValueSelect
                                options={filters.product.availableFilters}
                                onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                    </div>
                );
            // case 1:
            //     return (
            //         <div className="col-lg-12 globalPrimaryKPIFilters">
            //             <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
            //             <div className={quarterFilterContainer + ' col-lg-2'} >
            //                 <p> Web Segment</p>
            //                 <SingleValueSelect
            //                     activeFilters={filters.websegment.valueFilters}
            //                     options={filters.websegment.availableFilters}
            //                     onValueChange={this.updateSingleValue}
            //                     onMenuClose={this.closeSingleValue}
            //                 />

            //             </div>
            //         </div>
            //     );
            /** Try Tab */
            case 2:
                // const selectedSignUp = this.props.filters.signupCategory.valueFilters
                // console.log('testing', selectedSignUp);
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-6'} >
                            {/* <p style={{whiteSpace: 'nowrap'}}> Sign Up Source - {this.state.stringList}</p> this.setSelectedMultiFilters(selected); */}
                 
                            <p style={{whiteSpace: 'nowrap'}}> Sign Up Source - {this.state.stringList}</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item=> {return item.category === SIGNCAT})}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.updateMultiValue(e, type);  }}
                                onMenuClose={this.closeMultiValue}
                            />
                          
                        </div>
                    </div>
                );
            case 3:
                break;
            case 4:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Non DM Segment</p>
                            <SingleValueSelect
                                activeFilters={filters.nonDMSegment.valueFilters}
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-5'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Segment</p>
                            <SingleValueSelect
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-5'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        // console.log('here rendering')
        const { filters } = this.props;
        const {primary} = this.props.activeCards;
        const isGlowing = this.state.isButtonHighlighted ? 'myGlower' : '';

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
        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelDropDownExtendedContainer':(primary ===0 || primary ===2  || primary ===4|| primary===5)? true: false,
            'panelBarContainer-open': (this.props.showContainer) ? true : false,
            'panelBarContainer-closed': (this.props.showContainer) ? false : true
        });
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
            'quarterFilterContainer-open': (this.props.showContainer) ? true : false,
            'quarterFilterContainer-closed': (this.props.showContainer) ? false : true
        });
        return (
            <div className={panelDropDownContainer} >
                <div className={quarterFilterContainer + ' col-lg-2'} >
                    <p> Quarter</p>
                    <SingleValueSelect
                        activeFilters={filters.quarter.valueFilters}
                        options={filters.quarter.availableFilters}
                        onValueChange={this.updateSingleValue}
                        onMenuClose={this.closeSingleValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-3'} >
                    <p> Geo</p>
                    {/* <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.geo[0]}
                        onClose={(e) => { this.closed(e) }}
                        options={this.props.availableFilters.geo}></ReactSelect> */}
                    <MultiValueSelect
                        options={filters.geo.availableFilters}
                        onValueChange={(e) => { let type = GEO; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />

                </div>
                <div className={quarterFilterContainer + ' col-lg-4'} >
                    <p> Market Area</p>
                    <MultiValueSelect
                        options={filters.market.availableFilters}
                        onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                        values={_.groupBy(this.state.selectedFilters, (item => { return item.category === MARKET }))}
                    />
                </div>

                <button onClick={e => {this.forceUpdate(); console.log('forceUpdating')}}></button>
                {/* <div className={quarterFilterContainer + ' col-lg-3'} >
                    <p>  Route To Market</p>
                    <MultiValueSelect
                        options={filters.route.availableFilters}
                        onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-2'} >
                    <p> Segment</p>
                    <SingleValueSelect
                        activeFilters={filters.segment.valueFilters}
                        options={filters.segment.availableFilters}
                        onValueChange={this.updateSingleValue}
                        onMenuClose={this.closeSingleValue}
                    />

                </div>
                <div className={quarterFilterContainer + ' col-lg-5'} >
                    <p> Subscription Offering</p>
                    <MultiValueSelect
                        options={filters.subscription.availableFilters}
                        onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div>
                <div className={quarterFilterContainer + ' col-lg-5'} >
                    <p> Product Category</p>
                    <MultiValueSelect
                        options={filters.product.availableFilters}
                        onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                    />
                </div> */}
                {/* {console.log('here', filters, quarterFilterContainer)} */}
                {this.getGlobalSubFilters(filters, quarterFilterContainer)}
                <div className={quarterFilterContainer + ' col-lg-12'}>
                    <input className={`button ` + isGlowing} type={'button'} onClick={this.submitFilters} value="Submit" />
                </div>


            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        filters: state.filters, 
        summaryData: state.summaryData, 
        activeCards: state.activeCards 
    };
}
export default connect(mapStateToProps, actions)(CustomDropDownPanel)