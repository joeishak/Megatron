import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect} from 'react-redux';
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
import PrimaryContentList from '../../components/PrimaryContent/PrimaryContentList.jsx';
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
      this.props.getIbHeartbeat();
      this.getFilters('fin');
  }

 
  async componentDidMount() {
    this.checkAuthentication();
    
  }

  componentDidUpdate(prevProps) {

    this.checkAuthentication();
    let prevPropsIsEmpty= Object.keys(prevProps.preferences).length === 0;
    let propsNotEmpty = this.props.preferences.defaultSummaryView !== undefined
    if( prevPropsIsEmpty && propsNotEmpty){

      if(this.props.preferences.defaultSummaryView === 'Financial'){
        this.props.updateSwitchFilterValue(false);
      } else{
        this.props.updateSwitchFilterValue(true);
      }
      this.props.addValueToActiveMultiFilter({index: 1, category:'quarters', value: this.props.preferences.defaultQuarter});
      this.props.addValueToActiveMultiFilter({index: 2, category:'segments', value: this.props.preferences.defaultSegment});
      if(this.props.preferences.geoFilters!==""){
        this.props.preferences.geoFilters.forEach(ele => {
          this.props.addValueToActiveMultiFilter(ele);
        });
      }
      // this.props.addValueToActiveMultiFilter(this.props.preferences.geoFilters);
      if(this.props.preferences.productFilters !== ""){
        this.props.preferences.productFilters.forEach(ele => {
          this.props.addValueToActiveMultiFilter(ele);
        });
      }
      // this.props.addValueToActiveMultiFilter(this.props.preferences.productFilters);
      if(this.props.preferences.routeFilters !== ""){

      this.props.preferences.routeFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
    }
      // this.props.addValueToActiveMultiFilter(this.props.preferences.routeFilters);
      if(this.props.preferences.marketFilters !== ""){
      this.props.preferences.marketFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
    }
      // this.props.addValueToActiveMultiFilter(this.props.preferences.marketFilters);
      if(this.props.preferences.subscriptionFilters !== ""){
      this.props.preferences.subscriptionFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
    }
      // this.props.addValueToActiveMultiFilter(this.props.preferences.subscriptionFilters);
    }
  }

  async login() {
    this.props.auth.login('/');
  }
  getFilters(){
    this.props.generateFilterData('fin');
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


  updateActivePrimary(index){
    console.log(index)
    this.props.updateActivePrimaryCard(index);
  }
  render(){
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    return (
      <div style={{height:'100%'}}>
        {this.state.authenticated &&
        <span>
          {/* Data Preferences */}
          {kdialog}
          <Navigation />
          <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
   
          {(this.props.commentBoxIsOpen) ? <CommentBox /> : null}

          <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>
          
          <div style={{width:'100%', height: '1050px', backgroundColor: '#1f1f1f'}}>
          <PrimaryContentList 
                            onCommentIconClick={()=>{console.log('hello world');}}
                            toggleCommentary={true} 
                            activeCard={this.props.activePrimaryCard } 
                            data = {this.props.primaryData} 
                            enableChart={()=>{console.log('hello world');}} 
                            selectedCard={(e,index) =>{this.updateActivePrimary(index)}} /> 
          {/* Secondary */}
       
          {/* DEtails */}  
          </div>
          {/* {this.getSummary()} */}
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
  console.log('debug', state);
  return {
    dialogIsOpen: state.isDialogOpen, 
    detailIsOpen: state.detailsIsOpen,
    switchFilter: state.switchFilter,
    commentBoxIsOpen: state.commentBoxIsOpen,
    user: state.user,
    preferences: state.preferences,
    finData: state.ibeData,
    journeyData: state.journeyData,
    primaryData: state.primaryData,
    activePrimaryCard: state.activeCards.primary,
    activeSecondaryCard: state.activeCards.secondary
  };
}

export default connect(mapStateToProps, actions)(withAuth(App));