import React, { Component } from 'react';
import styles from './FilterPage.css';
import * as _ from 'lodash';
import * as actions from 'actions';
import { connect } from 'react-redux';
import DropDownFilter from './components/DropDownFilter.jsx';
import classNames from 'classnames';
import { Button } from '@progress/kendo-react-buttons';
import { DIMENSIONS, SUMMARY_KPIS } from '../../../Constants/consts';
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
            selectedFilters: [
                ...this.props.filters.visits.valueFilters.map(item => {
                    return { ...item, label: item.value }
                  }),
                ...this.props.filters.subscription.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.channelPM.valueFilters.map(item => {
                  return { ...item, label: item.value }
                }),
                ...this.props.filters.signupCategory.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.product.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.route.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.geo.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.market.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.quarter.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.segment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.customerType.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.websegment.valueFilters.map(item => {
                return { ...item, label: item.value }
                }),
                ...this.props.filters.qfmType.valueFilters.map(item => {
                  return { ...item, label: item.value }
                }),
                ...this.props.filters.ltvSegment.valueFilters.map(item => {
                  return { ...item, label: item.value }
                })],
                
            activeDataFilters: [],
        }
    }
    componentDidMount() {
        this.setState({
            selectedFilters: [
                ...this.props.filters.visits.valueFilters.map(item => {
                    return { ...item, label: item.value }
                  }),
                ...this.props.filters.subscription.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.channelPM.valueFilters.map(item => {
                  return { ...item, label: item.value }
                }),
                ...this.props.filters.signupCategory.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.product.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.route.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.geo.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.market.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.quarter.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.segment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.customerType.valueFilters.map(item => {
                    return { ...item, label: item.value }
                }),
                ...this.props.filters.websegment.valueFilters.map(item => {
                return { ...item, label: item.value }
                }),
                ...this.props.filters.qfmType.valueFilters.map(item => {
                  return { ...item, label: item.value }
                }),
                ...this.props.filters.ltvSegment.valueFilters.map(item => {
                  return { ...item, label: item.value }
                })],
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.filters.preferencesAreAdded !== prevProps.filters.preferencesAreAdded) {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1);
            })
            this.setState({
                selectedFilters: [
                    ...this.props.filters.visits.valueFilters.map(item => {
                        return { ...item, label: item.value }
                      }),
                    ...this.props.filters.subscription.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.signupCategory.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.nonDMSegment.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.product.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.route.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.geo.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.market.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.quarter.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.segment.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.customerType.valueFilters.map(item => {
                        return { ...item, label: item.value }
                    }),
                    ...this.props.filters.websegment.valueFilters.map(item => {
                    return { ...item, label: item.value }
                    }),
                    ...this.props.filters.qfmType.valueFilters.map(item => {
                      return { ...item, label: item.value }
                    }),
                    ...this.props.filters.ltvSegment.valueFilters.map(item => {
                      return { ...item, label: item.value }
                    })],
            })
        }

    }
    updateSingleValue = (e) => {
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

    // componentWillUnmount() {
    //     this.setState({ selectedFilters: [] })
    // }
    closeSingleValue = (e) => {
    }
    closeMultiValue = (e) => {
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
            VISITS,
            CHANNELPM,
            CUSTOMERTYPE,
            QFMTYPE,
            LTVSEGMENT
        } = DIMENSIONS;

        switch (this.props.summaryData.primary[this.props.activeCards.primary].index) {

            /** Financial Perf Tab */
            case 0:
                // const selectedRoute = this.props.filters.route.valueFilters
                return (
                    <div className="col-lg-12 mobilePrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p>  Route To Market</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === ROUTE })}
                                options={filters.route.availableFilters}
                                onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}

                            />
                        </div>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Segment - {filters.segment.valueFilters[0].value}</p>
                            <SingleValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SEGMENT })}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Product Category</p>
                            <MultiValueSelect
                                options={filters.product.availableFilters}
                                onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === PRODUCT })}

                            />
                        </div>
                    </div>
                );

            /** Try Tab */
            case 2:
                return (
                    <div className="col-lg-12 mobilePrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >

                            <p style={{ whiteSpace: 'nowrap' }}> Sign Up Source </p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SIGNCAT })}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >

                            <p style={{ whiteSpace: 'nowrap' }}> QFM Type </p>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                                options={filters.qfmType.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>
                    </div>
                );
            case 3:
                break;
            case 4:
                return (
                    <div className="col-lg-12 mobilePrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Segments {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''}</p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />
                        </div>
                        <div className={' col-xs-12 col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="col-lg-12 mobilePrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        {/* <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Segments  {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''} </p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />
                        </div> */}
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Segment - {filters.segment.valueFilters[0].value}</p>
                            <SingleValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SEGMENT })}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={'mobileDropDownStyle col-xs-12 col-sm-12'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === SUBSCRIPTION })}

                            />
                        </div>
                    </div>
                );
            default:
                break;
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
            SIGNCAT,
            CHANNELMU,
            CHANNELPM,
            CUSTOMERTYPE,
            LTVSEGMENT
        } = DIMENSIONS;
        this.setState({ isButtonHighlighted: false })
        let newFilters = {
            quarter: [],
            segment: [],
            product: [],
            market: [],
            route: [],
            subscription: [],
            geo: [],
            signupCategory: [],
            nonDMSegment: [],
            lastTouchChannel: [],
            convType: [],
            customerType:[],
            websegment: [],
            visits: [],
            channelMU: [],
            channelPM: [],
            pvw: [],
            qfmType: [],
            ltvSegment: []

        };
        // newFilters = {
        //     geo:[],
        //     market:[],
        //     quarter:[],
        //     lastTouchChannel: [],
        //     convType: [],
        //     websegment: [],
        //     visits: [],
        //     channelMU: [],
        //     channelPM: [],
        //     pvw: [],
        //     customerType:[],
        //     qfmType: [],
        //     // convQfmType:[],
        //     segment:[],
        //     ltvSegment:[],
        //     product:[],
        //     subscription:[]
        //   };
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
                case LTC:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === LTC })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === LTC }))] : /* Else */
                        [...this.props.filters.lastTouchChannel.valueFilters];
                    break;
                case WEBSEGMENT:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === WEBSEGMENT })) ?
                        [_.find(this.state.selectedFilters, (item => { return item.category === WEBSEGMENT }))] :
                        [...this.props.filters.websegment.valueFilters];
                    break;
                case VISITS:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === VISITS })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === VISITS }))] : /* Else */
                        [...this.props.filters.visits.valueFilters];
                    break;
                case CHANNELMU:
                    newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === CHANNELMU })) ? /* Then */
                        [_.find(this.state.selectedFilters, (item => { return item.category === CHANNELMU }))] : /* Else */
                        [...this.props.filters.channelMU.valueFilters];
                    break;
                default:
                    let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category === item }));
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

        this.props.submitFilters(newFilters);
        // this.props.handleClose();
        this.props.updateViewSetting(MOBILE_FILTER_PAGE, false);

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
    getSummaryFilters(activeItem) {
        let drillDownFilter;
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
            SIGNCAT,
            CHANNELMU,
            CHANNELPM,
            CUSTOMERTYPE,
            LTVSEGMENT
        } = DIMENSIONS;
        let { lastTouchChannel, convType, websegment, segment, product, pvw, visits, channelMU, channelPM, customerType, qfmType, ltvSegment } = this.props.filters;
        switch (activeItem) {

            case SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE:
                //Marketable Universe
                return (


                        /* Channel */
                        <div className="col-md-4 col-lg-4 mobilePrimaryKPIFilters">
                            <p>{'Channel - ' + channelMU.valueFilters[0].value} </p>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={channelMU.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === CHANNELMU })}
                            />
                        </div>

                );
            //Discover 
            case SUMMARY_KPIS.DISCOVER_TRAFFIC:
                return (
                    <div className="row">
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                            {/* Visit Type */}
                            <div>{'Visits - ' + visits.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={visits.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.VISITS })}
                            />
                        </div>
                        {/* Customer Type */}
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>Customer Type </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CUSTOMERTYPE })}
                                options={customerType.availableFilters}
                                onValueChange={(e) => {let type = DIMENSIONS.CUSTOMERTYPE; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                                
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={websegment.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
                            />
                        </div>
                    </div>
                );
            case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND:
                //Paid Media Spend
                return (
                    <div className="row">
                        {/* Channel */}
                        <div className="col-md-4 col-lg-4 mobilePrimaryKPIFilters">
                            <div> Channel </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === CHANNELPM })}
                                options={channelPM.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>

                    </div>
                );
            case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED:
                //Paid Media Sourced
                return (
                    <div className="row">
                        <div className="col-md-4 col-lg-4 mobilePrimaryKPIFilters">
                            {/* Channel */}
                            <div> Channel</div>
                            <MultiValueSelect
                                options={channelPM.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === CHANNELPM })}

                            />
                        </div>
                    </div>
                );

            case SUMMARY_KPIS.DISCOVER_BOUNCE_RATE:
                return (
                    <div className="row">
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                            {/* Visit Type */}
                            <div>{'Visits - ' + visits.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={visits.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.VISITS })}
                            />
                        </div>
                        {/* Customer Type */}
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>Customer Type </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.CUSTOMERTYPE })}
                                options={customerType.availableFilters}
                                onValueChange={(e) => {let type = DIMENSIONS.CUSTOMERTYPE; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                                
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={websegment.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
                            />
                        </div>
                    </div>
                );
            //Buy
            case SUMMARY_KPIS.BUY_CONVERSION:
                return (
                    //Conversion
                    <div className="row">
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                            {/* Visit Type */}
                            <div>{'Visits - ' + visits.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={visits.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.VISITS })}
                            />
                        </div>
                        {/* Last Touch Channel */}
                        {/* <div className="col-md-3 col-lg-3" style={{ paddingBottom: '10px' }}>
                  <div> {'Last Touch Channel - '+ lastTouchChannel.valueFilters[0].value} </div>
                  <SingleValueSelect
                    activeFilters={[]}
                    options={lastTouchChannel.availableFilters}
                    onValueChange={e => { this.updateSingleValue(e) }}
                    onMenuClose={e => { this.closeSingleValue(e) }}
                  />
                </div> */}
                        {/* Conversion Type */}
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>Conversion </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === CONVERSION })}

                                options={convType.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.CONVERSION; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div>{'Web Segment - ' + websegment.valueFilters[0].value}</div>
                            <SingleValueSelect
                                activeFilters={[]}
                                options={websegment.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                                value={_.filter(this.state.selectedFilters, item => { return item.category === WEBSEGMENT })}
                            />
                        </div>
                         <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }} >

                            <div>QFM Type</div>  
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                                options={qfmType.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>
                         
                    </div>
                );
            case SUMMARY_KPIS.BUY_LTV_ROI:
                return (
                    // Marketing Sourced ARR
                    <div className="row">
                    <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                        <div>Segment</div>
                        
                        <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.LTVSEGMENT })}
                        options={ltvSegment.availableFilters}
                        onValueChange={(e) => { let type = DIMENSIONS.LTVSEGMENT; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                        />
                    </div>
                    {/* Product Category*/}
                    <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                        <div> Product</div>
                        <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.PRODUCT })}
                        options={product.availableFilters}
                        onValueChange={(e) => { let type = DIMENSIONS.PRODUCT; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeMultiValue}
                        />
                    </div>
        
                    </div>
                );

            case SUMMARY_KPIS.BUY_PAID_MEDIASPEND:
                return (
                    // Paid Media Spend
                    <div className="row">
                        {/* Channel*/}
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                            {/* Channel */}
                            <div> Channel </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === CHANNELPM })}

                                options={channelPM.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.CHANNELPM; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>
                    </div>
                );
            case SUMMARY_KPIS.BUY_MARKETING_SOURCED:
                return (
                    // Marketing Sourced ARR
                    <div className="row">
                        {/* segment*/}
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }}>
                            {/* <div>{'Segment - ' + ltvSegment.valueFilters[0].value}</div> */}
                            <div>Segment</div>

                            {/* <SingleValueSelect
                                activeFilters={[]}
                                options={segment.availableFilters}
                                onValueChange={e => { this.updateSingleValue(e) }}
                                onMenuClose={e => { this.closeSingleValue(e) }}
                            /> */}
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.LTVSEGMENT })}
                                options={ltvSegment.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.LTVSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                            />
                        </div>
                        {/* Product Category*/}
                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }}>
                            <div> Product</div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === PRODUCT })}
                                options={product.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.PRODUCT; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>

                    </div>
                );
            case SUMMARY_KPIS.BUY_GROSS_NEWARR:
                return (
                    // Gross New ARR
                    <div className="row">
                        {/* PVW*/}
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }} >

                            <div> Phone VS Web </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === 'pvw' })}
                                options={pvw.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>


                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }} >

                            <div>QFM Type</div>  
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                                options={qfmType.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>

                    </div>
                );
            case SUMMARY_KPIS.BUY_GROSS_NEWUNITS:
                return (
                    // Gross New ARR
                    <div className="row">
                        {/* PVW*/}
                        <div className="col-md-3 col-lg-3 mobilePrimaryKPIFilters" style={{ paddingBottom: '10px' }} >

                            <div> Phone VS Web </div>
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === 'pvw' })}
                                options={pvw.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.PVW; this.updateMultiValue(e, type) }}
                                onMenuClose={(e) => { this.closeMultiValue(e) }}
                            />
                        </div>


                        <div className="col-md-3 col-lg-3 mobileSubFilter" style={{ paddingBottom: '10px' }} >

                            <div>QFM Type</div>  
                            <MultiValueSelect
                                value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.QFMTYPE })}
                                options={qfmType.availableFilters}
                                onValueChange={(e) => { let type = DIMENSIONS.QFMTYPE; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>

                    </div>
                );
            default:
                break;
        }
        return drillDownFilter;
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
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        return (
            <div className="filterMobileContainer" >

                {/* <div className="filterMobilePillsContainer">
                    <ul className="filterListMobile">
                        {filters.combined.valueFilters.filter(item => item.category === QUARTER || item.category === MARKET || item.category === GEO).map((item) => {
                            return <li key={item.index} className="filterListMobileLi">{item.value}</li>
                        })}
                    </ul>
                </div> */}
                <div className={'col-xs-12 col-sm-12 col-md-12 '}>
                                <button className={"mobileButton"} type='button'  onClick={this.submitFilters} >Submit</button>
                </div>

                <div className="filterMobileDropDownContainer">
                    <div className="dropdowns contentpad">
                        {/* first row */}
                        <div className="row dropRow">
                            <div className="col-xs-12 col-sm-12 col-md-12 defaultFilters ">
                                <p>Quarter</p>
                                <SingleValueSelect
                                    activeFilters={filters.quarter.valueFilters}
                                    options={filters.quarter.availableFilters}
                                    onValueChange={this.updateSingleValue}
                                    onMenuClose={this.closeSingleValue}
                                    value={_.filter(this.state.selectedFilters, item => { return item.category === QUARTER })}
                                />                                        </div>
                            
                            <div className="col-xs-12 col-sm-12 col-md-12 defaultFilters ">
                                <p>Geo</p>
                                <MultiValueSelect
                                    options={filters.geo.availableFilters}
                                    onValueChange={(e) => { let type = 'geo'; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.GEO })}
                                /> 
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 defaultFilters ">
                                <p>Market Area</p>
                                <MultiValueSelect
                                    options={filters.market.availableFilters}
                                    onValueChange={(e) => { let type = DIMENSIONS.MARKET; this.updateMultiValue(e, type) }}
                                    onMenuClose={this.closeMultiValue}
                                    value={_.filter(this.state.selectedFilters, item => { return item.category === DIMENSIONS.MARKET })}
                                />                                        </div>
                            {this.getGlobalSubFilters(filters, quarterFilterContainer)}
                                {this.getSummaryFilters(this.props.activeCards.secondary)}
                            
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
    return {
        filters: state.filters,
        summaryData: state.summaryData,
        activeCards: state.activeCards,

    };
}

export default connect(mapStateToProps, actions)(FilterPage);