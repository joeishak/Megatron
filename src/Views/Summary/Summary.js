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

// import Playground from "../../components/MobileComponents/Playground/Playground.jsx";
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
// import { timingSafeEqual } from "crypto";
class Summary extends Component {
  constructor(props) {
    super(props);

    /* Initializing local state */
    this.state = {
      authenticated: null,
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      },
      preferncesAreAddedToFilters: false,
      initialDataLoadIsComplete: false,
      isLoading: true,
      isInitiallyLoading: true
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
  }

  componentDidMount() {
    this.props.isFetching(true);
    this.props.fetchCommentsCount();

    // Get all the comments count

    this.props.generateFilterData(this.props.preferences);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentDidUpdate(prevProps, prevState) {

    this.checkAuthentication();

    if (this.state.authenticated === false) {
      this.props.auth.login("/")
    }
    if (this.props.user !== prevProps.user) {
      this.props.getUserSettings(this.props.user.sub);
    }


    // Boolean Rule Tests
    let preferencesAreLoaded = Object.keys(prevProps.preferences).length === 0 && this.props.preferences.geoFilters !== undefined;
    let filtersAreLoaded = prevProps.filters.combined.availableFilters.length === 0 && this.props.filters.combined.availableFilters.length > 0;
    let appIsReadyToRequestSummaryData = prevProps.filters.combined.valueFilters.length === 0 && this.props.filters.combined.valueFilters.length > 0;
    let appInitialLoadIsComplete = this.props.NEwQTDW.qtd.length !== 0;


    //Handle Boolean Test Results
    if (filtersAreLoaded) {
      console.log('Just Recieved filters');
      this.setState({ filtersAreLoaded: true });
    }

    if (preferencesAreLoaded && this.state.preferncesAreAddedToFilters === false) {
      console.log('Just recieved the preferences');
      this.props.addPreferencesToActiveFilters(this.props.preferences);
      this.setState({ preferncesAreAddedToFilters: true })
    }

    //Initial App Loads on Finance Tab
    if (appIsReadyToRequestSummaryData && this.state.preferncesAreAddedToFilters === true) {
      console.log('Both Preferences and Filters are loaded');
      this.props.getFinanceSecondaryData(this.props.filters);
      this.props.getPrimaryData(this.props.filters);
      // this.props.getSummaryData(this.props.filters);
      this.setState({ initialDataLoadIsComplete: true })
    }

    if (this.state.initialDataLoadIsComplete === true && (this.props.filters !== prevProps.filters)) {
      // this.setState({ isLoading: true });
      this.props.getPrimaryData(this.props.filters);
      switch (this.props.activePrimaryCard) {
        case 0:
          console.log('Fetching Finance')
          this.props.getFinanceSecondaryData(this.props.filters);
          break;
        case 1:
          console.log('Fetching Discover')
          this.props.getDiscoverSecondaryData(this.props.filters);
          break;
        case 2:
          console.log('Fetching Try')
          this.props.getTrySecondaryData(this.props.filters);
          break;
        case 3:
          console.log('Fetching Buy')
          this.props.getBuySecondaryData(this.props.filters);
          break;
        case 4:
          console.log('Fetching Use')
          this.props.getUseSecondaryData(this.props.filters);
          break;
        case 5:
          console.log('Fetching Renew')
          this.props.getRenewSecondaryData(this.props.filters);
          break;
        default:
          break;
      }
    }

    if (this.props.activePrimaryCard !== prevProps.activePrimaryCard) {
      switch (this.props.activePrimaryCard) {
        case 0:
          this.setState({ isLoading: true });

          console.log('Fetching Finance')
          this.props.getFinanceSecondaryData(this.props.filters);
          break;
        case 1:
          this.setState({ isLoading: true });

          console.log('Fetching Discover')
          this.props.getDiscoverSecondaryData(this.props.filters);
          break;
        case 2:
          this.setState({ isLoading: true });
          console.log('Fetching Try')
          this.props.getTrySecondaryData(this.props.filters);
          break;
        case 3:
          console.log('Fetching Buy')
          this.props.getBuySecondaryData(this.props.filters);
          break;
        case 4:
          console.log('Fetching Use')
          this.props.getUseSecondaryData(this.props.filters);
          break;
        case 5:
          console.log('Fetching Renew')
          this.props.getRenewSecondaryData(this.props.filters);
          break;
        default:
          break;
      }
    }
    if (appInitialLoadIsComplete && this.state.initialDataLoadIsComplete === true && this.props.summaryData != prevProps.summaryData) {
      // this.updateActivePrimary(0);
      this.setState({ isLoading: false, isInitiallyLoading: false });
      this.props.isFetching(false);
    }
    if (this.props.activePrimaryCard.index > 0) {
      this.props.updateMultichartMetric(true);
    }
  }

  async login() {
    this.props.auth.login("/");
  }
  updateActivePrimary(index) {
    this.props.updateActivePrimaryCard(index);
    // this.setState({ isLoading: true });
    switch (index) {
      case (0):
        this.props.updateActiveSecondaryCard(0);
        break;
      case (1):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(4);
        break;
      case (2):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(11);
        break;
      case (3):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(18);
        break;
      case (4):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(24);
        break;
      default:
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(32);
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
    this.props.isFetching(true);
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
    this.props.isFetching(true);
    this.props.showCommentBox();
  };

  getPrimaryContent = () => {
    return (
      <PrimaryContentList
        window={this.props.window}
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
    // console.log(this.props.statsDetails);
    // Logic to render depending on App settings. this.props.appSettings.window.height and this.props.appSettings.window.width
    return (
      <SecondaryContentList
        statsDetails={this.props.statsDetails}
        data={this.props.secondaryData}
        activeJourneyCard={this.props.activeSecondaryCard}
        onJourneyCardClicked={(e, index) => { this.updateActiveSecondary(index); }}
        onCommentIconClick={(e, type, index) => { this.onCommentIconClick(e, type, index); }}
        toggleCommentary={this.props.toggleCommentary}
        deviceType={this.props.deviceType}
        activePrimary={this.props.activePrimaryCard}
        mobileSecondaryIsActive={this.props.mobileIsSecondary}
        primaryDataCategory={this.props.primaryData[this.props.activePrimaryCard].category}
        updateMobileView={(component, updateTo) => { this.updateMobileView(component, updateTo); }}
        window={this.props.window}
        commentsPackage={this.props.commentsPackage}
      />
    );
  };


  render() {
    const { user } = this.props;
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    const isMobileOrTablet = utils.includes(utils.getDeviceType(this.props.window), 'mobile') || utils.includes(utils.getDeviceType(this.props.window), 'tablet');
    const summaryViewDetails = isMobileOrTablet ? null : <SummaryViewDetails secondaryData={this.props.secondaryData} />;

    return (
      <div style={isMobileOrTablet ? { height: `${this.props.window.height}px` } : (this.props.dialogIsOpen ? { height: `100%`, marginTop: '-20px' } : { height: '100%' })}>
        {
          this.state.isInitiallyLoading === true ? < LoadingScreen /> :

            this.state.authenticated && (
              <span>
                {/* Data Preferences */}
                <div>

                  <div>
                    {kdialog}
                    {/* Navigation*/}
                    <Navigation
                      mobileFiltersIsShown={this.props.mobileFiltersIsShown} />
                    <FilterPanel
                      window={this.props.window} />
                    <CommentPanel
                      user={this.props.user}
                    />
                    {/* Primary */}
                    {this.props.mobileFiltersIsShown ||
                      this.props.mobileIsPrimary === false ? null : this.getPrimaryContent()}
                    {this.state.isLoading === true ? <LoadingScreen></LoadingScreen> :
                      <span>
                        {(this.state.mobileFiltersIsShown ? null : this.getSecondaryContent())}
                        {summaryViewDetails}</span>
                    }
                    {/* {this.state.isFilterPageVisible && this.props.mobileIsPrimary ? null : null} */}
                  </div>

                </div>
              </span>
            )}
        {/* {this.state.authenticated === false && } */}
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    authenticated: state.authenticated,
    statsDetails: state.summaryData.secondary[state.activeCards.secondary].details.stats,
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
