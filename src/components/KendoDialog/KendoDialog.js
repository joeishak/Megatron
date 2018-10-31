import React, { Component } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import {connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
import styles from './KendoDialog.css';
import $ from 'jquery';
import ReactSelect from './Components/ReactSelect';



class KendoDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            selectedSummary: undefined,
            financialsSummaryOptions: 'CancellationsARR',
            journeysSummaryViewOptions: 'Discover'
        };
        
        this.closeDialog = this.closeDialog.bind(this)      
        $('.content').kendoWindow({
            animation:true
        })
    }
    open() {
        $("[data-role='window']").each(function (index) {
            $(this).data('kendoWindow').open()});
    }
    closeDialog () {
        this.props.updateDialogVisibility(false);
    }


    // componentDidUpdate(prevProps){
    //   if ( this.props.preferences !== prevProps.preferences){
    //     this.setState({selectedSummary: this.props.preferences.defaultSummaryView});
    //   }
    // }
    onItemChecked(e) {
        e.preventDefault()

        console.log(e.target.id);


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
            this.props.updateDefaultFinKpiPreference(this.convertFinId(e.target.id));
        } else if (e.target.name === 'journeysSummaryViewOptions') {
            this.setState({journeysSummaryViewOptions: e.target.id})
            this.props.updateDefaultJournKpiPreference(this.convertJournId(e.target.id));
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
            case 'Try':
            return 2;
            break;
            case 'Buy':
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
        console.log('save changes button clicked');

        let view = (this.state.selectedSummary ==='Financial')? 'Financial': 'Journey';

        let fin = this.convertFinId(this.state.financialsSummaryOptions)
        let journ = this.convertJournId(this.state.journeysSummaryViewOptions)
        // switch(this.state.financialsSummaryOptions){
        //     case 'NetNewArr':
        //     fin = 1;
        //     break;
        //     case 'GrossNewArr':
        //     fin = 2;
        //     break;
        //     case 'CancellationsARR':
        //     fin = 3;
        //     break;
        //     case 'Renewal@FPARR':
        //     fin = 4;
        //     break;
        //     default:
        //     fin = 1;
        //     break;
        // }

        // switch(this.state.journeysSummaryViewOptions){
        //     case 'Discover':
        //     journ = 1;
        //     break;
        //     case 'Try':
        //     journ = 2;
        //     break;
        //     case 'Buy':
        //     journ = 3;
        //     break;
        //     case 'Use':
        //     journ = 4;
        //     break;
        //     case 'Renew':
        //     journ = 5;
        //     break;
        //     default: 
        //     journ = 1;
        //     break;
        // }
        this.props.updateUserSettings(this.props.activeFilters,this.props.user, view, fin,journ ,this.props.availableFilters,this.prefernces.settingId);
        // this.props.saveSettings()
    }


    findFilter = (activeFilters, category) => {

        for (let i = 0; i < activeFilters.length; i++) {
            switch(category) {
                case 'geos':
                    const geoIndex = activeFilters.findIndex(x => x.category === category);

                    return [activeFilters[geoIndex]];
                case 'marketAreas':
                    const marketAreasIndex = activeFilters.findIndex(x => x.category === category);
                    
                    return [activeFilters[marketAreasIndex]];
                case 'productNames':
                    const productNamesIndex = activeFilters.findIndex(x => x.category === category);
      
                    return [activeFilters[productNamesIndex]];
                case 'quarters':
                    const quartersIndex = activeFilters.findIndex(x => x.category === category);
      
                    return [activeFilters[quartersIndex]];
                case 'routeToMarkets':
                    const routeToMarketsIndex = activeFilters.findIndex(x => x.category === category);
 
                    return [activeFilters[routeToMarketsIndex]];
                case 'segments':
                    const segmentsIndex = activeFilters.findIndex(x => x.category === category);
     
                    return [activeFilters[segmentsIndex]];
                case 'subscriptionOfferings':
                    const subscriptionOfferingsIndex = activeFilters.findIndex(x => x.category === category);

                    return [activeFilters[subscriptionOfferingsIndex]];
                    default: break;
            }
        }
    }
 
 
    render(){

        const defaultSum = this.state.selectedSummary || this.props.defaultSummaryView;
        const show = this.props.dialogIsOpen
        const kendoDialog = show ? ( 
        <div className="content">

        {/* {console.log('KendoDialog.js Available Filters',this.props.availableFilters)} */}
                {/* `col journeysAmount k-float-left ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : '' */}
            <Dialog width={939} height={626}  title={`Data Preferences for ${this.props.user.name} `} onClose={this.closeDialog}>
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
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} options={this.props.availableFilters.quarters} defaultValue={this.findFilter(this.props.activeFilters, 'quarters')}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Geo</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.geos}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  options={this.props.availableFilters.geos} defaultValue={this.findFilter(this.props.activeFilters, 'geos')}></ReactSelect>
                                    </div>
                                </div>
                                {/* second row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Product name</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.products}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  options={this.props.availableFilters.products} defaultValue={this.findFilter(this.props.activeFilters, 'productNames')}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Subscription Offering</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} /> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler} options={this.props.availableFilters.subscriptionOfferings} defaultValue={this.findFilter(this.props.activeFilters, 'subscriptionOfferings')}></ReactSelect>
                                    </div>
                                </div>
                                {/* third row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Market Area</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  options={this.props.availableFilters.marketAreas} defaultValue={this.findFilter(this.props.activeFilters, 'marketAreas')}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Route to Market</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.routeToMarkets}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  options={this.props.availableFilters.routeToMarkets} defaultValue={this.findFilter(this.props.activeFilters, 'routeToMarkets')}></ReactSelect>
                                    </div>
                                </div>
                                {/* fourth row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Segment</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.segments}/> */}
                                        <ReactSelect updateFilter={this.updateActiveFiltersHandler}  options={this.props.availableFilters.segments} defaultValue={this.findFilter(this.props.activeFilters, 'segments')}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p id="filter-reset">Re-set all filters</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    {/* Views */}
                        <p className="dialogTitles">Summary view</p>
                        <p>Select which filters (if any) you would like applied:</p>

                        <fieldset className="contentpad" id="group1">

                            <div className="col-lg-6 col-md-6">
                                <div className="row">
                                    <div className={`radio ${this.props.defaultView === 'Financial' ? 'radio-checked': ''}`}>
                                        <input id="Financials" name="summaryViewOptions" type="radio" checked={this.props.defaultView ==='Financial'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Financials" className="radio-label"><b>Financials</b></label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                            <div className="row">
                                    <div className={`radio ${this.props.defaultView === 'Journey' ? 'radio-checked': ''}`}>
                                        <input id="Journeys" name="summaryViewOptions" type="radio" checked={this.props.defaultView === 'Journey'}  onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Journeys" className="radio-label"><b>Journeys</b></label>
                                    </div>
                                </div>
                            </div>

                        </fieldset>

                        <div className="contentpad">
                            <p className="dialogTitles">Default KPIs</p>
                            <p>Select the preffered summary KPI to be highlighted:</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row default-kpi-labels">Financials Summary</div>
                            <div className="row">
                                    <div className={`radio ${this.props.defaultFin.toString() === '1' ? 'radio-checked': ''}`}>
                                        <input id="NetNewARR" name="financialsSummaryOptions" type="radio" checked={this.props.defaultFin.toString()  === '1' } onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="NetNewARR" className="radio-label"><b>Net New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultFin.toString()  === '2' ? 'radio-checked': ''}`}>
                                        <input id="GrossNewArr" name="financialsSummaryOptions" type="radio" checked={this.props.defaultFin.toString() === '2'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="GrossNewArr" className="radio-label"><b>Gross New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultFin.toString()  === '3' ? 'radio-checked': ''}`}>
                                        <input id="CancellationsARR" name="financialsSummaryOptions" type="radio" checked={this.props.defaultFin.toString()  === '3'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="CancellationsARR" className="radio-label"><b>Cancellations ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultFin.toString()  === '4' ? 'radio-checked': ''}`}>
                                        <input id="Renewal@FPARR" name="financialsSummaryOptions" type="radio" checked={this.props.defaultFin.toString()  === '4'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Renewal@FPARR" className="radio-label"><b>Renewal@FP ARR</b></label>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row default-kpi-labels">Journeys Summary</div>
                            <div className="row ">
                                    <div className={`radio ${this.props.defaultJourn.toString() === '1' ? 'radio-checked': ''}`}>
                                        <input id="Discover" name="journeysSummaryViewOptions" type="radio" checked={this.props.defaultJourn.toString() === '1'}   onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Discover" className="radio-label"><b>Discover</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultJourn.toString() === '2' ? 'radio-checked': ''}`}>
                                        <input id="Try" name="journeysSummaryViewOptions" type="radio"  checked={this.props.defaultJourn.toString() === '2'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Try" className="radio-label"><b>Try</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultJourn.toString() === '3' ? 'radio-checked': ''}`}>
                                        <input id="Buy" name="journeysSummaryViewOptions" type="radio" checked={this.props.defaultJourn.toString() === '3'} onChange={ (e) => this.onItemChecked(e) } />
                                        <label htmlFor="Buy" className="radio-label"><b>Buy</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultJourn.toString() === '4' ? 'radio-checked': ''}`}>
                                        <input id="Use" name="journeysSummaryViewOptions" type="radio"  checked={this.props.defaultJourn.toString() === '4'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Use" className="radio-label"><b>Use</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.props.defaultJourn.toString() === '5' ? 'radio-checked': ''}`}>
                                        <input id="Renew" name="journeysSummaryViewOptions" type="radio" checked={this.props.defaultJourn.toString() === '5'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Renew" className="radio-label"><b>Renew</b></label>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            {/* Save Button */}
            <button className="saveButton" onClick={this.saveChanges}>
                Save Changes
            </button>
             
            </Dialog>

         </div>
            
            ) : null;
        return(
            <div className="dialogContainer fluid">
              {kendoDialog}
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
        defaultFin : state.preferences.defaultFinKpi,
        defaultJourn: state.preferences.defaultJournKpi,
        preferences: state.preferences
    }
}
export default connect(mapStateToProps,actions)(KendoDialog);