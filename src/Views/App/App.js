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

// Custom Components
import FilterBox from 'components/FilterBox/FilterBox';
import Playground from '../../components/MobileComponents/Playground/Playground.jsx';
// import TopSummaryBox from 'components/TopSummaryBox/TopSummaryBox';
import CustomDropDownPanel from 'components/CustomDropDownPanel/CustomDropDownPanel';
import SummaryViewDetails from 'components/SummaryViewDetails/SummaryViewDetails';
import KendoDialog from '../../components/KendoDialog/KendoDialog';
import CommentBox from '../../components/CommentBox/CommentBox.jsx';
import PrimaryContentList from '../../components/PrimaryContent/PrimaryContentList.jsx';
import SecondaryContentList from '../../components/SecondaryContent/SecondaryContentList.jsx';
import FilterPage from '../../components/MobileComponents/FitlerPage/FilterPage.jsx';
import Login from '../../components/Login/Login';
import {
  PRIMARY, SECONDARY, MOBILE, TABLET, LAPTOP
} from  '../../Constants/consts.js';
import { timingSafeEqual } from 'crypto';
class App extends Component {
  constructor(props) {
    super(props);

    /* Initializing local state */
    this.state ={
      index: 0,
      filterPanelIsOpen: false,
      showDropDowns: false,
      authenticated: null,
      window: {
        height: window.innerHeight,
        weidth: window.innerWidth
      },
      activeCommentBoxMetric: undefined,
      isFilterPageVisible: false,
    };

      /*Bindings  */
      this.checkAuthentication = checkAuthentication.bind(this);
      this.openDialogFilterPanel = this.openDialogFilterPanel.bind(this);
      this.login = this.login.bind(this);
      this.props.getIbHeartbeat();

  }

