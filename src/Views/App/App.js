import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helper';

import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
// import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../../components/KendoDialog/KendoDialog';
import CommentBox from '../../components/CommentBox/CommentBox.jsx';
import ButtomSummaryBox from '../../components/BottomSummaryBox/BottomSummaryBox';
import FinancialSummary from '../../components/FinancialSummary/FinancialSummary.jsx';
import JourneySummary from '../../components/JourneySummary/JourneySummary.jsx';
import SummaryHOC from '../../components/SummaryHOC.js';
import Login from '../../components/Login/Login';
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
      dialogIsOpen: this.props.dialogIsOpen,
      authenticated: null,
      userinfo: null
      
    };


      /*Bindings  */
      this.checkAuthentication = checkAuthentication.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
      this.getFilters  =this.getFilters.bind(this);
      this.getSummary = this.getSummary.bind(this);
      this.login = this.login.bind(this);
      // this.props.getAdobeData();
      this.getFilters();
  }
 
  async componentDidMount() {
    this.checkAuthentication();
 

  }

   componentDidUpdate(prevProps) {
    this.checkAuthentication();
 
    if(prevProps.preferences !== this.props.preferences){
      if(this.props.preferences.defaultSummaryView === 'Financial'){
        this.props.updateSwitchFilterValue(false);

       
      } else{
        this.props.updateSwitchFilterValue(true);
     

      }
      this.props.addValueToActiveMultiFilter({index: 1, category:'quarters', value: this.props.preferences.defaultQuarter});
      this.props.addValueToActiveMultiFilter({index: 2, category:'segments', value: this.props.preferences.defaultSegment});
    }
    
   
  }

  async login() {
    this.props.auth.login('/');

  }

  getFilters(){
    this.props.generateFilterData();
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
        {this.state.authenticated &&
        <span>
          {/* Data Preferences */}
          <KendoDialog /> 
          <Navigation />
          <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
          {(this.props.commentBoxIsOpen) ? <CommentBox /> : null}
          <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>
          {this.getSummary()}
          </span>
        }
         {this.state.authenticated === false &&
              this.props.auth.login('/')
     
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dialogIsOpen: state.isDialogOpen, 
    detailIsOpen: state.detailsIsOpen,
    switchFilter: state.switchFilter,
    commentBoxIsOpen: state.commentBoxIsOpen,
    user: state.user,
    preferences: state.preferences,
    finData: state.ibeData,
    journeyData: state.journeyData
  };
}

export default connect(mapStateToProps, actions)(withAuth(App));