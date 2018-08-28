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
        summaryType: "Financial",
        header: "Net New ARR",
        activeMetric: 'arr',
        activeTimeMetric: 'qtd'
    };

      /*Bindings  */


  }
  
  componentDidMount(){
 
  }

 

 
  render(){

    
 
    return (

      <div className="sumViewContainer container-fluid">
        <span onClick={this.props.hideSummaryDetails}> {this.state.summaryType} </span> <span> Summary > {this.state.header}</span>
        <br/>
        <span className="detailTitle">Net New ARR</span>
        <div className="multiChartMetricContainer">
            <div className="unitMetric" >
                Units
            </div>
            <div className="arrMetric">
                ARR
            </div>
        </div>
        <KendoMultiChart />
        <KendoPanelBar />
      </div>
  )
}
}

function mapStateToProps(state) {
  return {
   
 
  };
}

export default connect(mapStateToProps,actions)(SummaryViewDetails);