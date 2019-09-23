//Import React and Component
import React, { Component } from "react";
// Import connect for react redux store
import { connect } from "react-redux";
// Import all actions from actions/index.js
import * as actions from "actions";
// Import all utilities from utilities.js
import * as utils from "../../utilities.js";
// Import Summary.css Styles
import styles from "./Summary.css";
// Import Bootstrap styles from min.css
import "bootstrap/dist/css/bootstrap.min.css";
// Import withAuth Higher Order Component from OKTA-React
import { withAuth } from "@okta/okta-react";
// Import helper to check authentication
import { checkAuthentication } from "../../helper";

import * as _ from 'lodash' 
// Import KENDO Theme Default
import "@progress/kendo-theme-default/dist/all.css";
// Import Custom Components
import LoadingScreen from "../Loading/Loading.jsx";
import Navigation from "components/Navigation/Navigation";
import FilterPanel from "components/FilterPanel/FilterPanel";
import CommentPanel from "components/CommentPanel/CommentPanel";
import ReactPiwik from 'react-piwik';
import SummaryViewDetails from "components/SummaryViewDetails/SummaryViewDetails";
import KendoDialog from "../../components/KendoDialog/KendoDialog";
import FeedBackDialog from "../../components/FeedbackDialog/FeedBack";
import PrimaryContentList from "../../components/PrimaryContent/PrimaryContentList.jsx";
import SecondaryContentList from "../../components/SecondaryContent/SecondaryContentList.jsx";
// Import html2canvas for Feedback button to take picture of dashboard
import html2canvas from 'html2canvas';
// Import file saver for File Explorer Dialog
import { saveAs } from 'file-saver';
// Import Constants
import {
  PRIMARY,
  SECONDARY,
  MOBILE,
  TABLET,
  LAPTOP,
  DIMENSIONS,
  SUMMARY_KPIS
} from "../../Constants/consts.js";

// Class Summary - Single Page APP - Main Entry Point
class Summary extends Component {
  // Constructor that initializes state, binds the
  // checkAuthentication function, and retrieves the IBE Hearbeat
  constructor(props) {
    super(props);

    /* Initializing local state */
    this.state = {
      authenticated: null,
      //Once the app initially requests all the necessary data to present dashboard for first time
      initialDataLoadIsComplete: false,
      isLoading: true,
      //For when the app loads data in the background
      requestingRemainingFinanceData: false,
      requestingRemainingDiscoverData: false,
      requestingRemainingRenewData: false,
      requestingRemainingBuyData: false,
      //Data/Filters Management booleans 
      subFiltersChanged: false,
      secondaryKpiChanged: false,
      showBanner: true,
      
    };

    /*Bindings  */
    this.checkAuthentication = checkAuthentication.bind(this);
    
  }
  /***
   * Calls the action setAppSettings which updates the viewport size in redux
   */
  resize() {
    // Create a new object with window dimensions
    const appSettings = {
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };
    // Call action to set the app settings 
    this.props.setAppSettings(appSettings);
  }

  /***
   * Lifecyle Hook for when the component mounts, only called once when the dashboard loads initially
   */
  componentDidMount() {
    // Call Action to let dashboard know comments are being fetched for Net New ARR
    this.props.isFetching(true);
    // Call action to get all the comments 
    this.props.fetchComments(this.props.activeSecondaryCard);
    // Call action to get the updated as of date and quarter for dashboard data refresh
    this.props.getUpdatedAsOfDateAndQuarter();
    // Add event listener for when the dashboard is resized
    if (window.innerWidth>425){
        window.addEventListener("resize", this.resize.bind(this));
    }
    // Call this.resize to instanstiate
    this.resize();
    this.props.getIbHeartbeat();

  }

