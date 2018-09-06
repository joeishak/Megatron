import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
import {connect } from 'react-redux';
import * as actions from 'actions';
import '@progress/kendo-ui';
import {Slide,Animation } from '@progress/kendo-react-animation';
import {Grid, Row, Col } from 'react-bootstrap';
import styles from './KendoDialog.css';
import { Window } from '@progress/kendo-window-react-wrapper';
import $ from 'jquery';
import KendoDropDownList from '../KendoDropDownList/KendoDropDownList';
import ReactSelect from './Components/ReactSelect';



class KendoDialog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            selectedSummary: 'Financials',
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

    componentDidMount(){
    }

    onItemChecked(e) {
        e.preventDefault()

        if (e.target.name === 'summaryViewOptions') {
            this.setState({selectedSummary: e.target.id});
        } else if (e.target.name === 'financialsSummaryOptions') {
            this.setState({financialsSummaryOptions: e.target.id})
        } else if (e.target.name === 'journeysSummaryViewOptions') {
            this.setState({journeysSummaryViewOptions: e.target.id})
        }
 
    }
 
 
    render(){
        const show = this.props.dialogIsOpen
        const kendoDialog = show ? ( 
        <div className="content">

        {console.log('KendoDialog.js Available Filters',this.props.availableFilters)}

            <Dialog width={939} height={626}  title={"Data Preferences"} onClose={this.closeDialog} >
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
                                        <ReactSelect options={this.props.availableFilters.quarters}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Geo</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.geos}/> */}
                                        <ReactSelect options={this.props.availableFilters.geos}></ReactSelect>
                                    </div>
                                </div>
                                {/* second row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Product name</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.products}/> */}
                                        <ReactSelect options={this.props.availableFilters.products}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Subscription Offering</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} /> */}
                                        <ReactSelect options={this.props.availableFilters.subscriptionOfferings}></ReactSelect>
                                    </div>
                                </div>
                                {/* third row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Market Area</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.marketAreas} /> */}
                                        <ReactSelect options={this.props.availableFilters.marketAreas}></ReactSelect>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Route to Market</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.routeToMarkets}/> */}
                                        <ReactSelect options={this.props.availableFilters.routeToMarkets}></ReactSelect>
                                    </div>
                                </div>
                                {/* fourth row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Segment</p>
                                        {/* <KendoDropDownList  data={this.props.availableFilters.segments}/> */}
                                        <ReactSelect options={this.props.availableFilters.segments}></ReactSelect>
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
                                    <div className={`radio ${this.state.selectedSummary === 'Financials' ? 'radio-checked': ''}`}>
                                        <input id="Financials" name="summaryViewOptions" type="radio" checked={this.state.selectedSummary ==='Financials'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Financials" className="radio-label"><b>Financials</b></label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                            <div className="row">
                                    <div className={`radio ${this.state.selectedSummary === 'Journeys' ? 'radio-checked': ''}`}>
                                        <input id="Journeys" name="summaryViewOptions" type="radio" checked={this.state.selectedSummary ==='Journeys'}  onChange={ (e) => this.onItemChecked(e) }/>
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
                                    <div className={`radio ${this.state.financialsSummaryOptions === 'NetNewARR' ? 'radio-checked': ''}`}>
                                        <input id="NetNewARR" name="financialsSummaryOptions" type="radio" checked={this.state.financialsSummaryOptions ==='NetNewARR'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="NetNewARR" className="radio-label"><b>Net New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.financialsSummaryOptions === 'GrossNewArr' ? 'radio-checked': ''}`}>
                                        <input id="GrossNewArr" name="financialsSummaryOptions" type="radio" checked={this.state.financialsSummaryOptions ==='GrossNewArr'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="GrossNewArr" className="radio-label"><b>Gross New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.financialsSummaryOptions === 'CancellationsARR' ? 'radio-checked': ''}`}>
                                        <input id="CancellationsARR" name="financialsSummaryOptions" type="radio" checked={this.state.financialsSummaryOptions ==='CancellationsARR'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="CancellationsARR" className="radio-label"><b>Cancellations ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.financialsSummaryOptions === 'Renewal@FPARR' ? 'radio-checked': ''}`}>
                                        <input id="Renewal@FPARR" name="financialsSummaryOptions" type="radio" checked={this.state.financialsSummaryOptions ==='Renewal@FPARR'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Renewal@FPARR" className="radio-label"><b>Renewal@FP ARR</b></label>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row default-kpi-labels">Journeys Summary</div>
                            <div className="row ">
                                    <div className={`radio ${this.state.journeysSummaryViewOptions === 'Discover' ? 'radio-checked': ''}`}>
                                        <input id="Discover" name="journeysSummaryViewOptions" type="radio" checked={this.state.journeysSummaryViewOptions ==='Discover'}   onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Discover" className="radio-label"><b>Discover</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.journeysSummaryViewOptions === 'Try' ? 'radio-checked': ''}`}>
                                        <input id="Try" name="journeysSummaryViewOptions" type="radio"  checked={this.state.journeysSummaryViewOptions ==='Try'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Try" className="radio-label"><b>Try</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.journeysSummaryViewOptions === 'Buy' ? 'radio-checked': ''}`}>
                                        <input id="Buy" name="journeysSummaryViewOptions" type="radio" checked={this.state.journeysSummaryViewOptions ==='Buy'} onChange={ (e) => this.onItemChecked(e) } />
                                        <label htmlFor="Buy" className="radio-label"><b>Buy</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.journeysSummaryViewOptions === 'Use' ? 'radio-checked': ''}`}>
                                        <input id="Use" name="journeysSummaryViewOptions" type="radio"  checked={this.state.journeysSummaryViewOptions ==='Use'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Use" className="radio-label"><b>Use</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div className={`radio ${this.state.journeysSummaryViewOptions === 'Renew' ? 'radio-checked': ''}`}>
                                        <input id="Renew" name="journeysSummaryViewOptions" type="radio" checked={this.state.journeysSummaryViewOptions ==='Renew'} onChange={ (e) => this.onItemChecked(e) }/>
                                        <label htmlFor="Renew" className="radio-label"><b>Renew</b></label>
                                    </div>
                            </div>
                        </div>

                        

                        

                    </div>
                </div>
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
        availableFilters: state.availableFilters
    }
}
export default connect(mapStateToProps,actions)(KendoDialog);