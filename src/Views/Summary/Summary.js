import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import * as utils from "../../utilities.js";
import styles from "./Summary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth } from "@okta/okta-react";
import { checkAuthentication } from "../../helper";
import "@progress/kendo-theme-default/dist/all.css";
// Custom Components

import LoadingScreen from "../Loading/Loading.jsx";
import Navigation from "components/Navigation/Navigation";
import FilterPanel from "components/FilterPanel/FilterPanel";
import CommentPanel from "components/CommentPanel/CommentPanel";




import Playground from "../../components/MobileComponents/Playground/Playground.jsx";
import SummaryViewDetails from "components/SummaryViewDetails/SummaryViewDetails";
import KendoDialog from "../../components/KendoDialog/KendoDialog";
import PrimaryContentList from "../../components/PrimaryContent/PrimaryContentList.jsx";
import SecondaryContentList from "../../components/SecondaryContent/SecondaryContentList.jsx";
import {
  PRIMARY,
  SECONDARY,
  MOBILE,
  TABLET,
  LAPTOP
} from "../../Constants/consts.js";
import { timingSafeEqual } from "crypto";
class Summary extends Component {
  constructor(props) {
    super(props);

    /* Initializing local state */
    this.state = {
      index: 0,
      authenticated: null,
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      },
      filtersAreLoaded: false,
      preferncesAreAddedToFilters: false,
      initialDataLoadIsComplete: false,
      activeCommentBoxMetric: 0,
      isLoading: true
    };

