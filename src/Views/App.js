import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
// import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../components/KendoDialog/KendoDialog';
import CommentBox from '../components/CommentBox/CommentBox.jsx';
import ButtomSummaryBox from '../components/BottomSummaryBox/BottomSummaryBox';
import FinancialSummary from '../components/FinancialSummary/FinancialSummary.jsx';
import JourneySummary from '../components/JourneySummary/JourneySummary.jsx';
import SummaryHOC from '../components/SummaryHOC.js';
class App extends Component {
  constructor(props) {
    super(props);
    /* Initializing local state */
    this.state ={
      index: 0,
      show: false,
      renderFooter: false,
      marketAreaFilters: this.props.activeFilters,
      filterPanelIsOpen: false,
      showDropDowns: false,
      dialogIsOpen: this.props.dialogIsOpen
      
    };


      /*Bindings  */
      this.renderBarGraph = this.renderBarGraph.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
      this.getFilters  =this.getFilters.bind(this);
      this.getSummary = this.getSummary.bind(this);
      
      this.props.getAdobeData();
      this.getFilters();
  }
 
  getFilters(){
    this.props.generateFilterData();
  }
  /* Sets the state passed to the bottom summary box so that it re renders */
  renderBarGraph(index){
    this.setState({renderFooter: !this.state.render});
  }
  /* Event Handler for the Filter Box to open the filter panel with the drop downs */
  openDialogFilterPanel(){
    // Opening the panel
    if(!this.state.filterPanelIsOpen){
      this.setState({showDropDowns: true});
      this.setState({filterPanelIsOpen: true})
    } else { /* Closing the Panel */

      this.setState({showDropDowns: false});
      // this.setState({filterPanelIsOpen: false});
      
      this.time = setTimeout(()=>{
      this.setState({filterPanelIsOpen: false});

        },300);
    }
    
  }

 
  getSummary(){
    switch(this.props.detailIsOpen){
      case true:
      return(
        <div style={{height:'100%'}}>
          <SummaryViewDetails />
        </div>
      )
      case false:
      if(this.props.switchFilter === false){
        return (
          <div style={{height:'100%'}}>
          <FinancialSummary  />
         </div>
        ) 
      } else{
        return (
          <div style={{height:'100%'}}>
         <JourneySummary />
        </div>
        )
      }
    }
  }
  render(){
    return (
      <div style={{height:'100%'}}>
          {/* Data Preferences */}
          <KendoDialog /> 
          <Navigation />
          <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
          {(this.props.commentBoxIsOpen) ? <CommentBox /> : null}
          <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>
          {this.getSummary()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    dialogIsOpen: state.isDialogOpen, 
    detailIsOpen: state.detailsIsOpen,
    switchFilter: state.switchFilter,
    commentBoxIsOpen: state.commentBoxIsOpen
  };
}

export default connect(mapStateToProps, actions)(App);