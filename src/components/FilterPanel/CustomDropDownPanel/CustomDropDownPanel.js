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
class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state

        this.state = {
            isButtonHighlighted: false,
            showContainer: this.props.showContainer,
            selectedFilters: [
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
                })],
            activeDataFilters: [],
            stringList: '',
            loading: true
        }
    }

    componentDidMount() {


        this.setState({
            selectedFilters: [
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
                })]
        })
    }

    componentDidUpdate(prevProps) {


        if (this.props.showContainer !== prevProps.showContainer) {
            console.log('Opening the container');
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1);
            })
        }
        if (this.props.filters.preferencesAreAdded !== prevProps.filters.preferencesAreAdded) {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1);
            })
            this.setState({
                selectedFilters: [
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
                    })]
            })
        }

    }
    updateSingleValue = (e) => {
        this.props.updateSingleValue(e);
    }

    updateMultiValue = (e, type) => {
        this.props.updateMultiValue(e,type);
    }

    closeSingleValue = (e) => {
    }
    closeMultiValue = (e) => {
    }
    updateActiveFiltersHandler = (e) => {
        if (!_.find(this.state.selectedFilters, (item => { return item.index === e.index }))) {
            this.setState({ selectedFilters: [...this.state.selectedFilters, e] })
        }
    }


    // submitFilters = (e) => {
    //     const { GEO,
    //         MARKET,
    //         PRODUCT,
    //         SEGMENT,
    //         SUBSCRIPTION,
    //         QUARTER,
    //         ROUTE,
    //         VISITSTATUS,
    //         SIGNSOURCE,
    //         SIGNAPP,
    //         PRODUCTCAT,
    //         WEBSEGMENT,
    //         PVW,
    //         CATEGORY,
    //         LTC,
    //         NEWVSREPEAT,
    //         MOBILEVSDESKTOP,
    //         CONVERSION,
    //         VISITS,
    //         SIGNCAT
    //     } = DIMENSIONS;
    //     this.setState({ isButtonHighlighted: false })
    //     let newFilters = {
    //         quarter: [],
    //         segment: [],
    //         product: [],
    //         market: [],
    //         route: [],
    //         subscription: [],
    //         geo: [],
    //         signupCategory: [],
    //         nonDMSegment: []

    //     };
    //     Object.keys(newFilters).forEach(item => {
    //         switch (item) {
    //             case QUARTER:
    //                 newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === QUARTER })) ? /* Then */
    //                     [_.find(this.state.selectedFilters, (item => { return item.category === QUARTER }))] : /* Else */
    //                     [...this.props.filters.quarter.valueFilters];
    //                 break;
    //             case SEGMENT:
    //                 newFilters[item] = _.find(this.state.selectedFilters, (item => { return item.category === SEGMENT })) ?
    //                     [_.find(this.state.selectedFilters, (item => { return item.category === SEGMENT }))] :
    //                     [...this.props.filters.segment.valueFilters];
    //                 break;

    //             default:
    //                 let grouped = _.groupBy(this.state.selectedFilters, (obj => { return obj.category === item }));
    //                 if (grouped.false !== this.state.selectedFilters.length) {
    //                     if (grouped.true !== undefined) {
    //                         newFilters[item] = grouped.true
    //                     } else {
    //                         newFilters[item] = [];
    //                     }
    //                 } else {
    //                     newFilters[item] = [];
    //                 }
    //                 break;
    //         }

    //     });



    //     this.props.submitFilters(newFilters);
    //     this.props.handleClose();
    // }
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
                        <div className={quarterFilterContainer + ' col-lg-3'} >
                            <p>  Route To Market</p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === ROUTE })}
                                options={filters.route.availableFilters}
                                onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}

                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-2'} >
                            <p> Segment </p>
                            <SingleValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SEGMENT })}
                                activeFilters={filters.segment.valueFilters}
                                options={filters.segment.availableFilters}
                                onValueChange={this.updateSingleValue}
                                onMenuClose={this.closeSingleValue}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-4'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}
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
                        <div className={quarterFilterContainer + ' col-lg-6'} >
                            {/* <p style={{whiteSpace: 'nowrap'}}> Sign Up Source - {this.state.stringList}</p> this.setSelectedMultiFilters(selected); */}

                            <p style={{ whiteSpace: 'nowrap' }}> Sign Up Source - {this.state.stringList}</p>
                            <MultiValueSelect
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SIGNCAT })}
                                options={filters.signupCategory.availableFilters}
                                onValueChange={(e) => { let type = SIGNCAT; this.updateMultiValue(e, type); }}
                                onMenuClose={this.closeMultiValue}
                            />

                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-4'} >
                            <p> Segments {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''}</p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />
                        </div>
                        <div className={quarterFilterContainer + ' col-lg-4'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                            />
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="col-lg-12 globalPrimaryKPIFilters">
                        <p>{this.props.summaryData.primary[this.props.activeCards.primary].category} Global Sub Filters</p>
                        <div className={quarterFilterContainer + ' col-lg-4'} >
                            <p> Segments  {this.props.filters.isDefaultFilters === true ? '- Excluding PDF Services & Sign' : ''} </p>
                            <MultiValueSelect
                                options={filters.nonDMSegment.availableFilters}
                                onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                            />

                        </div>
                        <div className={quarterFilterContainer + ' col-lg-4'} >
                            <p> Subscription Offering</p>
                            <MultiValueSelect
                                options={filters.subscription.availableFilters}
                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                onMenuClose={this.closeMultiValue}
                                value={_.filter(this.props.selectedFilters, item => { return item.category === SUBSCRIPTION })}

                            />
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        const { filters } = this.props;
        const { primary } = this.props.activeCards;
        const isGlowing = this.state.isButtonHighlighted ? 'myGlower' : '';

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

            (this.state.loading ===true? <Loading /> :
                <div className={panelDropDownContainer} >

                    <div className={quarterFilterContainer + ' col-lg-1'} >
                        <p> Quarter</p>
                        <SingleValueSelect
                            activeFilters={filters.quarter.valueFilters}
                            options={filters.quarter.availableFilters}
                            onValueChange={this.updateSingleValue}
                            onMenuClose={this.closeSingleValue}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === QUARTER }))}

                        />
                    </div>
                    <div className={quarterFilterContainer + ' col-lg-2'} >
                        <p> Geo</p>
                        <MultiValueSelect
                            options={filters.geo.availableFilters}
                            onValueChange={(e) => { let type = GEO; this.updateMultiValue(e, type) }}
                            onMenuClose={this.closeMultiValue}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === GEO }))}
                        />

                    </div>
                    <div className={quarterFilterContainer + ' col-lg-2'} >
                        <p> Market Area</p>
                        <MultiValueSelect
                            options={filters.market.availableFilters}
                            onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                            onMenuClose={this.closeMultiValue}
                            value={_.filter(this.props.selectedFilters, (item => { return item.category === MARKET }))}
                        />
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

    };
}
export default connect(mapStateToProps, actions)(CustomDropDownPanel)