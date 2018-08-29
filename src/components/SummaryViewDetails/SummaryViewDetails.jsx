import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route,Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {Slide, Animation } from '@progress/kendo-react-animation';
import styles from './SummaryViewDetails.css';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar';

import KendoMultiChart from '../KendoMultiChart/KendoMultiChart';
// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';


// Custom Nivo Components
// import { changeAuth } from '../actions';


class SummaryViewDetails extends Component {
  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state ={
        summaryType: (this.props.previousViewWasJourneys) ? "Journeys": "Financials",
        header: "Net New ARR",
        activeMetric: 'arr',
        activeTimeMetric: 'qtd'
    };

      /*Bindings  */
    this.updateMultiChartMetricFilter = this.updateMultiChartMetricFilter.bind(this);
    this.updateQtdMetricFilter = this.updateQtdMetricFilter.bind(this);
  }
  
  componentDidMount(){
 
  }

 updateMultiChartMetricFilter(e){
   // Either be 'units' or 'arr'
  this.setState({activeMetric: e.target.innerHTML.toLowerCase()})
 }
 updateQtdMetricFilter(e){
   //Either be 'qtd', 'week' or 'all'
 this.setState({activeTimeMetric: e.target.innerHTML.toLowerCase()})
}

 
  render(){

    var UnitStyles = classNames({
      unitMetric: true,
      activeMetric: (this.state.activeMetric === 'units') ? true: false
    });

    var ArrStyles = classNames({
      arrMetric: true,
      activeMetric: (this.state.activeMetric === 'arr') ? true: false
    });
    var QTDStyles = classNames({
      qtdMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'qtd') ? true: false
    });
    var WeekStyles = classNames({
      weekMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'week') ? true: false
    });
    var AllStyles = classNames({
      allMetric: true,
      activeTimeMetric: (this.state.activeTimeMetric === 'all') ? true: false
    });
 
    return (

      <div className="sumViewContainer container-fluid">
      {/* Bread Crumbs */}
        <span onClick={this.props.hideSummaryDetails}> {this.state.summaryType} </span> <span> Summary > {this.state.header}</span>
        <br/>

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">

          <span className="col-md- 3 detailTitle">Net New ARR</span>
          <div className=" col-md-9 multiChartMetricContainer">
              <div onClick={this.updateMultiChartMetricFilter} className={UnitStyles}>
                  UNITS
              </div>
              <div onClick={this.updateMultiChartMetricFilter} className={ArrStyles}>
                  ARR
              </div>
          </div>
          <div className="col-md-12">
            <KendoMultiChart />
          </div> 
        </div>
        <div className=" qtdTitleBarHeader container-fluid row">
        <span className="col-md- 3 detailTitle">Quarterly To Date</span>
          <div className=" col-md-9 totalTimeMetricContainer">
              <div onClick={this.updateQtdMetricFilter} className={QTDStyles}>
                  QTD
              </div>
              <div onClick={this.updateQtdMetricFilter} className={WeekStyles}>
                  WEEK
              </div>
              <div onClick={this.updateQtdMetricFilter} className={AllStyles}>
                  ALL
              </div>
          </div>
        </div>
        
        <KendoPanelBar />
      </div>
  )
}
}

function mapStateToProps(state) {
  return {
   
    previousViewWasJourneys: state.switchFilter
  };
}

export default connect(mapStateToProps,actions)(SummaryViewDetails);