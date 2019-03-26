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
import FeedBackDialog from "../../components/FeedbackDialog/FeedBack";
import PrimaryContentList from "../../components/PrimaryContent/PrimaryContentList.jsx";
import SecondaryContentList from "../../components/SecondaryContent/SecondaryContentList.jsx";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {
  PRIMARY,
  SECONDARY,
  MOBILE,
  TABLET,
  LAPTOP,
  DIMENSIONS,
  SUMMARY_FILTERS
} from "../../Constants/consts.js";
import $ from 'jquery';

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
      isInitiallyLoading: true,
      primaryLoaded: false,
      secondaryLoaded: false,
      financeHasLoaded: false,
      trafficHasLoaded: false,
      muHasLoaded: false,
      discoverHasLoaded: false,
      tryHasLoaded: false,
      buyHasLoaded: false,
      useHasLoaded: false,
      renewHasloaded: false,
      fetchingFinance: false,
      fetchingDiscoverTraffic: false,
      fetchingDiscoverMarketing: false,
      fetchingTry: false,
      fetchingBuyFinance: false,
      fetchingBuyMarket: false,
      fetchingBuyTraffic: false,


    };

    /*Bindings  */
    this.checkAuthentication = checkAuthentication.bind(this);
    // this.login = this.login.bind(this);
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
    this.checkAuthentication();
    this.props.isFetching(true);
    this.props.fetchCommentsCount();

    // Get all the comments count

    this.props.generateFilterData(this.props.preferences);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    // if (localStorage.activePrimary) {
    //   this.props.updateActivePrimaryCard(localStorage.activePrimary);
    // }

  }

  componentDidUpdate(prevProps, prevState) {
    // Boolean Rule Tests
    let filtersAreLoaded = Object(this.props.filters).hasOwnProperty('combined') && Object(prevProps.filters).hasOwnProperty('combined') === false;
    let preferencesAreLoaded = Object(this.props.preferences).hasOwnProperty('geoFilters');
    let appInitialLoadIsComplete = this.props.NEwQTDW.qtd.length !== 0;
    let primaryLoaded = this.props.summaryData.primary[this.props.activePrimaryCard].value !== prevProps.summaryData.primary[this.props.activePrimaryCard].value;
    let secondaryLoaded = this.props.summaryData.secondary[this.props.activeSecondaryCard].value !== prevProps.summaryData.secondary[this.props.activeSecondaryCard].value;
    this.checkAuthentication();
    if (this.props.user !== prevProps.user) {
      this.props.getUserSettings(this.props.user.sub);
    }

    if (this.props.NetNew.value !== prevProps.NetNew.value) {
      console.log('Finance Changed');
      this.setState({ fetchingFinance: false });
    }
    if (this.props.Traffic.value !== prevProps.Traffic.value) {
      console.log('Traffic Changed');
      this.setState({ fetchingDiscoverTraffic: false });
    }
    if (this.props.Market.value !== prevProps.Market.value) {
      console.log('Marketing Changed');
      this.setState({ fetchingDiscoverMarketing: false });
    }
    if (this.props.NewQFM.value !== prevProps.NewQFM.value) {
      console.log('Try Changed');
      this.setState({ fetchingTry: false });
    }
    if (this.props.Conv.value !== prevProps.Conv.value) {
      this.setState({ fetchingBuyTraffic: false })
    }
    if (this.props.PaidMedia.value != prevProps.PaidMedia.value) {
      this.setState({ fetchingBuyMarket: false })
    }
    if (this.props.Gross.value != prevProps.Gross.value) {
      this.setState({ fetchingBuyFinance: false })
    }
    // console.log('Checking Filters (',filtersAreLoaded,'): 1. Previouly: ',prevProps.filters,'Currently: ',this.props.filters);
    // console.log('Checking Preferences (',this.props.preferences,'): 1. Previouly: ',prevProps.preferences,'Currently: ',this.props.preferences);
    // // console.log('Checking the Filterss Combined(',appIsReadyToRequestSummaryData,'): 1. Previouly: ',prevProps.filters.combined,'Currently: ',this.props.filters.combined);
    console.log('Checking Summary Data(', primaryLoaded, secondaryLoaded, '): 1. Previouly: ', this.props.summaryData, 'Currently: ', prevProps.summaryData);


    // console.log(this.props.filters);
    if (primaryLoaded) {
      this.setState({ primaryLoaded: true })
    }
    if (secondaryLoaded) {
      this.setState({ secondaryLoaded: true })
    }
    //Handle Boolean Test Results
    if (filtersAreLoaded) {
      console.log('Just Recieved filters');
      this.setState({ filtersAreLoaded: true });
    }
    if (this.state.filtersAreLoaded && preferencesAreLoaded && this.state.preferncesAreAddedToFilters === false) {
      console.log('Just recieved the preferences');
      this.props.addPreferencesToActiveFilters(this.props.preferences);
      this.setState({ preferncesAreAddedToFilters: true })
    }
    // // //Initial App Loads on Finance Tab
    if (this.state.filtersAreLoaded === true && this.state.preferncesAreAddedToFilters === true && this.state.initialDataLoadIsComplete === false) {
      console.log('Both Preferences and Filters are loaded', this.props.activePrimaryCard);
      // this.props.getFinanceSecondaryData(this.props.filters);

      this.props.getPrimaryData(this.props.filters);
      switch (this.props.activePrimaryCard) {
        case 0:
          console.log('Fetching Finance')
          this.setState({ isLoading: true, fetchingFinance: true });
          this.setState({ financeHasLoaded: true });
          this.props.getFinanceSecondaryData(this.props.filters);
          break;
        case 1:
          console.log('Fetching Discover')
          this.setState({ isLoading: true, fetchingDiscoverMarketing: true, fetchingDiscoverTraffic: true });
          this.setState({ discoverHasLoaded: true });
          this.props.getMarketingSecondaryData(this.props.filters);
          this.props.getTrafficSecondaryData(this.props.filters);

          break;
        case 2:
          console.log('Fetching Try')
          this.setState({ isLoading: true, fetchingTry: true });
          this.setState({ tryHasLoaded: true });
          this.props.getTrySecondaryData(this.props.filters);
          break;
        case 3:
          console.log('Fetching Buy')
          this.setState({ isLoading: true, fetchingBuyFinance: true, fetchingBuyTraffic: true, fetchingBuyMarket: true });
          this.setState({ buyHasLoaded: true });
          this.props.getBuyFinanceSecondaryData(this.props.filters);
          this.props.getBuyTrafficSecondaryData(this.props.filters);
          this.props.getBuyMarketSecondaryData(this.props.filters);

          break;
        case 4:
          console.log('Fetching Use')
          // this.props.getUseSecondaryData(this.props.filters);
          break;
        case 5:
          console.log('Fetching Renew')
          // this.props.getRenewSecondaryData(this.props.filters);
          break;
        default:
          break;
      }
      this.setState({ fetchingFinance: true, financeHasLoaded: true })
      if (this.state.initialDataLoadIsComplete === false) {
        this.setState({ initialDataLoadIsComplete: true })
      }
    }

    //Main Filters Change
    if (this.state.initialDataLoadIsComplete === true && (this.props.filters !== prevProps.filters)) {
      console.log(this.state.subFiltersChanged);
      this.setState({ filtersUpdated: true });

      if (this.state.subFiltersChanged===true) {
        switch (this.props.activeSecondaryCard) {
          case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
            console.log('Fetching TRAFFIC')
            this.setState({ isLoading: true, fetchingDiscoverTraffic: true });
            this.setState({ trafficHasLoaded: true });
            this.props.getTrafficSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
            console.log('Fetching mu')
            this.setState({ isLoading: true, fetchingDiscoverMarketing: true });
            this.setState({ muHasLoaded: true });
            this.props.getMarketingSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
            console.log('Fetching mu')
            this.setState({ isLoading: true, fetchingDiscoverMarketing: true });
            this.setState({ muHasLoaded: true });
            this.props.getMarketingSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
            console.log('Fetching mu')
            this.setState({ isLoading: true, fetchingDiscoverMarketing: true });
            this.setState({ muHasLoaded: true });
            this.props.getMarketingSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
            console.log('Fetching Buy')
            console.log('Fetching TRAFFIC')
            this.setState({ isLoading: true, fetchingDiscoverTraffic: true });
            this.setState({ trafficHasLoaded: true });
            this.props.getTrafficSecondaryData(this.props.filters);
            break;
            break;
          case 4:
            console.log('Fetching Use')
            // this.props.getUseSecondaryData(this.props.filters);
            break;
          case 5:
            console.log('Fetching Renew')
            // this.props.getRenewSecondaryData(this.props.filters);
            break;
          default:
            break;
        }
      } else if(this.state.subFiltersChanged === undefined) {
        this.props.getPrimaryData(this.props.filters);
        this.setState({
          financeHasLoaded: false,
          discoverHasLoaded: false,
          tryHasLoaded: false
        });


        switch (this.props.activePrimaryCard) {
          case 0:
            console.log('Fetching Finance')
            this.setState({ isLoading: true, fetchingFinance: true });
            this.setState({ financeHasLoaded: true });
            this.props.getFinanceSecondaryData(this.props.filters);
            break;
          case 1:
            console.log('Fetching Discover')
            this.setState({ isLoading: true, fetchingDiscoverMarketing: true, fetchingDiscoverTraffic: true });
            this.setState({ discoverHasLoaded: true });
            this.props.getMarketingSecondaryData(this.props.filters);
            this.props.getTrafficSecondaryData(this.props.filters);

            break;
          case 2:
            console.log('Fetching Try')
            this.setState({ isLoading: true, fetchingTry: true });
            this.setState({ tryHasLoaded: true });
            this.props.getTrySecondaryData(this.props.filters);
            break;
          case 3:
            console.log('Fetching Buy')
            this.setState({ isLoading: true, fetchingBuyFinance: true, fetchingBuyTraffic: true, fetchingBuyMarket: true });
            this.setState({ buyHasLoaded: true });
            this.props.getBuyFinanceSecondaryData(this.props.filters);
            this.props.getBuyTrafficSecondaryData(this.props.filters);
            this.props.getBuyMarketSecondaryData(this.props.filters);

            break;
          case 4:
            console.log('Fetching Use')
            // this.props.getUseSecondaryData(this.props.filters);
            break;
          case 5:
            console.log('Fetching Renew')
            // this.props.getRenewSecondaryData(this.props.filters);
            break;
          default:
            break;
        }
      }

    }

  
    if (this.props.activePrimaryCard !== prevProps.activePrimaryCard) {
      localStorage.activePrimary = this.props.activePrimaryCard;

      this.setState({ userChangedCards: true });
      switch (this.props.activePrimaryCard) {
        case 0:
          console.log('Fetching Finance')
          if (!this.state.financeHasLoaded) {
            this.props.getPrimaryData(this.props.filters);
            this.props.getFinanceSecondaryData(this.props.filters);
            this.setState({ fetchingFinance: true, financeHasLoaded: true, isLoading: true });

          } else {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false
            });
            this.props.isFetching(false);
          }
          break;
        case 1:
          console.log('Fetching Discover', this.state.discoverHasLoaded)
          if (!this.state.discoverHasLoaded) {
            this.props.getPrimaryData(this.props.filters);
            this.props.getTrafficSecondaryData(this.props.filters);
            this.props.getMarketingSecondaryData(this.props.filters);

            this.setState({ fetchingDiscoverTraffic: true, discoverHasLoaded: true, fetchingDiscoverMarketing: true, isLoading: true });

          } else {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false
            });
            this.props.isFetching(false);
          }


          break;
        case 2:
          console.log('Fetching Try')
          if (!this.state.tryHasLoaded) {

            this.props.getPrimaryData(this.props.filters);
            this.props.getTrySecondaryData(this.props.filters);

            this.setState({ fetchingTry: true, isLoading: true });
            this.setState({ tryHasLoaded: true });
          } else {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false
            });
            this.props.isFetching(false);
          }

          break;
        case 3:
          console.log('Fetching Buy')
          if (!this.state.buyHasLoaded) {

            this.props.getPrimaryData(this.props.filters);
            this.props.getBuyFinanceSecondaryData(this.props.filters);
            this.props.getBuyMarketSecondaryData(this.props.filters);
            this.props.getBuyTrafficSecondaryData(this.props.filters);

            this.setState({ buyHasLoaded: true,/*  isLoading: true, */ fetchingBuyFinance: true, fetchingBuyMarket: true, fetchingBuyTraffic: true });
          } else {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false
            });
            this.props.isFetching(false);
          }
          break;
        case 4:
          console.log('Fetching Use')
          // this.props.getUseSecondaryData(this.props.filters);
          break;
        case 5:
          console.log('Fetching Renew')
          // this.props.getRenewSecondaryData(this.props.filters);
          break;
        default:
          break;
      }
    }

    //When the app initially finishes loading finance primary and secondary
    if (this.state.primaryLoaded === true && this.state.secondaryLoaded === true) {
      console.log('Setting Load to False in the primary vs secondary');
      this.setState({ isLoading: false, isInitiallyLoading: false });
      this.props.isFetching(false);
      this.setState({ primaryLoaded: false, secondaryLoaded: false });

    }
    if (this.state.userChangedCards || this.state.filtersUpdated) {

      //Entering 
      switch (this.props.activePrimaryCard) {
        case 0:
          if (this.state.financeHasLoaded && this.state.fetchingFinance === false) {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false,
              filtersUpdated: false
            });
            this.props.isFetching(false);
            this.setState({ primaryLoaded: false, secondaryLoaded: false });
          }
          break;
        case 1:
          if (this.state.discoverHasLoaded && this.state.fetchingDiscoverMarketing === false && this.state.fetchingDiscoverTraffic === false) {
            console.log('Setting off In Disocver');
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false,
              filtersUpdated: false

            });
            this.props.isFetching(false);
            this.setState({ primaryLoaded: false, secondaryLoaded: false });

          }
          break;
        case 2:
          if (this.state.tryHasLoaded && this.state.fetchingTry === false) {
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false,
              filtersUpdated: false

            });
            this.props.isFetching(false);
            this.setState({ primaryLoaded: false, secondaryLoaded: false });

          }
          break;
        case 3:
          if (this.state.buyHasLoaded && this.state.fetchingBuyFinance === false && this.state.fetchingBuyMarket === false && this.state.fetchingBuyTraffic === false) {
            console.log('Setting off In Disocver');
            this.setState({
              isLoading: false,
              isInitiallyLoading: false,
              secondaryLoaded: false,
              userChangedCards: false
            });
            this.props.isFetching(false);
            this.setState({ primaryLoaded: false, secondaryLoaded: false });

          }
          break;
        default:
          break;
      }


    }

    //End Loading if sub filters triggered the refresh
    if (this.state.subFiltersChanged === true && this.state.secondaryLoaded === true) {
      console.log('Sub Filter If 1')
      let { fetchingBuyMarket, fetchingBuyTraffic, fetchingTry,
        financeHasLoaded, muHasLoaded, tryHasLoaded, trafficHasLoaded } = this.state;
      if (fetchingBuyMarket === false || fetchingBuyTraffic === false || fetchingTry === false) {
        console.log('Sub Filter If 2')
        if (financeHasLoaded || muHasLoaded || tryHasLoaded || trafficHasLoaded) {
          console.log('Sub Filter If 3')
          this.setState({
            isLoading: false,
            subFiltersChanged: undefined,
          })
        }
      }

    }


  }
  updateSecondaryLoading(newFilters) {
    this.setState({ subFiltersChanged: true }, () => {
      this.props.submitFilters(newFilters);
    });
  }
  stopLoading() {
    this.setState({ isLoading: false, isInitiallyLoading: false });
    this.props.isFetching(false);
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
        this.props.updateActiveSecondaryCard(10);
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

  takeDomScreenshot = () => {
    console.log('taking screenshot of dom');

    // Handle taking DOM screenshot
    html2canvas(document.body, { allowTaint: true, taintTest: false, backgroundColor: '#1F1F1F', useCORS: false }).then(function (canvas) {
      // Export the canvas to its data URI representation
      const image = canvas.toDataURL("image/png");
      const date = new Date().toLocaleDateString();
      const fileName = 'RTBFeedbackCapture_' + date + '.png';
      saveAs(image, fileName);
    });

    // Open Mail Client
    let mail = document.createElement("a");
    mail.href = "mailto:ocf-rtb-feedback@adobe.com?&subject=RTB%20Dashboard%20Feedback&body=Add the [RTBFeedbackCapture_MM_DD_YYY.png] file from the downloads";
    mail.target = "_top";
    mail.click();
  }

  render() {
    const { user } = this.props;
    const kdialog = this.props.dialogIsOpen ? <KendoDialog /> : null;
    const feedbackDialog = this.props.feedbackIsOpen ? <FeedBackDialog /> : null;

    const isMobileOrTablet = utils.includes(utils.getDeviceType(this.props.window), 'mobile') || utils.includes(utils.getDeviceType(this.props.window), 'tablet');
    const summaryViewDetails = isMobileOrTablet ? null : <SummaryViewDetails subFiltersSubmit={(newFilters) => { this.updateSecondaryLoading(newFilters) }} secondaryData={this.props.secondaryData} />;
    return (
      <div style={isMobileOrTablet ? { height: `${this.props.window.height}px` } : (this.props.dialogIsOpen ? { height: `100%`, marginTop: '-20px' } : { height: '100%' })}>

        {kdialog}
        {feedbackDialog}

        {/* Navigation*/}
        <Navigation mobileFiltersIsShown={this.props.mobileFiltersIsShown} onFeedbackChange={this.takeDomScreenshot} />
        <FilterPanel

          window={this.props.window} />
        {
          this.state.isLoading === true ? <LoadingScreen /> :
            (

              <span>
                {/* Data Preferences */}
                <div>
                  <div>
                    <CommentPanel user={this.props.user} />

                    {/* Primary */}

                    {this.props.mobileFiltersIsShown ||
                      this.props.mobileIsPrimary === false ? null : this.getPrimaryContent()}
                    {(this.props.activePrimaryCard === 3 || this.props.activePrimaryCard === 4 || this.props.activePrimaryCard === 5) ?
                      <div id="commingSoon">Coming Soon</div> :
                      this.state.isLoading === true ? <LoadingScreen></LoadingScreen> :
                        <span>
                          {(this.state.mobileFiltersIsShown ? null : this.getSecondaryContent())}
                          {summaryViewDetails}</span>
                    }

                    {/* {this.state.isFilterPageVisible && this.props.mobileIsPrimary ? null : null} */}

                  </div>
                </div>
              </span>
            )
        }

      </div>
    );
  }
}

function mapStateToProps(state) {

  // console.log("Filters Updated:",state.filters);
  console.log(state.summaryData.secondary);
  console.log("Filters Updated:", state.filters);
  console.log('SUMMARY JS STATE', state);
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
    NetNew: state.summaryData.secondary[0],
    Traffic: state.summaryData.secondary[5],
    Market: state.summaryData.secondary[4],
    NewQFM: state.summaryData.secondary[12],
    Conv: state.summaryData.secondary[18],
    PaidMedia: state.summaryData.secondary[16],
    Gross: state.summaryData.secondary[19],
    commentsPackage: state.commentsPackage,
    feedbackIsOpen: state.isFeedBackDialogOpen
  };
}
export default connect(
  mapStateToProps,
  actions
)(withAuth(Summary));
