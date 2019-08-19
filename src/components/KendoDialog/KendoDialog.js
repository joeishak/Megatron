import React, { Component } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { connect } from 'react-redux';
import * as actions from 'actions';
// import '@progress/kendo-ui';
import styles from './KendoDialog.css';
import $ from 'jquery';
import * as _ from 'lodash'
import classNames from 'classnames';
import { DIMENSIONS } from '../../Constants/consts';

import SingleValueSelect from '../SingleValueSelect/SingleValueSelect';
import MultiValueSelect from '../MultiValueSelect/MultiValueSelect';
import LoadingScreen from '../../Views/Loading/Loading';

class KendoDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            selectedSummary: undefined,
            financialsSummaryOptions: 'CancellationsARR',
            journeysSummaryViewOptions: 'Discover',
            savedClicked: undefined,
            onFilterHover: false,
            filterListCount: 0,
            selectedFilters:[
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
        };

        $('.content').kendoWindow({
            animation: true
        })

    }

    componentDidMount() {

        let a = this.props.preferences.nondmsegments.map(item => {
            return { ...item, label: item.value }
        });
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
        this.open();
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
    open = () =>{
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()
        });
    }
    closeDialog = () => {
        this.props.updateDialogVisibility(false);
        this.setState({ savedClicked: undefined });
    }



    convertFinId(id) {

        switch (id) {
            case 'NetNewArr':
                return 1;
                break;
            case 'GrossNewArr':
                return 2;
                break;
            case 'CancellationsARR':
                return 3;
                break;
            case 'Renewal@FPARR':
                return 4;
                break;
            default:
                return 1;
                break;
        }
    }
    convertJournId(id) {
        switch (id) {
            case 'Discover':
                return 1;
                break;
            case 'Buy':
                return 2;
                break;
            case 'Try':
                return 3;
                break;
            case 'Use':
                return 4;
                break;
            case 'Renew':
                return 5;
                break;
            default:
                return 1;
                break;
        }
    }
    // Save the changes
    saveChanges = () => {
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
            NONDMSEGMENT
        } = DIMENSIONS;
        let newFilters = {
            quarter: [],
            segment: [],
            product: [],
            market: [],
            route: [],
            subscription: [],
            geo: [],
            signupCategory: [],
            nonDMSegment: []
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
        this.props.submitFilters(newFilters);
        this.props.updateUserSettings(newFilters, this.props.user);
        this.setState({ savedClicked: true });
        setTimeout(() => this.closeDialog(), 1500);
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
    handleResetFiltersClick = () => {
        let newFilters = {
            quarter: this.props.filters.defaultState.quarter.valueFilters,
            segment: this.props.filters.defaultState.segment.valueFilters,
            product: this.props.filters.defaultState.product.valueFilters,
            market: this.props.filters.defaultState.market.valueFilters,
            route: this.props.filters.defaultState.route.valueFilters,
            subscription: this.props.filters.defaultState.subscription.valueFilters,
            geo: this.props.filters.defaultState.geo.valueFilters,
            signupCategory: this.props.filters.defaultState.signupCategory.valueFilters,
            nonDMSegment: this.props.filters.defaultState.nonDMSegment.valueFilters
        };
        this.props.updateUserSettings(newFilters, this.props.user);
        this.props.resetFiltersToDefaultState(newFilters);
        // this.props.submitFilters(newFilters);
        this.setState({ savedClicked: true });

        setTimeout(() => this.closeDialog(), 1500);
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

    }
  
    closeDropDown = (e) => {
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


        // this.setState({ selectedFilters: [] })

        this.props.submitFilters(newFilters);
        //  this.props.getSummaryData(newFilters);
        // this.props.handleClose();

    }
    getGlobalSubFilters(filters) {
        const { GEO,
            MARKET,
            PRODUCT,
            SEGMENT,
            SUBSCRIPTION,
            QUARTER,
            ROUTE,
            VISITSTATUS,
            SIGNCAT,
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
            NONDMSEGMENT,
            QFMTYPE
        } = DIMENSIONS;
        return (
            <div>
                <div>
                    <h4 className="dialog-sub-category col-lg-12">Financial Performance</h4>
                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p>  Route To Market</p>
                    <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === ROUTE })}
                        options={filters.route.availableFilters}
                        onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeDropDown}

                    />
                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p> Segment</p>
                    <SingleValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === SEGMENT })}
                        activeFilters={filters.segment.valueFilters}
                        options={filters.segment.availableFilters}
                        onValueChange={this.updateSingleValue}
                        onMenuClose={this.closeDropDown}
                    />

                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p> Subscription Offering</p>
                    <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === SUBSCRIPTION })}
                        options={filters.subscription.availableFilters}
                        onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeDropDown}
                    />
                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p> Product Name</p>
                    <MultiValueSelect
                        options={filters.product.availableFilters}
                        onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeDropDown}
                        value={_.filter(this.state.selectedFilters, item => { return item.category === PRODUCT })}

                    />
                </div>
                <br />
                <div>
                    <h4 className="dialog-sub-category col-lg-6">Try</h4>
                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p> Sign Up Source</p>
                    <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === SIGNCAT })}
                        options={filters.signupCategory.availableFilters}
                        onValueChange={(e) => { let type = SIGNCAT; this.updateMultiValue(e, type); }}
                        onMenuClose={this.closeDropDown}
                    />
                </div>
                <div className={'dialog-dropdown col-lg-6'} >
                    <p> QFM Type</p>
                    <MultiValueSelect
                        value={_.filter(this.state.selectedFilters, item => { return item.category === QFMTYPE })}
                        options={filters.qfmType.availableFilters}
                        onValueChange={(e) => { let type = QFMTYPE; this.updateMultiValue(e, type); }}
                        onMenuClose={this.closeDropDown}
                    />
                </div>
                <div>
                    <h4 className="dialog-sub-category col-lg-12">Use</h4>
                </div>
                <div className={'dialog-dropdown col-lg-12'} >
                    <p> Segments</p>
                    <MultiValueSelect
                        options={filters.nonDMSegment.availableFilters}
                        onValueChange={(e) => { let type = NONDMSEGMENT; this.updateMultiValue(e, type) }}
                        onMenuClose={this.closeDropDown}
                        value={_.filter(this.state.selectedFilters, item => { return item.category === NONDMSEGMENT })}
                    />
                </div>
            </div>
        )
    }
    render() {
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        let { filters } = this.props;
        const show = this.props.dialogIsOpen;
        const { GEO,
            MARKET,
            QUARTER,
        } = DIMENSIONS;
        const kendoDialog = show ? (
            <div className="content ">
                <div className="desktopDialog">
                    <Dialog width={939} height={626} title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>
                        {/* All the Contents */}
                        <div className="container-fluid">
                            <div className="col-lg-12 col-md-12">
                                {/* Filters */}
                                
                                <button className="saveButton" onClick={this.saveChanges}>Save</button>
                                
                                <button className="resetButton" onClick={this.handleResetFiltersClick}>Reset</button>
                                
                                <p className="dialogTitles">Filters</p>
                                
                                <p>Select which filters (if any) you would like applied:</p>
                                
                                <div className="filterPillsContainer">
                                    <ul className="filterList">
                                        {/* {filters.combined.valueFilters.filter(item => item.category === QUARTER || item.category === MARKET || item.category === GEO).map((item) => {
                                            return <li key={item.index} className="filterListLi">{item.value}</li>
                                        })} */}
                                    </ul>
                                </div>
                                <div className="dropdowns contentpad">
                                    {/* first row */}
                                    <div className="row dropRow">
                                        <div className={'dialog-dropdown col-lg-2'} >
                                            <p> Quarter</p>
                                            <SingleValueSelect
                                                activeFilters={filters.quarter.valueFilters}
                                                options={filters.quarter.availableFilters}
                                                onValueChange={this.updateSingleValue}
                                                onMenuClose={this.closeDropDown}
                                                value={_.filter(this.state.selectedFilters, (item => { return item.category === QUARTER }))}

                                            />
                                        </div>
                                        <div className={'dialog-dropdown col-lg-5'} >
                                            <p> Geo</p>
                                            <MultiValueSelect
                                                options={filters.geo.availableFilters}
                                                onValueChange={(e) => { let type = GEO; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeDropDown}
                                                value={_.filter(this.state.selectedFilters, (item => { return item.category === GEO }))}
                                            />
                                        </div>
                                        <div className={'dialog-dropdown col-lg-5'} >
                                            <p> Market Area</p>
                                            <MultiValueSelect
                                                options={filters.market.availableFilters}
                                                onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeDropDown}
                                                value={_.filter(this.state.selectedFilters, (item => { return item.category === MARKET }))}
                                            />
                                        </div>
                                        {this.getGlobalSubFilters(filters)}
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                    <a id="filter-reset" onClick={this.handleResetFiltersClick}>Re-set all Preferences</a>
                                </div> */}
                            </div>
                        </div>
                        {/* Save Button */}
                        {/* <button className="saveButton" onClick={this.saveChanges}>Save Changes</button> */}
                    </Dialog>
                </div>
                <div className="mobileDialog">
                    <Dialog width={window.innerWidth - 19} height={window.innerHeight} title={`Data Preferences`} onClose={this.closeDialog}>
                    </Dialog>
                </div>
            </div>) : null;
        const savedPrompt = show ? (
            <div className="content">
                <Dialog width={939} height={626} title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>
                    <div className="container-fluid savedContainer">
                        <LoadingScreen></LoadingScreen>
                    </div>
                </Dialog>
            </div>
        ) : null;
        const screenView = this.state.savedClicked ? savedPrompt : kendoDialog;
        return (
            <div className="dialogContainer fluid">
                {screenView}
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        dialogIsOpen: state.isDialogOpen,
        availableFilters: state.filters.combined,
        activeFilters: state.filters.combined,
        user: state.user,
        defaultView: state.preferences.defaultSummaryView,
        preferences: state.preferences,
        filters: state.filters,
        user: state.user
    }
}
export default connect(mapStateToProps, actions)(KendoDialog);
