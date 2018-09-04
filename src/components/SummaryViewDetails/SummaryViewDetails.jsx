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
import KendoPanelBar from 'components/KendoPanelBar/KendoPanelBar.jsx';

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
    this.renderQuarterlyToDate = this.renderQuarterlyToDate.bind(this);
    this.renderQuarterlyToDateTableHeader = this.renderQuarterlyToDateTableHeader.bind(this);
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
renderQuarterlyToDateTableHeader(){
  switch(this.state.activeTimeMetric){
    case 'qtd':
    return(
      <div className=" qtdDetailTitle col-md-12">Quarterly To Date</div>
    );
    case 'week': 
    return(
      <div className=" weekDetailTitle col-md-12">Week</div>
    );
    case 'all': 
    return(

      <div className=" allContainer col-md-12">
      <div className=" allWeekDetailTitle col-md-6">Week</div> 
      <div className=" allQtdDetailTitle col-md-6">Quartely To Date</div>
      </div>
      
    );

  }
}
 renderQuarterlyToDate(qtdwColSizes ,qtdTotalTable){ 
   switch(this.state.activeTimeMetric){
     case 'qtd':
     return (
     <div className={qtdTotalTable + ' col-md-11'}>
     {
      this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>);
     case 'week':
     return (
      <div className={qtdTotalTable + ' col-md-11'}>
      {
       this.props.activeItem.details.qtdw.week.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>);
     case 'all': 
     return (
     <div className={qtdTotalTable + ' col-md-11'}>
      {
       this.props.activeItem.details.qtdw.week.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     {
       this.props.activeItem.details.qtdw.qtd.map(item=>{
         return(
          <div key={item.index} className={qtdwColSizes  + (item.header==="Vs Qrf"? ' redBG':' ')}>

          <span className="contHeader"> {item.header} </span>
          <span className="valHeader"> {item.value}</span>
       </div>
         )
       }).reverse()
     }
     </div>
     );
   }
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
 
    var qtdwColSizes = classNames({
      colContainer:true,
      normalSize: (this.state.activeTimeMetric === 'week' || this.state.activeTimeMetric === 'qtd') ? true : false,
      halfSize: (this.state.activeTimeMetric === 'all') ? true: false
    });

    var qtdTotalTable = classNames({
      qtdTotalTable: true,
      normalTableSize: (this.state.activeTimeMetric === 'week' || this.state.activeTimeMetric === 'qtd') ? true : false,
      halfTableSize: (this.state.activeTimeMetric === 'all') ? true: false
    })
    return (

      <div className="sumViewContainer container-fluid">
      {/* Bread Crumbs */}
        <span onClick={this.props.hideSummaryDetails}>
          {this.state.summaryType} </span> <span> Summary > {this.props.activeItem.header}
        </span>
        <br/>

        {/* First Row for Ttle Bar and Metric Filter */}
        <div className="row container-fluid titleBarHeader">

          <span className="col-md- 3 detailTitle">{this.props.activeItem.header}</span>
          <div className=" col-md-9 multiChartMetricContainer">
              <div onClick={this.updateMultiChartMetricFilter} className={UnitStyles}>
                  UNITS
              </div>
              <div onClick={this.updateMultiChartMetricFilter} className={ArrStyles}>
                  ARR
              </div>
          </div>
          <div className="chartContainer col-md-12">
            <KendoMultiChart color='black' />
          </div> 
        </div>
        {/* Second Row for Quarterly to Date title header */}
        <div className=" qtdTitleBarHeader container-fluid row">
        <span className="col-md- 3 detailTitle">Quarterly To Date</span>
          <div className=" col-md-9 totalTimeMetricContainer">
            <span className="totalFilterContainer">
              <div onClick={this.updateQtdMetricFilter} className={QTDStyles}>
                  QTD
              </div>
              <div onClick={this.updateQtdMetricFilter} className={WeekStyles}>
                  WEEK
              </div>
              <div onClick={this.updateQtdMetricFilter} className={AllStyles}>
                  ALL
              </div>
              </span>
          </div>
        </div> 
        
        <div className="  qtdTopDetails container-fluid row white">
          {this.renderQuarterlyToDateTableHeader()}
          <div className=" qtdTotalTitle col-md-12">
            <div className=" qtdTotalTitle col-md-1">Total</div>
              {this.renderQuarterlyToDate(qtdwColSizes,qtdTotalTable)}
          </div>
          
        </div>
        <KendoPanelBar timeMetric={this.state.activeTimeMetric} background='white'/>
      </div>
  )
}
}

function mapStateToProps(state) {
  return {
   
    previousViewWasJourneys: state.switchFilter,
    activeItem: state.activeSummarySquare,
    summaryData: state.adobeData
  };
}

export default connect(mapStateToProps,actions)(SummaryViewDetails);