  /***
   * Lifecycle Hook for when component updates.
   */
  componentDidUpdate(prevProps, prevState) {

    // Extract props into variables from connected redux state props
    let { activePrimaryCard, activeSecondaryCard,
      primaryIsLoaded,
      user,
      filtersAreLoaded,
      discoverSecondaryIsLoaded,
      financeSecondaryIsLoaded,
      financeXDC1IsLoaded,
      financeXDC2IsLoaded,
      trafficIsLoaded,
      muIsLoaded,
      tryIsLoaded,
      useIsLoaded,
      renewIsLoaded,
      renewCancelIsLoaded,
      renewDetailsIsLoaded,
      buySecondaryIsLoaded,
      preferencesAreAdded,
      preferencesAreLoaded,
   
      isDefaultFilters,
      buyGrossIsLoaded,
      buyMarketIsLoaded,
      buyConversionIsLoaded,
      filters
    } = this.props;
    // Call Helper to check the state of the users authentication
    this.checkAuthentication();
    // If the user has been denied authentication
    if (this.state.authenticated === false) {
      // Return the user back to the login screen
      this.props.auth.login("/")
      // Otherwise the user was authenticated
    } else {
      // If the users properties in Redux State are not empty and subID exists
      if (this.props.user.sub) {
        // Push the setUserId event to Matomo with the users given name (John) + users family name (Doe) and their LDAP name (jdoe)
        ReactPiwik.push(['setUserId', `${user.given_name + ' ' + user.family_name}(${user.email.split('@')[0]})`]);
      }
      // If the user details exist in Redux, and the filtersAreLoaded prop changes
      if (this.props.user.sub !== null && filtersAreLoaded !== prevProps.filtersAreLoaded) {
        // Call the action to update the user and preferences in InfoBurst/ GTMPOC Database
        this.props.updateOKTAUser(user, filters.quarter.valueFilters[0].value, filters.segment.valueFilters[0].value, JSON.stringify(filters.nonDMSegment.valueFilters));
        this.props.setBannerMessage()
      }

      // Declare a variable to denote whether user has changes cards
      let userChangedCards = activeSecondaryCard !== prevProps.activeSecondaryCard;

      // For when the user changes primary cards on top 1/6
      if (activePrimaryCard !== prevProps.activePrimaryCard) {
        // Push the trackEvent to Matomo, with the text primaryKPI and the category of the KPI they have chosen (Finance, Discover, etc etc)
        ReactPiwik.push(['trackEvent', 3, 'primaryKPI', this.props.primaryData[activePrimaryCard].category, 'page']);
      }
      
      // If the filters and preferences are loaded, and the preferences have not yet been added to filters
      if (filtersAreLoaded && preferencesAreLoaded && preferencesAreAdded === false) {
        // Call the action to add the prefernces to active Filters in REdux
        this.props.addPreferencesToActiveFilters(this.props.preferences);
      }// End if for adding filters to preferences


      // Once the preferences are added, and the initialDataLoad has not been completed
      if (preferencesAreAdded &&
        this.state.initialDataLoadIsComplete === false) {
        // Begin requesting data
        // Call Action to request Primary Data passing in current filters
        this.props.getPrimaryData(this.props.filters);
        
        // Call Action to request Finance NEt New and Gross NEw data passing in current filters
        this.props.getFinanceXDC1SecondaryData(this.props.filters);
        // Call Action to request secondary KPI data for Cancellations and Renewal
        this.props.getFinanceSecondaryData(this.props.filters);
        //Call Action to request Correlation Data
        // console.log('I am here 1')
        this.props.getCorrelationData(this.props.filters, this.state.accessToken)
        // Set state for isLoading to true, which shows the spinner, 
        // and initialDataLoadComplete to true, since the request for data has been made
        this.setState({
          isLoading: true,
          initialDataLoadIsComplete: true
        });

      } // End If for preferences loading and requesting beginning data

      //If calls if the user switches filters and the initialDataLoadComplete  === undefined 
      // InitialDataLoadComplete of undefined means the user is submitting filters are the load 
      // has finish and the dashboard showed the first state
      if (this.state.initialDataLoadIsComplete === undefined && (this.props.filters !== prevProps.filters)) {
        // If the user changed subfilters
        if (this.state.subFiltersChanged) {
          // If the user is on Discover (Marketable Universe, Padi Media Spend, or Sourced)
          // Market XDC
          if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND) {
            // Set the local state for isLoading to true
            this.setState({ isLoading: true });
            // Call action to request filtered Market XDC
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
          }
          // Else If the user is on Discover (Traffic, Bounce) or UQFM
          // Traffic / UQFM XDC
          else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_TRAFFIC ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_BOUNCE_RATE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_UQFM) {
            // Set the local state for isLoading to true
            this.setState({ isLoading: true });
            // Call action to request filtered Traffic XDC
            this.props.getFilteredTrafficSecondaryData(this.props.filters);
          }
          // Else If the user is on Buy Conversion
          // Traffic 
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_CONVERSION ) {
            // Set the local state for isLoading to true
            this.setState({ isLoading: true });
            // Call action to request filtered Traffic XDC
            this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
            this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
            
          }
          // Else If the user is on Discover (Traffic, Bounce) or UQFM
          // Traffic / UQFM XDC
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_MARKETING_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_PAID_MEDIASPEND ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_LTV_ROI) {
            this.setState({ isLoading: true });
            this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
          }
          // Else If the user is on Discover (Traffic, Bounce) or UQFM
          // Traffic / UQFM XDC
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWARR ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWUNITS) {
            this.setState({ isLoading: true });
            this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
            this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
            
          }
          else if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR){
            this.setState({ isLoading: true});
            // console.log('I am here 2')
            this.props.getCorrelationData(this.props.filters, this.state.accessToken);
          }

        } // End If for Sub Filter submit
        // Else the user submitted Global Filters
        else {
          // If filters are default
          if (isDefaultFilters) {
            // Request primary data from cache
            this.props.getPrimaryData(this.props.filters);
            //  Else filters are not default
          } else {
            // Request primary date from XDC async
            this.props.getFilteredPrimaryData(this.props.filters);
          }
          // Set local state isLoading to true and filtersUpdated to true
          this.setState({ isLoading: true, filtersUpdated: true });
          // Reset all booleans in REdux to denote that no data has been loaded
          this.props.updatePrimaryIsLoading(false);
          this.props.updateDiscoverSecondaryIsLoading(false);
          this.props.updateFinanceSecondaryIsLoading(false);
          this.props.updateFinanceXDC1IsLoading(false);
          this.props.updateFinanceXDC2IsLoading(false);
          this.props.updateTrafficSecondaryIsLoading(false);
          this.props.updateMuSecondaryIsLoading(false);
          this.props.updateTrySecondaryIsLoading(false);
          this.props.updateBuyConversionIsLoading(false);
          this.props.updateBuyMarketIsLoading(false);
          this.props.updateBuyGrossIsLoading(false);
          this.props.updateUseIsLoading(false);
          this.props.updateRenewIsLoading(false);
          this.props.updateRenewCancelIsLoading(false);
          this.props.updateRenewDetailsIsLoading(false);

          // If the user is on Finance Net New ARR or Gros New ARR 
          if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_NET_NEW_ARR ||
            activeSecondaryCard === SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR) {
            // If filters are default
            // console.log('I am here 3')
            this.props.getCorrelationData(this.props.filters, this.state.accessToken)
            if (isDefaultFilters) {
              // Call Action to get Finance XDC1 Data and Finance Secondary Data from XDC 2 from cache-memory
              this.props.getFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFinanceSecondaryData(this.props.filters);

            } else {
              // Call Action to get Finance XDC1 Data and Finance Secondary Data from XDC 2 from asynchronous XDC
              this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFilteredFinanceSecondaryData(this.props.filters);
            }

          }
          // If the user is on Finance Cancellations or Renewal
          else if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_CANCEL_ARR ||
            activeSecondaryCard === SUMMARY_KPIS.FINANCE_RENEW_ARR) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Finance XDC 2 Data and Finance Secondary Data from XDC 1 from cache-memory
              this.props.getFinanceXDC2SecondaryData(this.props.filters);
              this.props.getFinanceSecondaryData(this.props.filters);
            } else {
              // Call Action to get Finance XDC 2 Data and Finance Secondary Data from XDC 1 from asynchronous XDC
              this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
              this.props.getFilteredFinanceSecondaryData(this.props.filters);
            }
          }
          // If the user is on Discover MArketable or Paid Media(s)
          else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Market XDC from cache-memory
              this.props.getMarketingSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              // Call Action to get Market XDC from  asynchronous XDC
              this.props.getFilteredMarketingSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }

          }
          // If the user is on Discover Traffic, UQFM or Bounce
          else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_TRAFFIC ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_BOUNCE_RATE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_UQFM) {

            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Discover Traffic, Bounce, and UQFM from cache-memory
              this.props.getTrafficSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              // Call Action to get Discover Traffic, Bounce, and UQFM from asynchronous XDC
              this.props.getFilteredTrafficSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }

          }
          // If the user is on Try
          else if (activeSecondaryCard >= SUMMARY_KPIS.TRY_NEW_UQFM && activeSecondaryCard <= SUMMARY_KPIS.TRY_CUMU_UQFM_QFM) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Try from cache-memory
              this.props.getTrySecondaryData(this.props.filters);
            }
            else {
              // Call Action to get Try from asynchronous XDC
              this.props.getFilteredTrySecondaryData(this.props.filters);
            }
          }
          // If the user is on Buy Conversion 
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_CONVERSION) {
              
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Traffic Conversion  from cache-memory
              this.props.getBuyTrafficSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
              
            } else {
              // Call Action to Traffic Conversion asynchronous XDC
              this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
          }
          // If the user is on Buy MArketables, or Paid Media(s)
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_MARKETING_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_PAID_MEDIASPEND || 
            activeSecondaryCard === SUMMARY_KPIS.BUY_LTV_ROI) {

            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Buy Marketable Universe, Paid Media(S) from cache-memory
              this.props.getBuyMarketSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              // Call Action to get Buy  Marketable Universe, Paid Media(S) from asynchronous XDC
              this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
          }
          // If the user is on Buy Gross New or Subs 
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWARR ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWUNITS) {

            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Buy Gross New or Subs  from cache-memory
              this.props.getBuyFinanceSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              // Call Action to get Buy Gross New or Subs  from asynchronous XDC
              this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
          }
          // If the user is on a USE KPI
          else if (activeSecondaryCard >= SUMMARY_KPIS.USE_PERCENT_ACTIVATED && activeSecondaryCard <= SUMMARY_KPIS.USE_REPEAT_USER_MAU) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get USE from cache-memory
              this.props.getUseSecondaryData(this.props.filters);

            } else {
              // Call Action to get USE from asynchronous XDC
              this.props.getFilteredUseSecondaryData(this.props.filters);

            }
          }
          // If the user is on Renew Cancellations
          else if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM)
            || activeSecondaryCard === SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Renew Cancellations from cache-memory
              this.props.getRenewCancelSecondaryData(this.props.filters);
              this.props.getRenewSecondaryData(this.props.filters);

            } else {
              // Call Action to get Renew Cancellations from asynchronous XDC
              this.props.getFilteredRenewCancelSecondaryData(this.props.filters);
              this.props.getFilteredRenewSecondaryData(this.props.filters);

            }
          }
          // If the user is on Renew QTR or PF, EOT, and Fin
          else if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_PF)
            || (activeSecondaryCard >= SUMMARY_KPIS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL)) {
            // If filters are default
            if (isDefaultFilters) {
              // Call Action to get Renew QTR or PF, EOT, and Fin from cache-memory
              this.props.getRenewDetailsSecondaryData(this.props.filters);
              this.props.getRenewSecondaryData(this.props.filters);

            } else {
              // Call Action to get Renew QTR or PF, EOT, and Fin from asynchronous XDC
              this.props.getFilteredRenewDetailsSecondaryData(this.props.filters);
              this.props.getFilteredRenewSecondaryData(this.props.filters);

            }
          }
        } // End Else for Global filter Submit
      } // End if for Filter Submission

      // If the user switches cards
      if (userChangedCards) {
        // Set trackEvent in Matomo for secondaryKPI to this kpi header
        ReactPiwik.push(['trackEvent', 3, 'secondaryKPI', this.props.secondaryData[activeSecondaryCard].header, 'page']);
        if(this.props.correlationDataPrediction !==0 ){
          // console.log('I am here 4')
          this.props.updateCorrelationDataIsLoading(false)
          this.props.getCorrelationData(this.props.filters, this.state.accessToken, 
          { new_qfms :  0,
          new_uqfms:  0,
          organic_visits:  0,
          paid_visits: 0,
          total_free_downloads: 0})
        }
        this.props.isFetching();
        this.props.fetchComments(activeSecondaryCard);
        // Set local state secondaryKpiChanged to true
        this.setState({ secondaryKpiChanged: true });
        // If the user changed cards to Finance Net New or Gros New ARR
        if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_NET_NEW_ARR ||
          activeSecondaryCard === SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR) {
            // console.log('I am here 5')
            //if (activeSecondaryCard=== SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR){
              this.props.getCorrelationData(this.props.filters, this.state.accessToken)
            //}
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingFinanceData === false) {
            // if false, app may not have requested this data 
            // if finance xdc1 is not loaded
            if (!financeXDC1IsLoaded /* || this.state.requestingRemainingFinanceData === true */) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Finance XDC 1 Data from in memory cache
                this.props.getFinanceXDC1SecondaryData(this.props.filters);
                this.props.getFinanceSecondaryData(this.props.filters);
              }
              else {
                // Call action to get Finance XDC 1 Data from async xdc
                this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
                this.props.getFilteredFinanceSecondaryData(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
          }
          // If finance XDC 1 is not loaded
          else if (!financeXDC1IsLoaded) {
            // And Filters are default

            if (isDefaultFilters) {
              // Call action to get Finance XDC 1 Data from in memory cache
              this.props.getFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFinanceSecondaryData(this.props.filters);
            } else {
              // Call action to get Finance XDC 1 Data from async xdc
              this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFilteredFinanceSecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });

          }
          // else finance xdc1 is loaded
          else {
            // Set local loading state to false
            this.setState({ isLoading: false });
          }
        }
        // If the user changed cards to Finance Cancellations and Renewal
        else if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_CANCEL_ARR ||
          activeSecondaryCard === SUMMARY_KPIS.FINANCE_RENEW_ARR) {
          // If finance XDC2 has not laoded
          if (!financeXDC2IsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Finance XDC 2 Data from in memory cache
              this.props.getFinanceXDC2SecondaryData(this.props.filters);
            } else {
              // Call action to get Finance XDC 2 Data from async xdc
              this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          }
        }
        // If the user changed cards to Discover Marketable and Paid Media (S)
        else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE ||
          activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED ||
          activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND) {
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingDiscoverData === false) {
            // If Market XDC has not laoded
            if (!muIsLoaded) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Market XDC from in memory cache
                this.props.getMarketingSecondaryData(this.props.filters);
                this.props.getDiscoverSecondary(this.props.filters);
              } else {
                // Call action to get Market XDC Data from async xdc
                this.props.getFilteredMarketingSecondaryData(this.props.filters);
                this.props.getFilteredDiscoverSecondary(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
            // Else If Market XDC has not laoded
          } else if (!muIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Market XDC from in memory cache
              this.props.getMarketingSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              // Call action to get Market XDC Data from async xdc
              this.props.getFilteredMarketingSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          } else {
            // Set local loading state to false
            this.setState({ isLoading: false });

          }
        }
        // If the user changed cards to Discover Traffic, Bounce and UQFM
        else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_TRAFFIC ||
          activeSecondaryCard === SUMMARY_KPIS.DISCOVER_BOUNCE_RATE ||
          activeSecondaryCard === SUMMARY_KPIS.DISCOVER_UQFM) {
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingDiscoverData === false) {
            // And Traffic has not loaded
            if (!trafficIsLoaded) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Traffic XDC from in memory cache
                this.props.getTrafficSecondaryData(this.props.filters);
                this.props.getDiscoverSecondary(this.props.filters);
              } else {
                // Call action to get Traffic XDC Data from async xdc
                this.props.getFilteredTrafficSecondaryData(this.props.filters);
                this.props.getFilteredDiscoverSecondary(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
          } //Else if traffic not loaded
          else if (!trafficIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Traffic XDC from in memory cache
              this.props.getTrafficSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              // Call action to get Traffic XDC Data from async xdc
              this.props.getFilteredTrafficSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          } else {
            // Set local loading state to false
            this.setState({ isLoading: false });
          }
        }
        // If the user changed cards to Try
        else if (activeSecondaryCard === SUMMARY_KPIS.TRY_NEW_UQFM) {
          // If try is not loaded
          if (!tryIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Try XDC from in memory cache
              this.props.getTrySecondaryData(this.props.filters);
            } else {
              // Call action to get Try XDC Data from async xdc
              this.props.getFilteredTrySecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          }
        }
        // If the user changed cards to Buy Conversion
        else if (activeSecondaryCard === SUMMARY_KPIS.BUY_CONVERSION) {
                    
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingBuyData === false) {
            // And Conversion has not loaded
            if (!buyConversionIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Conversion XDC from in memory cache
                this.props.getBuyTrafficSecondaryData(this.props.filters);
                this.props.getBuySecondaryData(this.props.filters);
              } else {
                // Call action to get Conversion XDC from in memory cache
                this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
                this.props.getFilteredBuySecondaryData(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
          } else if (!buyConversionIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Conversion XDC from in memory cache
              this.props.getBuyTrafficSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              // Call action to get Conversion XDC from in memory cache
              this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });

          } else {
            // Set local loading state to false
            this.setState({ isLoading: false });

          }
        }
        // If the user changed cards to Buy Marketing
        else if (activeSecondaryCard === SUMMARY_KPIS.BUY_MARKETING_SOURCED ||
          activeSecondaryCard === SUMMARY_KPIS.BUY_PAID_MEDIASPEND||activeSecondaryCard===SUMMARY_KPIS.BUY_LTV_ROI) {
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingBuyData === false) {
            // And Buy MArket has not loaded
            if (!buyMarketIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Market XDC from in memory cache
                
                this.props.getBuyMarketSecondaryData(this.props.filters);
                this.props.getBuySecondaryData(this.props.filters);
              } else {
                // Call action to get Market XDC from in memory cache
                this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
                this.props.getFilteredBuySecondaryData(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
            // else Buy MArket has not loaded
          } else if (!buyMarketIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Market XDC from in memory cache
              this.props.getBuyMarketSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              // Call action to get Market XDC from in memory cache
              this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });

          } else {
            // Set local loading state to false
            this.setState({ isLoading: false });

          }
        }
        // If the user changed cards to Buy Gross Units or ARR
        else if (activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWARR ||
          activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWUNITS) {
          // Check if the state variable requestRemainingData  === false
          if (this.state.requestingRemainingBuyData === false) {

            // And Buy Gross has not loaded
            if (!buyGrossIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
              // And Filters are default
              if (isDefaultFilters) {
                // Call action to get Finance XDC from in memory cache
                this.props.getBuyFinanceSecondaryData(this.props.filters);
                this.props.getBuySecondaryData(this.props.filters);

              } else {
                // Call action to get Finance XDC from in memory cache
                this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
                this.props.getFilteredBuySecondaryData(this.props.filters);
              }
              // Set local loading state to true
              this.setState({ isLoading: true });
            }
          } else if (!buyGrossIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Finance XDC from in memory cache
              this.props.getBuyFinanceSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              // Call action to get Finance XDC from in memory cache
              this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });

          } else {
            // Set local loading state to false
            this.setState({ isLoading: false });

          }
        }
        // If the user changed cards to Finance Net New or Gros New ARR
        else if (activeSecondaryCard === SUMMARY_KPIS.USE_PERCENT_ACTIVATED) {
          if (!useIsLoaded) {
            if (isDefaultFilters) {
              this.props.getUseSecondaryData(this.props.filters);

            } else {
              this.props.getFilteredUseSecondaryData(this.props.filters);

            }
            this.setState({ isLoading: true });
          }
        }
        // If the user changed cards to Renew Finance
        else if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM)
          || activeSecondaryCard === SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) {
          // If Renew Cancel has not loaded
          if (!renewCancelIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // Call action to get Renew XDC from in memory cache
              this.props.getRenewCancelSecondaryData(this.props.filters);
              this.props.getRenewSecondaryData(this.props.filters);

            } else {
              // Call action to get Renew XDC from in memory cache
              this.props.getFilteredRenewCancelSecondaryData(this.props.filters);
              this.props.getFilteredRenewSecondaryData(this.props.filters);

            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          }
        }
        // If the user changed cards to Renew Details
        else if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_PF)
          || (activeSecondaryCard >= SUMMARY_KPIS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL)) {
          // If Renew Details has not loaded
          if (!renewDetailsIsLoaded) {
            // And Filters are default
            if (isDefaultFilters) {
              // debugger;
              // Call action to get Renew Details XDC from in memory cache
              this.props.getRenewDetailsSecondaryData(this.props.filters);
              this.props.getRenewSecondaryData(this.props.filters);
            } else {
              // Call action to get Renew Details XDC from in memory cache
              this.props.getFilteredRenewDetailsSecondaryData(this.props.filters);
              this.props.getFilteredRenewSecondaryData(this.props.filters);
            }
            // Set local loading state to true
            this.setState({ isLoading: true });
          }
        }
      }

      /**Setting Load to False ... */
      switch (this.props.activePrimaryCard) {
        // On Finance Primary
        case 0:
          // When the initial load is complete          
          if (primaryIsLoaded && financeSecondaryIsLoaded && financeXDC1IsLoaded && this.state.initialDataLoadIsComplete === true) {
            // Set Local state for initialDataLoadIsComplete to undefined telling the dashboard it has loaded initially,
            // isLoading to false telling the dashboard to take the loading screen away
            // requestRemainingFinanceData to true telling dashboard data is loading in the background
            
            this.setState({
              initialDataLoadIsComplete: undefined,
              isLoading: false,
              requestingRemainingFinanceData: true,
            });
            // Call action to get Finance 2 XDC detail data
            this.props.getFinanceXDC2SecondaryData(this.props.filters);
          } // Else when the user switches cards or submits filters
          else {
            //Stop Loading in either New New Or Gros New ARR
            if (activeSecondaryCard === SUMMARY_KPIS.FINANCE_NET_NEW_ARR ||
              activeSecondaryCard === SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR) {
              // If the user switched secondary cards
              if (this.state.secondaryKpiChanged === true) {
                // and if finance xdc1 is loaded, and the finance secondary data is loaded
                if (financeXDC1IsLoaded === true && financeSecondaryIsLoaded === true) {
                  // Set localstate for secondaryKpiChanged to false, 
                  // and isLoading to false
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false
                  });
                  // If finance XDC 2 has not loaded
                  if (financeXDC2IsLoaded === false) {
                    // Set Local state for initialDataLoadIsComplete to undefined telling the dashboard it has loaded initially,
                    this.setState({
                      requestingRemainingFinanceData: true,
                    });
                    // Call action to get Finance 2 XDC detail data
                    this.props.getFinanceXDC2SecondaryData(this.props.filters);
                  } else {
                    // Set Local state requestRemainingFinanceData to false telling dashboard data has loaded the data
                    this.setState({
                      requestingRemainingFinanceData: false,
                    });
                  }
                }
              } // Else if filters were updated
              else if (this.state.filtersUpdated === true) {
                // And primary data is loaded, finance xdc1 is loaded and secondary Finance is loaded
                if (primaryIsLoaded === true && (financeXDC1IsLoaded === true && financeSecondaryIsLoaded === true)) {
                  // Set local state isLoading to false, 
                  // requestRemainingFinanceData to true
                  // filtersUpdated to false
                  this.setState({
                    isLoading: false,
                    requestingRemainingFinanceData: true,
                    filtersUpdated: false
                  });
                  // Get Filtered Finance XDC 2 Data in Background
                  this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
                }
              } else if(this.props.correlationIsLoaded && this.state.isLoading){
                this.setState({
                  isLoading: false
                })
              }
            }
            //Stop Loading in either Cancellation or Renewal
            else {
              // If the user switched secondary cards
              if (this.state.secondaryKpiChanged === true) {
                // if financexdc is loaded and finance secondary is loaded is true
                if (financeXDC2IsLoaded === true && financeSecondaryIsLoaded === true) {
                  // Set local state secondaryKPI changed and isLoading to false
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false
                  });
                  // if finance xdc 1 has not loaded
                  if (financeXDC1IsLoaded === false) {
                    // Set local state requestingREmaining data to true
                    this.setState({
                      requestingRemainingFinanceData: true,
                    });
                    // Call action to get finance XDC 1 SEcondary data
                    this.props.getFinanceXDC1SecondaryData(this.props.filters);
                  } else {
                    //Set local state requestingRemainingFinance Data to false
                    this.setState({
                      requestingRemainingFinanceData: false,
                    });
                  }
                }
              }// Else if filters were updated
              else if (this.state.filtersUpdated === true) {
                // And primary data is loaded, finance xdc1 is loaded and secondary Finance is loaded
                if (primaryIsLoaded === true && (financeXDC2IsLoaded === true && financeSecondaryIsLoaded === true)) {
                  // Set local state isLoading to false, 
                  // requestRemainingFinanceData to true
                  // filtersUpdated to false
                  this.setState({
                    isLoading: false,
                    requestingRemainingFinanceData: true,
                    filtersUpdated: false
                  });
                  // Get Filtered Finance XDC 1 Data in Background
                  this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
                }
              }
            }
          }
          break;
        // On Discover Primary
        case 1:
          if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND) {
            if (this.state.secondaryKpiChanged === true) {
              if (muIsLoaded === true && discoverSecondaryIsLoaded === true) {

                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (trafficIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getTrafficSecondaryData(this.props.filters)
                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              // Market Filters loaded
              if (muIsLoaded && primaryIsLoaded === true && discoverSecondaryIsLoaded) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (trafficIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getFilteredTrafficSecondaryData(this.props.filters)
                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (muIsLoaded) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          else if (activeSecondaryCard === SUMMARY_KPIS.DISCOVER_TRAFFIC ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_BOUNCE_RATE ||
            activeSecondaryCard === SUMMARY_KPIS.DISCOVER_UQFM) {

            if (this.state.secondaryKpiChanged === true) {
              if (trafficIsLoaded === true && discoverSecondaryIsLoaded === true) {

                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (muIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getFilteredMarketingSecondaryData(this.props.filters)
                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              // Traffic Filters loaded
              if (trafficIsLoaded && primaryIsLoaded === true && discoverSecondaryIsLoaded) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (muIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getFilteredMarketingSecondaryData(this.props.filters)
                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (trafficIsLoaded) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          break;

        // On Try Primary
        case 2:
          if (this.state.secondaryKpiChanged === true || this.state.filtersUpdated === true) {
            if (tryIsLoaded === true) {

              this.setState({ isLoading: false, secondaryKpiChanged: false, filtersUpdated: false });

            }
          }
          break;
        // On Buy Primary
        case 3:
          
          if (activeSecondaryCard === SUMMARY_KPIS.BUY_CONVERSION) {
            if (this.state.secondaryKpiChanged === true) {
              if (buyConversionIsLoaded === true && buySecondaryIsLoaded === true) {

                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (buyGrossIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyFinanceSecondaryData(this.props.filters);
                  this.props.getBuyMarketSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              // Market Filters loaded
              if (buyConversionIsLoaded && primaryIsLoaded === true && buySecondaryIsLoaded) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (buyGrossIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyFinanceSecondaryData(this.props.filters);
                  this.props.getBuyMarketSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (buyConversionIsLoaded) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_MARKETING_SOURCED ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_PAID_MEDIASPEND || activeSecondaryCard === SUMMARY_KPIS.BUY_LTV_ROI) {

            if (this.state.secondaryKpiChanged === true) {
              if (buyMarketIsLoaded === true && buySecondaryIsLoaded === true) {

                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (buyGrossIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyFinanceSecondaryData(this.props.filters);
                  this.props.getBuyTrafficSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              if (buyMarketIsLoaded === true && primaryIsLoaded === true && buySecondaryIsLoaded === true) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (buyGrossIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyFinanceSecondaryData(this.props.filters);
                  this.props.getBuyTrafficSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (buyMarketIsLoaded === true) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          else if (activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWUNITS ||
            activeSecondaryCard === SUMMARY_KPIS.BUY_GROSS_NEWARR) {

            if (this.state.secondaryKpiChanged === true) {
              if (buyGrossIsLoaded === true && buySecondaryIsLoaded === true) {

                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (buyMarketIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyMarketSecondaryData(this.props.filters);
                  this.props.getBuyTrafficSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              // Market Filters loaded
              if (buyGrossIsLoaded === true && primaryIsLoaded === true && buySecondaryIsLoaded) {

                this.setState({ isLoading: false, filtersUpdated: false });
                if (buyMarketIsLoaded === false || buyConversionIsLoaded === false) {
                  this.setState({ requestingRemainingDiscoverData: true });
                  this.props.getBuyTrafficSecondaryData(this.props.filters);
                  this.props.getBuyMarketSecondaryData(this.props.filters);

                } else {
                  this.setState({ requestingRemainingDiscoverData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (buyGrossIsLoaded === true) {

                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          break;
        // On Use Primary
        case 4:
          if (this.state.secondaryKpiChanged === true || this.state.filtersUpdated === true) {
            if (useIsLoaded === true) {

              this.setState({ isLoading: false, secondaryKpiChanged: false, filtersUpdated: false });

            }
          }
          break;
        // On Renew Primary
        case 5:
          if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM)
            || activeSecondaryCard === SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) {
            if (this.state.secondaryKpiChanged === true) {
              if (renewCancelIsLoaded === true && renewIsLoaded === true) {
                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (renewDetailsIsLoaded === false) {
                  this.setState({ requestingRemainingRenewData: true });
                  this.props.getRenewDetailsSecondaryData(this.props.filters);


                } else {
                  this.setState({ requestingRemainingRenewData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              // Market Filters loaded
              if (renewCancelIsLoaded && primaryIsLoaded === true && renewIsLoaded) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (renewDetailsIsLoaded === false) {
                  this.setState({ requestingRemainingRenewData: true });
                  this.props.getRenewDetailsSecondaryData(this.props.filters);


                } else {
                  this.setState({ requestingRemainingRenewData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (renewCancelIsLoaded) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }
          }
          else if ((activeSecondaryCard >= SUMMARY_KPIS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_PF)
            || (activeSecondaryCard >= SUMMARY_KPIS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL)) {
            if (this.state.secondaryKpiChanged === true) {
              if (renewDetailsIsLoaded === true && renewIsLoaded === true) {
                this.setState({ isLoading: false, secondaryKpiChanged: false });
                if (renewCancelIsLoaded === false) {
                  this.setState({ requestingRemainingRenewData: true });
                  this.props.getRenewCancelSecondaryData(this.props.filters);

                  this.setState({ requestingRemainingRenewData: false });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              if (renewDetailsIsLoaded === true && primaryIsLoaded === true && renewIsLoaded === true) {
                this.setState({ isLoading: false, filtersUpdated: false });
                if (renewCancelIsLoaded === false) {
                  this.setState({ requestingRemainingRenewData: true });
                  this.props.getRenewCancelSecondaryData(this.props.filters);
                } else {
                  this.setState({ requestingRemainingRenewData: false });
                }
              }
            } else if (this.state.subFiltersChanged) {
              if (renewDetailsIsLoaded === true) {
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }

          }
          break;
      }
    }
  }
  updateSecondaryLoading(newFilters) {
    this.setState({ subFiltersChanged: true })
    this.props.submitFilters(newFilters);
    switch (this.props.activeSecondaryCard) {
      case SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case SUMMARY_KPIS.DISCOVER_TRAFFIC:
        this.props.updateTrafficSecondaryIsLoading(false);
        this.props.updateBuyConversionIsLoading(false);
      case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case SUMMARY_KPIS.DISCOVER_BOUNCE_RATE:
        this.props.updateTrafficSecondaryIsLoading(false);
        this.props.updateBuyConversionIsLoading(false);
        break;
      case SUMMARY_KPIS.BUY_MARKETING_SOURCED:
        this.props.updateBuyMarketIsLoading(false);
        break;
      case SUMMARY_KPIS.BUY_PAID_MEDIASPEND:
        this.props.updateBuyMarketIsLoading(false);
        break;
      case SUMMARY_KPIS.BUY_CONVERSION:
        this.props.updateBuyConversionIsLoading(false);
        this.props.updateTrafficSecondaryIsLoading(false);
        // this.props.updateBuyGrossIsLoading(false);

        break;
        case SUMMARY_KPIS.BUY_LTV_ROI:
            this.props.updateBuyMarketIsLoading(false);
  
          break;
      case SUMMARY_KPIS.BUY_GROSS_NEWARR:
        
        this.props.updateBuyGrossIsLoading(false);
        // this.props.updateBuyConversionIsLoading(false);
        this.props.updateCorrelationDataIsLoading(false)
        break;
      case SUMMARY_KPIS.BUY_GROSS_NEWUNITS:
        this.props.updateBuyGrossIsLoading(false);
        // this.props.updateBuyConversionIsLoading(false);
        break;
      case SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR:
        this.props.updateCorrelationDataIsLoading(false)
    }
  }

  updateActivePrimary(index) {
    this.props.updateActivePrimaryCard(index);
    switch (index) {
      case (0):
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.FINANCE_NET_NEW_ARR);
        break;
      case (1):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE);
        break;
      case (2):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.TRY_NEW_UQFM);
        break;
      case (3):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.BUY_GROSS_NEWARR);
        break;
      case (4):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.USE_PERCENT_ACTIVATED);
        break;
      default:
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(SUMMARY_KPIS.RENEW_CANCEL);
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

    let sortedData =
      utils.includes(this.props.deviceType, 'mobile') ||
        utils.includes(this.props.deviceType, 'tablet') ? [this.props.secondaryData[this.props.activeSecondaryCard], ...this.props.secondaryData.filter(item => item.index !== this.props.activeSecondaryCard)] : this.props.secondaryData
    return (
      <SecondaryContentList
        statsDetails={this.props.secondaryData[this.props.activeSecondaryCard].details.stats}
        detailsData={this.props.secondaryData[this.props.activeSecondaryCard].details.qtdw}
        valueType={this.props.secondaryData[this.props.activeSecondaryCard].valueType}
        data={sortedData}
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
        resetSecondaryList={(index) => this.updateActivePrimary(index)}
        isTWPOrNonTWP={
          (
           (!_.find(this.props.filters.qfmType.valueFilters, ['value','TWP']) && 
                 _.find(this.props.filters.qfmType.valueFilters, ['value','NON-TWP'])) 
           ||
           (_.find(this.props.filters.qfmType.valueFilters, ['value','TWP']) &&
                 !_.find(this.props.filters.qfmType.valueFilters, ['value','NON-TWP']))) 
         }
         
      />
    );
  };
  async login() {
    this.props.auth.login('/');
  }

  takeDomScreenshot = () => {

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

  //Code to display Banner
  getBanner = (message)=>{
    return (
      <div className="Banner">
      {/* <marquee>
        {message}
      </marquee> */}
      <div>
      <p>
        {message} 
      </p>
      
      
      </div>
      <button onClick={this.toggleBannerDisplay} className="BannerButton"></button>
      </div>
    )
  }

  toggleBannerDisplay=()=>{
    this.setState({showBanner : !this.state.showBanner})
  }

  

  render() {
    // REDUX PROPS 
    const {
      user,
      dialogIsOpen,
      window,
      mobileFiltersIsShown,
      mobileIsPrimary,
      activePrimaryCard,
      activeSecondaryCard,
      secondaryData } = this.props;
    // Preferences Dialog  
    // console.log('Rendering Summary ', activePrimaryCard + ' ' + this.props.activeSecondaryCard)
    // console.log(`Summary Condition  ${activeSecondaryCard==SUMMARY_KPIS.BUY_CONVERSION} ${activeSecondaryCard} ${SUMMARY_KPIS.BUY_CONVERSION}`)
    const kdialog = dialogIsOpen ? <KendoDialog /> : null;
    const isMobileOrTablet = utils.includes(utils.getDeviceType(window), 'mobile') || utils.includes(utils.getDeviceType(window), 'tablet');
    const summaryViewDetails = isMobileOrTablet ? null : <SummaryViewDetails token = {this.state.accessToken} isLoading={this.state.isLoading} subFiltersSubmit={(newFilters) => { this.updateSecondaryLoading(newFilters) }} secondaryData={secondaryData} 
                nullifyQrf={activeSecondaryCard==SUMMARY_KPIS.BUY_CONVERSION} />;
    
    //Code for the Banner 
    const banner  = this.state.showBanner ? this.getBanner('"Data validations are in progress, please do not use this data for analysis"') : null;
    
    return (
      <div style={isMobileOrTablet ? { height: `${window.height}px` } : (dialogIsOpen ? { height: `100%`, marginTop: '-20px' } : { height: '100%' })}>
        {this.state.authenticated && (
          <span>
            {this.props.bannerMessage.length>0? this.getBanner(this.props.bannerMessage): null}
            {kdialog}

            {/* Navigation*/}
            <Navigation
              mobileFiltersIsShown={mobileFiltersIsShown}
              onFeedbackChange={this.takeDomScreenshot} />
            <FilterPanel
              isMobileOrTablet={isMobileOrTablet}
              window={window}
              activePrimary={activePrimaryCard} />
            {
              this.state.isLoading === true ? <LoadingScreen /> :
                (
                  <span>
                    {/* Data Preferences */}
                    <div>
                                      
                      <div>
                        <CommentPanel user={user} />
                        {/* Primary */}
                        {mobileFiltersIsShown
                          ? null : mobileIsPrimary === true ? this.getPrimaryContent() : null}
                        {/* { this.props.activePrimaryCard===4 ?
                                <div className="maskBanner">
                                  <p>USE KPIs are in the works and not available. The new USE functionality will be available by the end of Q3.
                                    Meanwhile please use <a href="https://dashdiscovery.corp.adobe.com/#/views/ccea_engagement/Summary" target="_blank">Engagement dashboard</a>
                                  </p>
                                </div>
                                :
                                this.state.isLoading === true ? <LoadingScreen /> :
                          <span>
                            {isMobileOrTablet === false ?
                              this.getSecondaryContent() : (this.props.mobileFiltersIsShown ? null : this.getSecondaryContent())}
                            {/* {this.props.activeSecondaryCard===SUMMARY_KPIS.USE_MONTH_RETURN_RATE ? <div id='commingSoon'>Coming Soon</div> :  summaryViewDetails} }
                            </span>


                        }
                         */}
                        {this.state.isLoading === true ? <LoadingScreen /> :
                          <span>
                            {isMobileOrTablet === false ?
                              this.getSecondaryContent() : (this.props.mobileFiltersIsShown ? null : this.getSecondaryContent())}
                            { summaryViewDetails }
                            {/* {this.props.activeSecondaryCard===SUMMARY_KPIS.USE_MONTH_RETURN_RATE ? <div id='commingSoon'>Coming Soon</div> :  summaryViewDetails}</span> */}
                            {/* {this.props.activePrimaryCard===4 && 
                          // //      ((isMobileOrTablet && this.props.secondaryIsVisible) || (!isMobileOrTablet) && this.props.primaryIsVisible)  ? 
                          // //   <div className="maskBanner">
                          // //   <p>USE KPIs are in the works and not available. The new USE functionality will be available by the end of Q3.
                          // //     Meanwhile please use <a href="https://dashdiscovery.corp.adobe.com/#/views/ccea_engagement/Summary" target="_blank">Engagement dashboard</a>
                          // //   </p>
                          // // </div> :  summaryViewDetails} */}
                          
                                                    
                          {/* 
                          {this.props.activePrimaryCard===4 
                          && ((isMobileOrTablet && !this.props.mobileIsPrimary) ||
                          (!isMobileOrTablet))
                          ? <div className="maskBanner">
                          <p>USE KPIs are in the works and not available. The new USE functionality will be available by the end of Q3.
                            Meanwhile please use <a href="https://dashdiscovery.corp.adobe.com/#/views/ccea_engagement/Summary" target="_blank">Engagement dashboard</a>
                          </p>
                        </div> :  summaryViewDetails} */}
                        
                        </span>

                        }
                        
                      </div>
                    </div>
                  </span>
                )
            }
          </span>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialogIsOpen: state.isDialogOpen,
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
    mobileFiltersIsShown: state.appSettings.views.mobileFilterPageIsVisible,
    filters: state.filters,

    commentsPackage: state.commentsPackage,
    dataIsReset: state.summaryData.dataIsReset,
    primaryIsLoaded: state.summaryData.primaryIsLoaded,
    discoverSecondaryIsLoaded: state.summaryData.discoverSecondaryIsLoaded,
    financeSecondaryIsLoaded: state.summaryData.financeSecondaryIsLoaded,
    financeXDC1IsLoaded: state.summaryData.financeXDC1IsLoaded,
    financeXDC2IsLoaded: state.summaryData.financeXDC2IsLoaded,
    trafficIsLoaded: state.summaryData.trafficIsLoaded,
    muIsLoaded: state.summaryData.muIsLoaded,
    buyGrossIsLoaded: state.summaryData.buyGrossIsLoaded,
    buyMarketIsLoaded: state.summaryData.buyMarketIsLoaded,
    buySecondaryIsLoaded: state.summaryData.buySecondaryIsLoaded,
    buyConversionIsLoaded: state.summaryData.buyConversionIsLoaded,
    tryIsLoaded: state.summaryData.tryIsLoaded,
    useIsLoaded: state.summaryData.useIsLoaded,
    renewIsLoaded: state.summaryData.renewIsLoaded,
    renewCancelIsLoaded: state.summaryData.renewCancelIsLoaded,
    renewDetailsIsLoaded: state.summaryData.renewDetailsIsLoaded,
    filtersAreLoaded: state.filters.filtersAreLoaded,
    globalFiltersSubmitted: state.filters.globalFiltersSubmitted,
    subFiltersSubmitted: state.filters.subFiltersSubmitted,
    resetFilters: state.filters.resetFilters,
    filtersAreDefault: state.filters.filtersAreDefault,
    preferencesAreAdded: state.filters.preferencesAreAdded,
    preferencesAreLoaded: state.preferences.preferencesAreLoaded,
    isDefaultFilters: state.filters.isDefaultFilters,
    correlationIsLoaded: state.correlationData.correlationDataIsLoaded,
    correlationDataPrediction: state.correlationData.prediction,
    bannerMessage: state.bannerMessage
  };
}
export default connect(
  mapStateToProps,
  actions
)(withAuth(Summary));
