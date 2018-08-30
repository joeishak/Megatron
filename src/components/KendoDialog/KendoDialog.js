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


class KendoDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
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
                                        <KendoDropDownList  data={this.props.availableFilters.quarters}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Geo</p>
                                        <KendoDropDownList  data={this.props.availableFilters.geos}/>
                                    </div>
                                </div>
                                {/* second row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Product name</p>
                                        <KendoDropDownList  data={this.props.availableFilters.products}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Subscription Offering</p>
                                        <KendoDropDownList  data={this.props.availableFilters.subscriptionOfferings} />
                                    </div>
                                </div>
                                {/* third row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Market Area</p>
                                        <KendoDropDownList  data={this.props.availableFilters.marketAreas} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <p>Route to Market</p>
                                        <KendoDropDownList  data={this.props.availableFilters.routeToMarkets}/>
                                    </div>
                                </div>
                                {/* fourth row */}
                                <div className="row dropRow">
                                    <div className="col-lg-6 col-md-6">
                                        <p>Segment</p>
                                        <KendoDropDownList  data={this.props.availableFilters.segments}/>
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
                                    <div class="radio radio-checked">
                                        <input id="radio-1" name="group1" type="radio" checked/>
                                        <label for="radio-1" class="radio-label"><b>Financials</b></label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                            <div className="row">
                                    <div class="radio ">
                                        <input id="radio-2" name="group1" type="radio"  />
                                        <label for="radio-2" class="radio-label"><b>Journeys</b></label>
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
                                    <div class="radio ">
                                        <input id="radio-3" name="group2" type="radio" />
                                        <label for="radio-3" class="radio-label"><b>Net New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-4" name="group2" type="radio" />
                                        <label for="radio-4" class="radio-label"><b>Gross New ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio radio-checked">
                                        <input id="radio-5" name="group2" type="radio" checked/>
                                        <label for="radio-5" class="radio-label"><b>Cancellations ARR</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-6" name="group2" type="radio" />
                                        <label for="radio-6" class="radio-label"><b>Renewal@FP ARR</b></label>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="row default-kpi-labels">Journeys Summary</div>
                            <div className="row ">
                                    <div class="radio radio-checked">
                                        <input id="radio-7" name="group3" type="radio" checked/>
                                        <label for="radio-7" class="radio-label"><b>Discover</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-8" name="group3" type="radio" />
                                        <label for="radio-8" class="radio-label"><b>Try</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-9" name="group3" type="radio" />
                                        <label for="radio-9" class="radio-label"><b>Buy</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-10" name="group3" type="radio" />
                                        <label for="radio-10" class="radio-label"><b>Use</b></label>
                                    </div>
                            </div>
                            <div className="row pullUp">
                                    <div class="radio ">
                                        <input id="radio-11" name="group3" type="radio" />
                                        <label for="radio-11" class="radio-label"><b>Renew</b></label>
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