import React, { Component } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import {connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
import styles from './KendoDialog.css';
import $ from 'jquery';
import ReactSelect from './Components/ReactSelect';
import * as _ from 'lodash'



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
        };
        
        this.closeDialog = this.closeDialog.bind(this)      
        $('.content').kendoWindow({
            animation:true
        })
 
    }
    


    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.open();
    }

    resize() {
    }

    open() {
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()});
    }
    closeDialog () {
        this.props.updateDialogVisibility(false);
        this.setState({savedClicked: undefined});
    }

    onItemChecked(e) {
        e.preventDefault()



        //TODO:  3 Different Actions for updating the defaultSummary, defaultFinKpi and defaultJournKpi
        if (e.target.name === 'summaryViewOptions') {
            switch(e.target.id){
                case "Financials":
                this.props.updateDefaultSummaryPreference('Financial');
                this.setState({selectedSummary: 'Financial'});
                break;
                case "Journeys":
                this.props.updateDefaultSummaryPreference('Journey');
                this.setState({selectedSummary: 'Journey'});
                break;
                default:
                break;
                
            }
        } else if (e.target.name === 'financialsSummaryOptions') {
            this.setState({financialsSummaryOptions: e.target.id});
            // this.props.updateDefaultFinKpiPreference(this.convertFinId(e.target.id));
        } else if (e.target.name === 'journeysSummaryViewOptions') {
            this.setState({journeysSummaryViewOptions: e.target.id})
            // this.props.updateDefaultJournKpiPreference(this.convertJournId(e.target.id));
        }
 
    }

    updateActiveFiltersHandler = (e) => {
        this.props.addValueToActiveMultiFilter(e);
    }

    convertFinId(id){
        
        switch(id){
            case 'NetNewArr':
            return  1;
            break;
            case 'GrossNewArr':
            return  2;
            break;
            case 'CancellationsARR':
            return  3;
            break;
            case 'Renewal@FPARR':
            return 4;
            break;
            default:
            return 1;
            break;
        }
    }
    convertJournId(id){
        switch(id){
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

        let view = (this.state.selectedSummary ==='Financial')? 'Financial': 'Journey';

        let fin = this.convertFinId(this.state.financialsSummaryOptions);
        let journ = this.convertJournId(this.state.journeysSummaryViewOptions)
       
        this.props.updateUserSettings(this.props.activeFilters,this.props.user, view, fin,journ ,this.props.availableFilters,this.props.preferences.settingId);
        this.setState({savedClicked: true});
        
        setTimeout(() => this.closeDialog(), 1500);
    }

    // Entered
    onMouseEnterHandler = () => {
      
    }

    //Left
    onMoueLeaveHandler = () => {
      
    }
    
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
 
    render(){

        
        const filtersApplied = this.generateFilterList(this.props.activeFilters);
        const defaultSum = this.state.selectedSummary || this.props.defaultSummaryView;
        const show = this.props.dialogIsOpen
        const kendoDialog = show ? ( 
        <div className="content ">
                    
            
            <div className="desktopDialog">
                <Dialog width={939} height={626}  title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>

                {/* All the Contents */}
                <div className="container-fluid">
                    <div className="col-lg-6 col-md-6">
                    {/* Filters */}
                        <p className="dialogTitles">Filters</p>
                        <p>Select which filters (if any) you would like applied:</p>
                            <div className="dropdowns contentpad">
                                {/* first row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Quarter</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.quarters}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} defaultValue={this.props.activeFilters.quarters} options={this.props.availableFilters.quarters} ></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Geo</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.geos}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} defaultValue={this.props.activeFilters.geos[0]} options={this.props.availableFilters.geos} ></ReactSelect>
                                    </div>
                                </div>
                        
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Product name</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.products}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} defaultValue={this.props.activeFilters.products[0]} options={this.props.availableFilters.products}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Subscription Offering</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} /> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} defaultValue={this.props.activeFilters.subscriptions[0]} options={this.props.availableFilters.subscriptionOfferings}></ReactSelect>
                                    </div>
                                </div>
                                {/* third row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Market Area</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  defaultValue={this.props.activeFilters.markets[0]} options={this.props.availableFilters.marketAreas} ></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Route to Market</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.routeToMarkets}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  defaultValue={this.props.activeFilters.routes[0]} options={this.props.availableFilters.routeToMarkets}></ReactSelect>
                                    </div>
                                </div>
                                {/* fourth row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Segment</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.segments}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  defaultValue={this.props.activeFilters.geos[0]}defaultValue={this.props.activeFilters.segments} options={this.props.availableFilters.segments}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p id="filter-reset">Re-set all filters</p>
                                    </div>
                                </div>

                            </div>

                                {/* Filters List */}
                            <div className="contentpad filterListItems">
                                <p>Filters Applied:</p>
                                
                                <ul className="filterList">
                                    {filtersApplied.map((item) => {
                                        return <li onClick={(e) => this.removeFilter(item)} 
                                        onMouseEnter={this.onMouseEnterHandler} 
                                        onMouseLeave={this.onMoueLeaveHandler} 
                                        className="miniMultiFilter">
                                            {item.value}
                                        </li>
                                    })}
                                </ul>
                            </div>

                    </div>
                    
                </div>

                {/* Save Button */}
                <button className="saveButton" onClick={this.saveChanges}>Save Changes</button>
                </Dialog>
            </div>
            <div className="mobileDialog"> 
                <Dialog width={window.innerWidth - 19} height={window.innerHeight}  title={`Data Preferences`} onClose={this.closeDialog}></Dialog>
            </div>
        </div>) : null;

        const savedPrompt =  show ? (
            <div className="content">
                <Dialog width={939} height={626}  title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>

                    <div className="container-fluid savedContainer">
                        <h1>Saved!</h1>
                    </div>

                </Dialog>
            </div>

        ) : null;

                                    
        const screenView = this.state.savedClicked ? savedPrompt : kendoDialog;

        return(
            <div className="dialogContainer fluid">
                {screenView}
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return {
        dialogIsOpen: state.isDialogOpen,
        availableFilters: state.availableFilters,
        activeFilters: state.activeFilters,
        user: state.user,
        defaultView: state.preferences.defaultSummaryView,
        preferences: state.preferences
    }
}
export default connect(mapStateToProps,actions)(KendoDialog);