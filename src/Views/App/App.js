import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';
import {connect} from 'react-redux';
import * as actions from 'actions';
import * as utils from '../../utilities.js';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helper';


import '@progress/kendo-theme-default/dist/all.css';
// Kendo Components

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
import Playground from '../../components/MobileComponents/Playground/Playground.jsx';
// import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../../components/KendoDialog/KendoDialog';
import CommentBox from '../../components/CommentBox/CommentBox.jsx';
import ButtomSummaryBox from '../../components/BottomSummaryBox/BottomSummaryBox';
import FinancialSummary from '../../components/FinancialSummary/FinancialSummary.jsx';
import JourneySummary from '../../components/JourneySummary/JourneySummary.jsx';
import PrimaryContentList from '../../components/PrimaryContent/PrimaryContentList.jsx';
import SecondaryContentList from '../../components/SecondaryContent/SecondaryContentList.jsx';
import FilterPage from '../../components/MobileComponents/FitlerPage/FilterPage.jsx';

import SummaryHOC from '../../components/SummaryHOC.js';
import Login from '../../components/Login/Login';
import { timingSafeEqual } from 'crypto';
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
      userinfo: null,
      window: {
        height: window.innerHeight,
        weidth: window.innerWidth
      }
    };


      /*Bindings  */
      this.checkAuthentication = checkAuthentication.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
      this.getFilters  =this.getFilters.bind(this);
      // this.getSummary = this.getSummary.bind(this);
      this.login = this.login.bind(this);
      // this.props.getAdobeData();
      this.props.getIbHeartbeat();
      this.getFilters('fin');
  }

  resize() {
    // console.log('debug', window.innerWidth)
    const appSettings = {
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
    this.props.setAppSettings(appSettings);
    this.setState({
      window: appSettings.window
    });
    // console.log('debug',utils.getDeviceType(this.state.window))
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.checkAuthentication();
  }

  componentDidUpdate(prevProps) {

    // If the old available filters change or the active filters change
         // Call for new data with the filters
    // if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
    //   this.props.getPrimaryData(this.props.activeFilters, this.props.availableFilters);
    // }
    // let prevPropsIsEmpty= Object.keys(prevProps.preferences).length === 0;
    // let propsNotEmpty = this.props.preferences.defaultSummaryView !== undefined
    // if( prevPropsIsEmpty && propsNotEmpty){

    //   if(this.props.preferences.defaultSummaryView === 'Financial'){
    //     this.props.updateSwitchFilterValue(false);
    //   } else{
    //     this.props.updateSwitchFilterValue(true);
    //   }
    //   this.props.addValueToActiveMultiFilter({index: 1, category:'quarters', value: this.props.preferences.defaultQuarter});
    //   this.props.addValueToActiveMultiFilter({index: 2, category:'segments', value: this.props.preferences.defaultSegment});
    //   if(this.props.preferences.geoFilters!==""){
    //     this.props.preferences.geoFilters.forEach(ele => {
    //       this.props.addValueToActiveMultiFilter(ele);
    //     });
    //   }
    //   // this.props.addValueToActiveMultiFilter(this.props.preferences.geoFilters);
    //   if(this.props.preferences.productFilters !== ""){
    //     this.props.preferences.productFilters.forEach(ele => {
    //       this.props.addValueToActiveMultiFilter(ele);
    //     });
    //   }
    //   // this.props.addValueToActiveMultiFilter(this.props.preferences.productFilters);
    //   if(this.props.preferences.routeFilters !== ""){

    //   this.props.preferences.routeFilters.forEach(ele => {
    //     this.props.addValueToActiveMultiFilter(ele);
    //   });
    // }
    //   // this.props.addValueToActiveMultiFilter(this.props.preferences.routeFilters);
    //   if(this.props.preferences.marketFilters !== ""){
    //   this.props.preferences.marketFilters.forEach(ele => {
    //     this.props.addValueToActiveMultiFilter(ele);
    //   });
    // }
    //   // this.props.addValueToActiveMultiFilter(this.props.preferences.marketFilters);
    //   if(this.props.preferences.subscriptionFilters !== ""){
    //   this.props.preferences.subscriptionFilters.forEach(ele => {
    //     this.props.addValueToActiveMultiFilter(ele);
    //   });
    // }
    //   // this.props.addValueToActiveMultiFilter(this.props.preferences.subscriptionFilters);
    // }
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
  // getSummary(){
  //   switch(this.props.detailIsOpen){
  //     case true:
  //     return(
  //       <div style={{height:'100%'}}>
  //         <SummaryViewDetails />
  //       </div>
  //     )
  //     case false:
  //     if(this.props.switchFilter === false){
  //       return (
  //         <div style={{height:'100%'}}>
  //         <FinancialSummary  />
  //        </div>
  //       ) 
  //     } else{
  //       return (
  //         <div style={{height:'100%'}}>
  //        <JourneySummary />
  //       </div>
  //       )
  //     }
  //   }
  // }

  updateActivePrimary(index){
    this.props.updateActivePrimaryCard(index);
    this.props.updateActiveSecondaryCard(0);
  }
  updateActiveSecondary(index){
    // console.log(index)
    this.props.updateActiveSecondaryCard(index);
  }
  updateMobileView(toUpdateTo) {
    console.log(toUpdateTo);
  }

  onCommentIconClick = () => {
    this.props.showCommentBox();
  }

  getPrimaryContent = () => {
    return (<PrimaryContentList 
      onCommentIconClick={this.onCommentIconClick}
      toggleCommentary={this.props.toggleCommentary} 
      activeCard={this.props.activePrimaryCard } 
      data = {this.props.primaryData} 
      enableChart={()=>{console.log('hello world');}} 
      selectedCard={(e,index) =>{this.updateActivePrimary(index)}} 
      deviceType= {this.props.deviceType}/> 

    );
  }

  getSecondaryContent = () => {
    // Logic to render depending on App settings. this.props.appSettings.window.height and this.props.appSettings.window.width
    return ( <SecondaryContentList
      data={this.props.secondaryData}
      activeJourneyCard = {this.props.activeSecondaryCard}
      onJourneyCardClicked={(e,index) => {this.updateActiveSecondary(index)}}
      onCommentIconClick={this.onCommentIconClick}
      toggleCommentary={this.props.toggleCommentary} 
      deviceType= {this.props.deviceType}
      activePrimary={this.props.activePrimaryCard}
      primaryDataCategory={this.props.primaryData[this.props.activePrimaryCard].category}
      updateMobileView={(e, updateTo) => {this.updateMobileView(updateTo)}}
    />);

    // const tabletContent = (<div>Tablet Content!</div>);

    // const mobileContent = (<div>Mobile Content1</div>);

    // if (utils.getDeviceType(this.props.appSettings.window).includes('mobile')) {
    //   secondaryRender = mobileContent;
    // }

    // if (utils.getDeviceType(this.props.appSettings.window).includes('laptop')) {
    //   secondaryRender = dekstopContent;
    // }

    // if (utils.getDeviceType(this.props.appSettings.window).includes('tablet')) {
    //   secondaryRender = tabletContent;
    // }
    // return secondaryRender;
  }


  render(){
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    const isMobileOrTablet = utils.getDeviceType(this.state.window).includes('mobile') || utils.getDeviceType(this.state.window).includes('tablet');


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
          
          <div style={{width:'100%', height: '1050px'}}>

              {/* <FilterPage activeFilters={this.props.activeFilters} availableFilters={this.props.availableFilters}></FilterPage> */}

              {/* Primary */}
              {/* {this.getPrimaryContent()} */}

              {/* Secondary */}      
              {this.getSecondaryContent()}

              {/* Playground */}
              {/* <Playground></Playground> */}
         
          </div>
         
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
  console.log('app state', state);
  return {
    activeFilters: state.activeFilters,
    availableFilters: state.availableFilters,
    dialogIsOpen: state.isDialogOpen, 
    detailIsOpen: state.detailsIsOpen,
    activeFilters: state.activeFilters,
    availableFilters: state.availableFilters,
    switchFilter: state.switchFilter,
    commentBoxIsOpen: state.commentBoxIsOpen,
    user: state.user,
    preferences: state.preferences,
    finData: state.ibeData,
    journeyData: state.journeyData,
    primaryData: state.primaryData,
    activePrimaryCard: state.activeCards.primary,
    activeSecondaryCard: state.activeCards.secondary,
    secondaryData: state.secondaryData,
    appSettings: state.appSettings,
    deviceType: state.appSettings.deviceType,
    toggleCommentary: state.toggleCommentaryBox,
    window: state.appSettings.window
  };
}

export default connect(mapStateToProps, actions)(withAuth(App));