  resize() {
    const appSettings = {
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
    this.props.setAppSettings(appSettings);
    // this.setState({
    //   window: appSettings.window
    // });
  }
  
  componentDidMount() {
    this.props.generateFilterData();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.checkAuthentication();
  }

  componentDidUpdate(prevProps) {

    // If the old available filters change or the active filters change
    //  Call for new data with the filters
    if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
      this.props.getPrimaryData(this.props.activeFilters, this.props.availableFilters);
      this.props.getSecondaryData(this.props.activeFilters, this.props.availableFilters);

      
    }
    let prevPropsIsEmpty= Object.keys(prevProps.preferences).length === 0;
    let propsNotEmpty = this.props.preferences.defaultSummaryView !== undefined
    if( prevPropsIsEmpty && propsNotEmpty){
      this.props.addValueToActiveMultiFilter({index: 1, category:'quarters', value: this.props.preferences.defaultQuarter});
      this.props.addValueToActiveMultiFilter({index: 2, category:'segments', value: this.props.preferences.defaultSegment});
      if(this.props.preferences.geoFilters!==""){
        this.props.preferences.geoFilters.forEach(ele => {
          this.props.addValueToActiveMultiFilter(ele);
        });
      }
      if(this.props.preferences.productFilters !== ""){
        this.props.preferences.productFilters.forEach(ele => {
          this.props.addValueToActiveMultiFilter(ele);
        });
      }
      if(this.props.preferences.routeFilters !== ""){
      this.props.preferences.routeFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
      }
      if(this.props.preferences.marketFilters !== ""){
      this.props.preferences.marketFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
      }
      if(this.props.preferences.subscriptionFilters !== ""){
      this.props.preferences.subscriptionFilters.forEach(ele => {
        this.props.addValueToActiveMultiFilter(ele);
      });
      }
    }
  }
  async login() {
    this.props.auth.login('/');
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
  updateActivePrimary(index){
    this.props.updateActivePrimaryCard(index);
    this.props.updateActiveSecondaryCard(0);

    if(this.props.mobileIsPrimary === true){
      this.updateMobileView(PRIMARY, false);
      this.updateMobileView(SECONDARY, true);
    }
  }
  updateActiveSecondary(index){
    this.props.updateActiveSecondaryCard(index);
  }
  updateMobileView(updateComponent, toUpdateTo) {
    //If the user is on Secondary 
    if(updateComponent === SECONDARY){
      // and the user wants to  goes back to primary
      if(toUpdateTo === false){
        this.props.updateViewSetting(updateComponent, toUpdateTo)
        this.props.updateViewSetting(PRIMARY,true);
      }
    // Else they are on primary 
    } else {
      if(toUpdateTo === false ){
        this.props.updateViewSetting(updateComponent, toUpdateTo);
        this.props.updateViewSetting(SECONDARY,true);
      }
    }
  }

  onCommentIconClick = (e,type,index) => {
   if(type === PRIMARY){
     this.setState({activeCommentBoxMetric: this.props.primaryData[index]},()=>{
        this.props.showCommentBox();
     });
   } else if(type ===SECONDARY){
    this.setState({activeCommentBoxMetric: this.props.secondaryData[index]},()=>{
      this.props.showCommentBox();
   });
   }
  }

  getPrimaryContent = () => {
    return (<PrimaryContentList 
      onCommentIconClick={(e,type,index)=>{this.onCommentIconClick(e,type,index)}}
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
      onJourneyCardClicked={(e,index) =>{this.updateActiveSecondary(index)}}
      onCommentIconClick={(e,type,index)=>{this.onCommentIconClick(e,type,index)}}
      toggleCommentary={this.props.toggleCommentary} 
      deviceType= {this.props.deviceType}
      activePrimary={this.props.activePrimaryCard}
      mobileSecondaryIsActive = {this.props.mobileIsSecondary}
      primaryDataCategory={this.props.primaryData[this.props.activePrimaryCard].category}
      updateMobileView={(component, updateTo) => {this.updateMobileView(component, updateTo)}}
    />);

  }

  onFilterToggled = (e) => {
    console.log('Filter Toggled');
    const toggleState = !this.state.isFilterPageVisible;
    this.setState({isFilterPageVisible: toggleState});
  }

  render(){
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    const isMobileOrTablet = utils.getDeviceType(this.state.window).includes(MOBILE) || utils.getDeviceType(this.state.window).includes(TABLET);
    const filtersPage = this.state.isFilterPageVisible ? <FilterPage activeFilters={this.props.activeFilters} availableFilters={this.props.availableFilters}></FilterPage> : null;



    return (
      
      <div style={{height:'100%'}}>
        {this.state.authenticated &&
        <span>
          {/* Data Preferences */}
          {kdialog}
          <Navigation onFilterToggled={e => this.onFilterToggled(e)} isFilterPageVisible={this.state.isFilterPageVisible}/>
          <FilterBox handleNewFilterClick={this.openDialogFilterPanel}/>
   
          {(this.props.commentBoxIsOpen) ? 
            <CommentBox
              currentMetric={this.state.activeCommentBoxMetric.index}
              comments={this.state.activeCommentBoxMetric.comments} 
              commentBoxHeader={this.state.activeCommentBoxMetric.header} 
              isPrimary={(this.state.activeCommentBoxMetric.type !== undefined) ? true: false}
              user={this.props.user}/>
               : null}

          <CustomDropDownPanel handleClose={this.openDialogFilterPanel} showContainer={this.state.filterPanelIsOpen} showSlide={this.state.showDropDowns}/>
          
          <div style={{width:'100%', height: '1050px'}}>

              {filtersPage}
             
              {/* Primary */}
              {this.state.isFilterPageVisible? null: this.getPrimaryContent()}

              {/* Secondary */}      
              {this.state.isFilterPageVisible? null: this.getSecondaryContent() }
              {this.state.isFilterPageVisible? null: <SummaryViewDetails />}
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
    availableFilters: state.availableFilters,
    commentBoxIsOpen: state.commentBoxIsOpen,
    user: state.user,
    preferences: state.preferences,
    primaryData: state.primaryData,
    activePrimaryCard: state.activeCards.primary,
    activeSecondaryCard: state.activeCards.secondary,
    secondaryData: state.secondaryData,
    appSettings: state.appSettings,
    deviceType: state.appSettings.deviceType,
    toggleCommentary: state.toggleCommentaryBox,
    window: state.appSettings.window,
    mobileIsPrimary: state.appSettings.views.primaryIsVisible,
    mobileIsSecondary: state.appSettings.views.secondaryIsVisible
  };
}

export default connect(mapStateToProps, actions)(withAuth(App));