    /*Bindings  */
    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.props.getIbHeartbeat();
  }

  resize() {
    const appSettings = {
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };
    this.props.setAppSettings(appSettings);
    this.setState({
      window: appSettings.window
    });
  }

  async componentDidMount() {
    this.props.fetchCommentsCount();
    // this.props.generateFilterData();

    // Get all the comments count

    this.props.generateFilterData(this.props.preferences);
  
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.checkAuthentication();
  }

  async componentDidUpdate(prevProps) {
    this.checkAuthentication();
    // console.log(prevProps);
    // console.log(this.props)
    

    // if(this.props.filters.combined.availableFilters.length===0){
    // }
    // Boolean Rule Tests
    let preferencesAreLoaded = Object.keys(prevProps.preferences).length === 0 && this.props.preferences.defaultSummaryView !== undefined;
    let filtersAreLoaded = prevProps.filters.combined.availableFilters.length === 0 && this.props.filters.combined.availableFilters.length>0;
    let appIsReadyToRequestSummaryData = prevProps.filters.combined.valueFilters.length===0 &&  this.props.filters.combined.valueFilters.length > 0;
    let appInitialLoadIsComplete = this.props.NEwQTDW.qtd[0].value !== 66.7 && prevProps.NEwQTDW.qtd[0].value === undefined;
    // let filtersSubmitted = this.props.filters.combined.valueFilters !== prevProps.filters.combined.valueFilters && 
    // console.log(appInitialLoadIsComplete);
    //Handle Boolean Test Results
    if(filtersAreLoaded){
      console.log('Just Recieved filters');
      this.setState({filtersAreLoaded:true});
    }

    if (preferencesAreLoaded && this.state.preferncesAreAddedToFilters === false) {
      console.log('Just recieved the preferences');
      this.props.addPreferencesToActiveFilters(this.props.preferences);
      this.setState({preferncesAreAddedToFilters: true})
    }


    if(appIsReadyToRequestSummaryData && this.state.preferncesAreAddedToFilters === true) {
      // console.log('Both Preferences and Filters are loaded');
      this.props.getSummaryData(this.props.filters);
      this.setState({initialDataLoadIsComplete: true})
    }

    if( this.props.summaryData !== prevProps.summaryData && this.state.initialDataLoadIsComplete === true) {
      this.setState({isLoading: false});
  }

  if(this.state.initialDataLoadIsComplete === true && (this.props.filters !== prevProps.filters)){
    this.props.getSummaryData(this.props.filters);
  } 
    
    // // If the old available filters change or the active filters change
    // //  Call for new data with the filters
    // if (
    //   prevProps.availableFilters !== this.props.availableFilters ||
    //   prevProps.activeFilters !== this.props.activeFilters
    // ) {
    //   this.props.getSummaryData(this.props.filters);
    // }

    if(this.props.activePrimaryCard.index > 0){
      this.props.updateMultichartMetric(true);
    }
  }

  // shouldComponentUpdate(nextProps){
  //   if(this.props.activeFilters !== nextProps.activeFilters){
  //     return false;
  //   }

  //   return true;
  // }
  async login() {
    this.props.auth.login("/");
  }
  updateActivePrimary(index) {
    this.props.updateActivePrimaryCard(index);
    switch(index){
        case(0):
            this.props.updateActiveSecondaryCard(0);
            break;
        case(1):
            this.props.updateMultichartMetric(true);
            this.props.updateActiveSecondaryCard(4);
            break;
    }
    if (
      this.props.mobileIsPrimary === true && utils.includes(this.props.deviceType, 'laptop') === false
    ) {
      this.updateMobileView(PRIMARY, false);
      this.updateMobileView(SECONDARY, true);
    }
  }
  updateActiveSecondary(index) {
    this.props.fetchComments(index);
    this.props.updateActiveSecondaryCard(index);
  }
  updateMobileView(updateComponent, toUpdateTo) {
    //If the user is on Secondary
    if (updateComponent === SECONDARY) {
      // and the user wants to  goes back to primary
      if (toUpdateTo === false) {
        this.props.updateViewSetting(updateComponent, toUpdateTo);
        this.props.updateViewSetting(PRIMARY, true);
      }
      // Else they are on primary
    } else {
      if (toUpdateTo === false) {
        this.props.updateViewSetting(updateComponent, toUpdateTo);
        this.props.updateViewSetting(SECONDARY, true);
      }
    }
  }

  onCommentIconClick = (e, type, index) => {
    this.props.showCommentBox();
  };

  getPrimaryContent = () => {
    return (
      <PrimaryContentList
        window={this.state.window}
        onCommentIconClick={(e, type, index) => {
          this.onCommentIconClick(e, type, index);
        }}
        toggleCommentary={this.props.toggleCommentary}
        activeCard={this.props.activePrimaryCard}
        data={this.props.primaryData}
        enableChart={() => {
          // console.log("hello world");
        }}
        selectedCard={(e, index) => {
          this.updateActivePrimary(index);
        }}
        deviceType={this.props.deviceType}
        mobilePrimaryIsActive={this.props.mobileIsPrimary}
      />
    );
  };

  getSecondaryContent = () => {
    // Logic to render depending on App settings. this.props.appSettings.window.height and this.props.appSettings.window.width
    return (
      <SecondaryContentList
        data={this.props.secondaryData}
        activeJourneyCard={this.props.activeSecondaryCard}
        onJourneyCardClicked={(e, index) => {
          this.updateActiveSecondary(index);
        }}
        onCommentIconClick={(e, type, index) => {
          this.onCommentIconClick(e, type, index);
        }}
        toggleCommentary={this.props.toggleCommentary}
        deviceType={this.props.deviceType}
        activePrimary={this.props.activePrimaryCard}
        mobileSecondaryIsActive={this.props.mobileIsSecondary}
        primaryDataCategory={
          this.props.primaryData[this.props.activePrimaryCard].category
        }
        updateMobileView={(component, updateTo) => {
          this.updateMobileView(component, updateTo);
        }}
        window={this.state.window}
        commentsPackage={this.props.commentsPackage}
      />
    );
  };


  render() {
    const {user} = this.props;
    const {activeCommentBoxMetric} = this.state; 
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    const isMobileOrTablet = utils.includes(utils.getDeviceType(this.state.window), 'mobile') || utils.includes(utils.getDeviceType(this.state.window), 'tablet');
    const summaryViewDetails = isMobileOrTablet ? null : <SummaryViewDetails />;

    return (
      <div style={isMobileOrTablet ? { height: `${this.state.window.height}px`} : (this.props.dialogIsOpen ? {height: `100%`, marginTop: '-20px'} : {height: '100%'})}>
        {this.state.authenticated && (
          <span>
            {/* Data Preferences */}
            {kdialog}
            {/* Navigation*/}
            <Navigation/>
            <FilterPanel
             window={this.state.window}/>
            <CommentPanel
             user={this.props.user}
            />
            <div>
         

              {this.state.isLoading === true ? <LoadingScreen></LoadingScreen> : 
               (<div>
                 {/* Primary */}
                 {this.state.isFilterPageVisible ||
                 this.props.mobileIsPrimary === false ? null : this.getPrimaryContent()}
                 {/* Secondary */}
                 {this.state.isFilterPageVisible ? null : this.getSecondaryContent()}
                 {this.state.isFilterPageVisible  && this.props.mobileIsPrimary? null : null}
                 {summaryViewDetails}
               </div>)
              }
            </div>
          </span>
        )}
        {this.state.authenticated === false && this.props.auth.login("/")}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.commentsPackage);
  return {
    // activeFilters: state.activeFilters,
    // availableFilters: state.availableFilters,
    dialogIsOpen: state.isDialogOpen,
    detailIsOpen: state.detailsIsOpen,
    availableFilters: state.availableFilters,
    user: state.user,
    preferences: state.preferences,
    primaryData: state.summaryData.primary,
    activePrimaryCard: state.activeCards.primary,
    activeSecondaryCard: state.activeCards.secondary,
    secondaryData: state.summaryData.secondary,
    appSettings: state.appSettings,
    deviceType: state.appSettings.deviceType,
    toggleCommentary: state.toggleCommentaryBox,
    window: state.appSettings.window,
    mobileIsPrimary: state.appSettings.views.primaryIsVisible,
    mobileIsSecondary: state.appSettings.views.secondaryIsVisible,
    summaryData: state.summaryData,
    mobileFiltersIsShown: state.appSettings.views.mobileFilterPageIsVisible,
    filters: state.filters,
    NEwQTDW: state.summaryData.secondary[0].details.qtdw,
    commentsPackage: state.commentsPackage
  };
}
export default connect(
  mapStateToProps,
  actions
)(withAuth(Summary));
