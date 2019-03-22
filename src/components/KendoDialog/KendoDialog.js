import React, { Component } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
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
            selectedFilters: [],
            activeDataFilters: [],
        };

        this.closeDialog = this.closeDialog.bind(this)
        this.handleResetFiltersClick = this.handleResetFiltersClick.bind(this);
        $('.content').kendoWindow({
            animation: true
        })

    }



    componentDidMount() {
        // window.addEventListener("resize", this.resize.bind(this));
        // this.resize();
        this.open();
    }

    // resize() {
    // }

    open() {
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()
        });
    }
    closeDialog() {
        this.props.updateDialogVisibility(false);
        this.setState({ savedClicked: undefined });
    }

    onItemChecked(e) {
        e.preventDefault()



        //TODO:  3 Different Actions for updating the defaultSummary, defaultFinKpi and defaultJournKpi
        if (e.target.name === 'summaryViewOptions') {
            switch (e.target.id) {
                case "Financials":
                    this.props.updateDefaultSummaryPreference('Financial');
                    this.setState({ selectedSummary: 'Financial' });
                    break;
                case "Journeys":
                    this.props.updateDefaultSummaryPreference('Journey');
                    this.setState({ selectedSummary: 'Journey' });
                    break;
                default:
                    break;

            }
        } else if (e.target.name === 'financialsSummaryOptions') {
            this.setState({ financialsSummaryOptions: e.target.id });
            // this.props.updateDefaultFinKpiPreference(this.convertFinId(e.target.id));
        } else if (e.target.name === 'journeysSummaryViewOptions') {
            this.setState({ journeysSummaryViewOptions: e.target.id })
            // this.props.updateDefaultJournKpiPreference(this.convertJournId(e.target.id));
        }

    }

    updateActiveFiltersHandler = (e) => {
        this.props.addValueToActiveMultiFilter(e);
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

        this.props.submitFilters(newFilters);

        //Preferences
        let view = (this.state.selectedSummary === 'Financial') ? 'Financial' : 'Journey';

        let fin = this.convertFinId(this.state.financialsSummaryOptions);
        let journ = this.convertJournId(this.state.journeysSummaryViewOptions)

        this.props.updateUserSettings(newFilters, this.props.user, this.props.availableFilters, this.props.preferences.settingId);
        this.setState({ savedClicked: true });

        setTimeout(() => this.closeDialog(), 1500);
    }

    // Entered
    onMouseEnterHandler = () => {
    }

    //Left
    onMoueLeaveHandler = () => {
    }

    removeFilter(filterToRemove) {
        this.props.removeMultiFilter(filterToRemove);
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
    handleResetFiltersClick() {
        this.props.resetFilters(this.props.preferences);
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
    componentWillUnmount() {
        this.setState({ selectedFilters: [] })
    }
    closeSingleValue = (e) => {
        // console.log('Closing Single Value',e);
    }
    closeMultiValue = (e) => {
        // console.log('Closing Multivalue',e);
    }
    updateActiveFiltersHandler = (e) => {
        if (!_.find(this.state.selectedFilters, (item => { return item.index === e.index }))) {
            this.setState({ selectedFilters: [...this.state.selectedFilters, e] })
        }
        // this.props.addValueToActiveMultiFilter(e);
    }

    closed = (e) => {
        // console.log('Hello', this.state.selectedFilters);
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

        this.props.submitFilters(newFilters);
        //  this.props.getSummaryData(newFilters);
        // this.props.handleClose();

    }
    render() {
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
        });
        let { filters } = this.props;
        // const filtersApplied = this.generateFilterList(this.props.activeFilters);
        const defaultSum = this.state.selectedSummary || this.props.defaultSummaryView;
        const show = this.props.dialogIsOpen;
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
        const kendoDialog = show ? (
            <div className="content ">


                <div className="desktopDialog">
                    <Dialog width={939} height={626} title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>

                        {/* All the Contents */}
                        <div className="container-fluid">
                            <div className="col-lg-12 col-md-12">
                                {/* Filters */}
                                <p className="dialogTitles">Filters</p>
                                <p>Select which filters (if any) you would like applied:</p>
                                <div className="dropdowns contentpad">
                                    {/* first row */}
                                    <div className="row dropRow">
                                        <div className={' col-lg-2'} >
                                            <p> Quarter</p>
                                            <SingleValueSelect
                                                activeFilters={filters.quarter.valueFilters}
                                                options={filters.quarter.availableFilters}
                                                onValueChange={this.updateSingleValue}
                                                onMenuClose={this.closeSingleValue}
                                            />
                                        </div>
                                        <div className={' col-lg-5'} >
                                            <p> Geo</p>
                                            {/* <ReactSelect
                        updateFilter={this.updateActiveFiltersHandler}
                        defaultValue={this.props.activeFilters.geo[0]}
                        onClose={(e) => { this.closed(e) }}
                        options={this.props.availableFilters.geo}></ReactSelect> */}
                                            <MultiValueSelect
                                                options={filters.geo.availableFilters}
                                                onValueChange={(e) => { let type = 'geo'; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeMultiValue}
                                            />

                                        </div>
                                        <div className={' col-lg-5'} >
                                            <p> Market Area</p>
                                            <MultiValueSelect
                                                options={filters.market.availableFilters}
                                                onValueChange={(e) => { let type = MARKET; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeMultiValue}
                                                values={_.groupBy(this.state.selectedFilters, (item => { return item.category === MARKET }))}
                                            />
                                        </div>
                                        <div className={' col-lg-9'} >
                                            <p>  Route To Market</p>
                                            <MultiValueSelect
                                                options={filters.route.availableFilters}
                                                onValueChange={(e) => { let type = ROUTE; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeMultiValue}
                                            />
                                        </div>
                                        <div className={' col-lg-5'} >
                                            <p> Segment</p>
                                            <SingleValueSelect
                                                activeFilters={filters.segment.valueFilters}
                                                options={filters.segment.availableFilters}
                                                onValueChange={this.updateSingleValue}
                                                onMenuClose={this.closeSingleValue}
                                            />

                                        </div>
                                        <div className={' col-lg-6'} >
                                            <p> Subscription Offering</p>
                                            <MultiValueSelect
                                                options={filters.subscription.availableFilters}
                                                onValueChange={(e) => { let type = SUBSCRIPTION; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeMultiValue}
                                            />
                                        </div>
                                        <div className={' col-lg-12'} >
                                            <p> Product Name</p>
                                            <MultiValueSelect
                                                options={filters.product.availableFilters}
                                                onValueChange={(e) => { let type = PRODUCT; this.updateMultiValue(e, type) }}
                                                onMenuClose={this.closeMultiValue}
                                            />
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6">
                                        <a id="filter-reset" onClick={this.handleResetFiltersClick}>Re-set all filters</a>
                                    </div>


                                </div>
                                {/* 
                                Filters List
                                <div className="contentpad filterListItems">
                                    <p>Filters Applied:</p>

                                    <ul className="filterList">
                                        {filtersApplied.map((item) => {
                                            return <li key={this.state.filterListCount++} onClick={(e) => this.removeFilter(item)}
                                                onMouseEnter={this.onMouseEnterHandler}
                                                onMouseLeave={this.onMoueLeaveHandler}
                                                className="miniMultiFilter">
                                                {item.value}
                                            </li>
                                        })}
                                    </ul>
                                </div> */}

                            </div>

                        </div>

                        {/* Save Button */}
                        <button className="saveButton" onClick={this.saveChanges}>Save Changes</button>
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
        availableFilters: state.availableFilters,
        activeFilters: state.filters.combined,
        user: state.user,
        defaultView: state.preferences.defaultSummaryView,
        preferences: state.preferences,
        filters: state.filters
    }
}
export default connect(mapStateToProps, actions)(KendoDialog);
