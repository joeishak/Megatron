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
      initialDataLoadIsComplete: false, //Once the app initially requests all the necessary data to present dashboard for first time
      isLoading: true,
      isInitiallyLoading: true,
      //Primary Loaded - Request has been made
      // financePrimaryLoaded: false,
      // trafficPrimaryLoaded: false,
      // tryPrimaryLoaded: false,
      // buyPrimaryLoaded: false,
      // usePrimaryLoaded: false,
      // renewPrimaryLoaded: false,
      //Secondary Loaded - Request Has Been Made
      financeXDC1HasLoaded: false,
      financeXDC2HasLoaded: false,
      trafficHasLoaded: false,
      muHasLoaded: false,
      tryHasLoaded: false,
      buyHasLoaded: false,
      useHasLoaded: false,
      renewHasloaded: false,
      //While request is being Fetched
      fetchingFinanceXDC1: false,
      fetchingFinanceXDC2: false,
      fetchingFinanceXDC1Details: false,
      fetchingFinanceXDC2Details: false,
      fetchingDiscoverTraffic: false,
      fetchingDiscoverMarketing: false,
      fetchingDiscoverTrafficDetails: false,
      fetchingDiscoverMUDetails: false,
      fetchingTry: false,
      fetchingBuyFinance: false,
      fetchingBuyMarket: false,
      fetchingBuyTraffic: false,
      //Data/Filters Management booleans 
      filtersChanged: false,
      subFiltersChanged: false,
      secondaryKpiChanged: false,
      userChangedCards: false
    };

    /*Bindings  */
    this.checkAuthentication = checkAuthentication.bind(this);
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



  }

  componentDidUpdate(prevProps, prevState) {
    // Boolean Rule Tests
    let filtersAreLoaded = Object(this.props.filters).hasOwnProperty('combined') && Object(prevProps.filters).hasOwnProperty('combined') === false;
    let preferencesAreLoaded = Object(this.props.preferences).hasOwnProperty('geoFilters');
    let appInitialLoadIsComplete = this.props.NEwQTDW.qtd.length !== 0;
    let primaryLoaded = this.props.summaryData.primary[this.props.activePrimaryCard].value !== prevProps.summaryData.primary[this.props.activePrimaryCard].value;
    let secondaryLoaded = this.props.summaryData.secondary[this.props.activeSecondaryCard].value !== prevProps.summaryData.secondary[this.props.activeSecondaryCard].value;
    //OKTA Check Users Authentication status
    this.checkAuthentication();
    // if (this.props.NetNew.comments !== undefined) {
    //   this.props.fetchCommentsCount();

    // }
    //When user loads get their settings from the DB
    if (this.props.user !== prevProps.user) {
      this.props.getUserSettings(this.props.user.sub);
    }
    //Check if All Primaries are loaded
    if (this.props.financePrimary.value !== prevProps.financePrimary.value) {
      this.setState({ financePrimaryLoaded: true })
    }
    if (this.props.trafficPrimary.value !== prevProps.trafficPrimary.value) {
      this.setState({ trafficPrimaryLoaded: true })
    }
    if (this.props.tryPrimary.value !== prevProps.tryPrimary.value) {
      this.setState({ tryPrimaryLoaded: true })
    }
    if (this.props.buyPrimary.value !== prevProps.buyPrimary.value) {
      this.setState({ buyPrimaryLoaded: true })
    }
    if (this.props.usePrimary.value !== prevProps.usePrimary.value) {
      this.setState({ usePrimaryLoaded: true })
    }
    if (this.props.renewPrimary.value !== prevProps.renewPrimary.value) {
      this.setState({ renewPrimaryLoaded: true })
    }
    //Check if All sEcondaries are laoded
    if (this.props.NetNew.value !== prevProps.NetNew.value) {
      console.log('XDC 1 Secondary Changed');
      this.setState({ fetchingFinanceXDC1: false });
    }
    if (this.props.Cancel.value !== prevProps.Cancel.value) {
      console.log('XDC2 Secondary  Changed');
      this.setState({ fetchingFinanceXDC2: false, financeXDC2HasLoaded: true });
    }
    if (this.props.Traffic.value !== prevProps.Traffic.value) {
      console.log('Traffic Changed');
      this.setState({ fetchingDiscoverTraffic: false });
    }
    if (this.props.Market.value !== prevProps.Market.value) {
      console.log('Marketing Changed');
      this.setState({ fetchingDiscoverMarketing: false });
    }
    if (this.props.PaidSourced.value !== prevProps.PaidSourced.value) {
      console.log('PaidSourced Changed');
      this.setState({ fetchingDiscoverMarketing: false });
    }
    if (this.props.PaidSpend.value !== prevProps.PaidSpend.value) {
      console.log('PaidSpend Changed');
      this.setState({ fetchingDiscoverMarketing: false });
    }
    if (this.props.NewUQFM.value !== prevProps.NewUQFM.value) {
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
    //Details
    if (this.props.Traffic.details.qtdw.qtd[0].value !== prevProps.Traffic.details.qtdw.qtd[0].value) {
      console.log('Traffic Details Changed');
      this.setState({ fetchingDiscoverTrafficDetails: false });
    }
    if (this.props.Market.details.qtdw.qtd[0].value !== prevProps.Market.details.qtdw.qtd[0].value) {
      console.log('MArket Details Changed');
      this.setState({ fetchingDiscoverMUDetails: false });
    }
    if (this.props.PaidSpend.details.qtdw.qtd[0].value !== prevProps.PaidSpend.details.qtdw.qtd[0].value) {
      console.log('PaidSpend Details Changed');
      this.setState({ fetchingDiscoverMUDetails: false });
    }
    if (this.props.PaidSourced.details.qtdw.qtd[0].value !== prevProps.PaidSourced.details.qtdw.qtd[0].value) {
      console.log('PaidSourced Details Changed');
      this.setState({ fetchingDiscoverMUDetails: false });
    }
    // console.log(this.props.NetNew, prevProps.NetNew);

    if (this.props.NetNew.details.qtdw.qtd[0].value !== prevProps.NetNew.details.qtdw.qtd[0].value) {
      console.log('XDC 1 Details Changed');
      this.setState({ fetchingFinanceXDC1Details: false });
    }
    if (this.props.Cancel.details.qtdw.qtd[0].value !== prevProps.Cancel.details.qtdw.qtd[0].value) {
      console.log('XDC 2 Details Changed');
      this.setState({ fetchingFinanceXDC2Details: false });
    }
    // console.log('Checking Summary Data(', primaryLoaded, secondaryLoaded, '): 1. Previouly: ', this.props.summaryData, 'Currently: ', prevProps.summaryData);

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
      this.setState({ previouslyLoadedFilters: this.props.filters.combined.valueFitlers })
    }
    if (this.state.filtersAreLoaded && preferencesAreLoaded && this.state.preferncesAreAddedToFilters === false) {
      console.log('Just recieved the preferences');
      this.props.addPreferencesToActiveFilters(this.props.preferences);
      this.setState({ preferncesAreAddedToFilters: true })
    }
    // When the app has all necessary data to make requests
    if (this.state.filtersAreLoaded === true &&
      this.state.preferncesAreAddedToFilters === true &&
      this.state.initialDataLoadIsComplete === false) {
      console.log('Both Preferences and Filters are loaded', this.props.activePrimaryCard);
      console.log('Fetching Finance')
      this.setState({ isLoading: true, financeXDC1HasLoaded: true, fetchingFinanceXDC1Details: true, fetchingFinanceXDC2: true, financeXDC2HasLoaded: true, initialDataLoadIsComplete: true });
      this.props.getPrimaryData(this.props.filters);
      this.props.getFinanceXDC1SecondaryData(this.props.filters);
      this.props.getFinanceSecondaryData(this.props.filters);
    }

    // When the app has already loaded and the filters change
    if (this.state.initialDataLoadIsComplete === undefined && (this.props.filters !== prevProps.filters)) {
      console.log(this.state.subFiltersChanged);

      if (this.state.subFiltersChanged === true) {

        console.log("Sub Filters Changed");
        switch (this.props.activeSecondaryCard) {
          case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
            console.log('Fetching TRAFFIC')
            this.setState({ isLoading: true, fetchingDiscoverTraffic: true });
            this.setState({ trafficHasLoaded: true });
            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
            console.log('Fetching mu');
            this.props.updateMuSecondaryIsLoading(false);
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.setState({ isLoading: true, muHasLoaded: true, fetchingDiscoverMUDetails: true });

            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
            console.log('Fetching mu');
            this.setState({ isLoading: true, muHasLoaded: true, fetchingDiscoverMUDetails: true });
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
            console.log('Fetching mu');
            this.setState({ isLoading: true, muHasLoaded: true, fetchingDiscoverMUDetails: true });
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            break;
          case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
            console.log('Fetching Buy');
            console.log('Fetching TRAFFIC');
            this.setState({ isLoading: true, trafficHasLoaded: true, fetchingDiscoverTraffic: true });
            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            break;
          case 4:
            console.log('Fetching Use');
            // this.props.getUseSecondaryData(this.props.filters);
            break;
          case 5:
            console.log('Fetching Renew')
            // this.props.getRenewSecondaryData(this.props.filters);
            break;
          default:
            break;
        }
      } else if (this.state.subFiltersChanged === undefined || this.state.subFiltersChanged === false) {
        this.setState({ filtersUpdated: true });
        // this.props.resetData();

        this.props.updatePrimaryIsLoading(false);
        this.props.updateDiscoverSecondaryIsLoading(false);
        this.props.updateFinanceSecondaryIsLoading(false);
        this.props.updateFinanceXDC1IsLoading(false);
        this.props.updateFinanceXDC2IsLoading(false);
        this.props.updateTrafficSecondaryIsLoading(false);
        this.props.updateMuSecondaryIsLoading(false);
        this.props.updateTrySecondaryIsLoading(false);

        this.props.getPrimaryData(this.props.filters);
        this.setState({
          trafficHasLoaded: false,
          muHasLoaded: false,
          trafficHasLoaded: false,
          tryHasLoaded: false,
          financeXDC1HasLoaded: false,
          financeXDC2HasLoaded: false,
          fetchingDiscoverMUDetails: undefined,
          // fetchingDiscoverTrafficDetails: undefined, 
          fetchingFinanceXDC1Details: undefined,
          fetchingFinanceXDC2Details: undefined,
        });
        console.log("Global Filters Changed");


        switch (this.props.activeSecondaryCard) {
          case SUMMARY_FILTERS.FINANCE_NET_NEW_ARR:
            console.log('Fetching XDC 1', this.state.financeXDC1HasLoaded)
            // Request XDC1 Data Only
            //Set Requesting secondary kpi to true
            //Set requesting traffic to true
            //set is loading to true
            //set traffic has loaded to true
            this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
            this.setState({
              financeXDC1HasLoaded: true,
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC1Details: true,
              fetchingFinanceXDC2: true,
              isLoading: true
            });

            break;
          case SUMMARY_FILTERS.FINANCE_GROSS_NEW_ARR:
            console.log('Fetching XDC 1')
            // Request XDC1 Data Only
            //Set Requesting secondary kpi to true
            //Set requesting traffic to true
            //set is loading to true
            //set traffic has loaded to true
            this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
            this.setState({
              financeXDC1HasLoaded: true,
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC1Details: true,
              fetchingFinanceXDC2: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.FINANCE_CANCEL_ARR:
            console.log('Fetching XDC 2')
            // Request Traffic Data Only
            //Set Requesting secondary kpi to true
            //Set requesting traffic to true
            //set is loading to true
            //set traffic has loaded to true
            this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
            this.setState({
              financeXDC1HasLoaded: true,
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC2Details: true,
              fetchingFinanceXDC1: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.FINANCE_RENEW_ARR:
            console.log('Fetching RENEW')
            // Request Traffic Data Only
            //Set Requesting secondary kpi to true
            //Set requesting traffic to true
            //set is loading to true
            //set traffic has loaded to true
            this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
            this.setState({
              financeXDC1HasLoaded: true,
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC2Details: true,
              fetchingFinanceXDC1: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
            console.log('Fetching Traffic')

            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverTrafficDetails: true,
              muHasLoaded: true,
              fetchingDiscoverMarketing: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
            console.log('Fetching Bouncd')

            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverTrafficDetails: true,
              muHasLoaded: true,
              fetchingDiscoverMarketing: true,
              isLoading: true
            });

            break;
          case SUMMARY_FILTERS.DISCOVER_UQFM:
            console.log('Fetching UQFM')

            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverTrafficDetails: true,
              muHasLoaded: true,
              fetchingDiscoverMarketing: true,
              isLoading: true
            });

            break;
          case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
            console.log('Fetching MU')
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              muHasLoaded: true,
              fetchingDiscoverTraffic: true,
              isLoading: true
            });

            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
            console.log('Fetching Paid Media Sourced')
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              muHasLoaded: true,
              fetchingDiscoverTraffic: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
            console.log('Fetching Paid Media Spend')
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              muHasLoaded: true,
              fetchingDiscoverTraffic: true,
              isLoading: true
            });
            break;
          case SUMMARY_FILTERS.TRY_NEW_UQFM:
            console.log('Fetching Try')
            this.props.getFilteredTrySecondaryData(this.props.filters);
            this.setState({
              tryHasLoaded: true,
              fetchingTry: true,
              isLoading: true,
              isInitiallyLoading: true,
            });
            break;
          default:

            break;
        }
      }

    }

    // When the user switches secondary 
    if (/* this.state.userChangedCards === false && */ this.props.activeSecondaryCard !== prevProps.activeSecondaryCard) {
      console.log('User Switching Secondary Cards');
      let { activeSecondaryCard } = this.props;
      switch (activeSecondaryCard) {
        case SUMMARY_FILTERS.FINANCE_NET_NEW_ARR:
          console.log('Fetching XDC 1')
          // Request XDC1 Data Only
          //Set Requesting secondary kpi to true
          //Set requesting traffic to true
          //set is loading to true
          //set traffic has loaded to true
          if (!this.state.financeXDC1HasLoaded) {
            console.log('XDC 1 Has  Not Been Loaded')
            this.props.getFinanceXDC1SecondaryData(this.props.filters);
            if (this.state.financeXDC2HasLoaded === undefined) {
              this.props.getFinanceSecondaryData(this.props.filters);
            }
            this.setState({
              financeXDC1HasLoaded: true,
              fetchingFinanceXDC1Details: true,
              fetchingFinanceXDC2: true,
              secondaryKpiChanged: true,
              isLoading: true,

            });

          } else if (this.state.financeXDCLoadingInBackground === true) {
            console.log('App loading finance xdc in background');
            this.setState({
              financeXDC1HasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('XDC 1 Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingFinanceXDC1: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.FINANCE_GROSS_NEW_ARR:
          console.log('Fetching XDC 1')
          // Request XDC1 Data Only
          //Set Requesting secondary kpi to true
          //Set requesting traffic to true
          //set is loading to true
          //set traffic has loaded to true
          if (!this.state.financeXDC1HasLoaded) {
            console.log('XDC 1 Has  Not Been Loaded')
            this.props.getFinanceXDC1SecondaryData(this.props.filters);

            this.setState({
              financeXDC1HasLoaded: true,
              fetchingFinanceXDC1Details: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.financeXDCLoadingInBackground === true) {
            console.log('App loading finance xdc in background');
            this.setState({
              financeXDC1HasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('XDC 1 Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingFinanceXDC1: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.FINANCE_CANCEL_ARR:
          console.log('Fetching XDC 2')
          // Request Traffic Data Only
          //Set Requesting secondary kpi to true
          //Set requesting traffic to true
          //set is loading to true
          //set traffic has loaded to true

          if (!this.state.financeXDC2HasLoaded) {
            console.log('XDC 2 Has  Not Been Loaded')
            this.props.getFinanceXDC2SecondaryData(this.props.filters);
            this.setState({
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC2Details: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.financeXDCLoadingInBackground === true) {
            console.log('App loading finance xdc in background');
            this.setState({
              financeXDC2HasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('XDC 2 Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingFinanceXDC2: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.FINANCE_RENEW_ARR:
          console.log('Fetching RENEW')
          // Request Traffic Data Only
          //Set Requesting secondary kpi to true
          //Set requesting traffic to true
          //set is loading to true
          //set traffic has loaded to true
          if (!this.state.financeXDC2HasLoaded) {
            this.props.getFinanceXDC2SecondaryData(this.props.filters);
            this.setState({
              financeXDC2HasLoaded: true,
              fetchingFinanceXDC2Details: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.financeXDCLoadingInBackground === true) {
            console.log('App loading finane xdc in background');
            this.setState({
              financeXDC2HasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('XDC 2 Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingFinanceXDC2: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_TRAFFIC:
          console.log('Fetching Traffic')

          if (!this.state.trafficHasLoaded) {
            console.log('Traffic Has  Not Been Loaded')
            this.props.getTrafficSecondaryData(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingTrafficDetails: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              trafficHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('Traffic Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverTraffic: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE:
          console.log('Fetching Bouncd')

          if (!this.state.trafficHasLoaded) {
            console.log('Traffic Has  Not Been Loaded')
            this.props.getTrafficSecondaryData(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingTrafficDetails: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              trafficHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('Traffic Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverTraffic: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_UQFM:
          console.log('Fetching UQFM')

          if (!this.state.trafficHasLoaded) {
            console.log('Traffic Has  Not Been Loaded')
            this.props.getTrafficSecondaryData(this.props.filters);
            this.setState({
              trafficHasLoaded: true,
              fetchingTrafficDetails: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              trafficHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('Traffic Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverTraffic: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE:
          console.log('Fetching MU')
          if (!this.state.muHasLoaded) {
            console.log('MU Has  Not Been Loaded')
            this.props.getMarketingSecondaryData(this.props.filters);
            if (this.state.trafficHasLoaded === false) {
              this.props.getDiscoverSecondary(this.props.filters);
            }
            this.setState({
              muHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              fetchingDiscoverTraffic: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              muHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('MU Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverMarketing: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED:
          console.log('Fetching Paid Media Sourced')

          if (!this.state.muHasLoaded) {
            console.log('MU Has  Not Been Loaded')
            this.props.getMarketingSecondaryData(this.props.filters);

            this.setState({
              muHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              trafficHasLoaded: true,
              fetchingDiscoverTraffic: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              muHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('MU Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverMarketing: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND:
          console.log('Fetching Paid Media Spend')

          if (!this.state.muHasLoaded) {
            console.log('MU Has  Not Been Loaded')
            this.props.getMarketingSecondaryData(this.props.filters);

            this.setState({
              muHasLoaded: true,
              fetchingDiscoverMUDetails: true,
              fetchingDiscoverTraffic: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else if (this.state.fetchingTrafficInBackground === true) {
            console.log('App loading traffic xdc in background');
            this.setState({
              muHasLoaded: true,
              secondaryKpiChanged: true,
              isLoading: true
            });
          } else {
            console.log('MU Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingDiscoverMarketing: false
            });
            this.props.isFetching(false);
          }
          break;
        case SUMMARY_FILTERS.TRY_NEW_UQFM:
          console.log('Fetching Try')

          if (!this.state.tryHasLoaded) {
            console.log('Try Has  Not Been Loaded')
            this.props.getTrySecondaryData(this.props.filters);
            this.setState({
              tryHasLoaded: true,
              fetchingTry: true,
              secondaryKpiChanged: true,
              isLoading: true
            });

          } else {
            console.log('Try Already Loaded')
            this.setState({
              isLoading: false,
              secondaryKpiChanged: false,
              fetchingTry: false,
              isInitiallyLoading: true,
            });
            this.props.isFetching(false);
          }
          break;

        default:

          break;
      }
    }


    /**Setting Load to False ... */
    switch (this.props.activePrimaryCard) {
      case 0:
        // When the initial load is complete
        console.log('Determining to set load to off in Finance');
        if (this.props.primaryIsLoaded && this.props.financeSecondaryIsLoaded && this.state.initialDataLoadIsComplete === true) {
          console.log("Initial Data Load complete: Loading OFF")
          this.setState({ initialDataLoadIsComplete: undefined, isLoading: false, financeXDCLoadingInBackground: true, fetchingFinanceXDC2Details: true, financeXDC2HasLoaded: true });
          this.props.getFinanceXDC2SecondaryData(this.props.filters);
        } else {
          switch (this.props.activeSecondaryCard) {
            case 0:
              //When the user changes secondary cards
              if (this.state.secondaryKpiChanged === true) {
                console.log('Setting Load to off In Secondary KPI Change');
                if (this.state.financeXDC1HasLoaded === true && this.state.fetchingFinanceXDC1Details === false) {
                  console.log("XDC 1 Details Data Load Complete: Loading OFF")
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false
                  });
                  if (this.state.financeXDC2HasLoaded === false && this.state.fetchingFinanceXDC2Details === undefined) {
                    this.props.getFinanceXDC2SecondaryData(this.props.filters);
                    this.setState({ financeXDCLoadingInBackground: true, fetchingFinanceXDC2Details: true, financeXDC2HasLoaded: true, })
                  }
                }
              } // End User Changing Cards within Finance
              //When the user changes filters
              else if (this.state.filtersUpdated) {
                console.log('Filters Updated Finance');
                if (this.state.financeXDC1HasLoaded === true &&
                  this.state.financeXDC2HasLoaded === true) {
                  console.log('Determining to set load to off in Finance filter Change');
                  if (this.props.primaryIsLoaded && this.props.financeXDC1IsLoaded && this.props.financeSecondaryIsLoaded) {
                    console.log('SEtting Loading to off in Finance Filters Change');
                    this.setState({
                      isLoading: false, financeXDCLoadingInBackground: true, primaryLoaded: false,
                      fetchingFinanceXDC2Details: true, financeXDC2HasLoaded: true, filtersUpdated: false
                    });
                    this.props.getFinanceXDC2SecondaryData(this.props.filters);
                    this.props.updateFinanceSecondaryIsLoading(false);
                    this.props.updateFinanceXDC1IsLoading(false);

                  }
                }
              }

              break;
            case 1:
              //When the user changes secondary cards
              if (this.state.secondaryKpiChanged === true) {
                console.log('Setting Load to off In Secondary KPI Change');
                if (this.state.financeXDC1HasLoaded === true && this.state.fetchingFinanceXDC1Details === false) {
                  console.log("XDC 1 Details Data Load Complete: Loading OFF")
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false
                  });
                }
              } // End User Changing Cards within Finance
              //When the user changes filters
              else if (this.state.filtersUpdated) {
                console.log('Filters Updated Finance');
                if (this.state.financeXDC1HasLoaded === true &&
                  this.state.financeXDC2HasLoaded === true) {
                  console.log('Determining to set load to off in Finance filter Change');
                  if (this.props.primaryIsLoaded && this.props.financeXDC1IsLoaded && this.props.financeSecondaryIsLoaded) {
                    console.log('SEtting Loading to off in Finance Filters Change');
                    this.setState({
                      isLoading: false, financeXDCLoadingInBackground: true, primaryLoaded: false,
                      fetchingFinanceXDC2Details: true, financeXDC2HasLoaded: true, filtersUpdated: false
                    });
                    this.props.getFinanceXDC2SecondaryData(this.props.filters);
                    this.props.updateFinanceSecondaryIsLoading(false);
                    this.props.updateFinanceXDC1IsLoading(false);

                  }
                }
              }
              break;
            case 2:
              //When the user changes secondary cards
              if (this.state.secondaryKpiChanged === true) {
                console.log('Setting Load to off In Secondary KPI Change');
                if (this.state.financeXDC2HasLoaded === true && this.state.fetchingFinanceXDC2Details === false) {
                  console.log("XDC 2 Details Data Load Complete: Loading OFF")
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false,
                  });
                }
              } // End User Changing Cards within Finance
              //When the user changes filters
              else if (this.state.filtersUpdated) {
                console.log('Filters Updated Finance');
                if (this.state.financeXDC1HasLoaded === true &&
                  this.state.financeXDC2HasLoaded === true) {
                  console.log('Determining to set load to off in Finance filter Change');
                  if (this.props.primaryIsLoaded && this.props.financeXDC2IsLoaded && this.props.financeSecondaryIsLoaded) {
                    console.log('SEtting Loading to off in Finance Filters Change');
                    this.setState({
                      isLoading: false, financeXDCLoadingInBackground: true, primaryLoaded: false,
                      fetchingFinanceXDC1Details: true, financeXDC1HasLoaded: true, filtersUpdated: false
                    });
                    this.props.getFinanceXDC1SecondaryData(this.props.filters);
                    this.props.updateFinanceSecondaryIsLoading(false);
                    this.props.updateFinanceXDC2IsLoading(false);
                  }
                }
              }
              break;
            case 3:
              //When the user changes secondary cards
              if (this.state.secondaryKpiChanged === true) {
                console.log('Setting Load to off In Secondary KPI Change');
                if (this.state.financeXDC2HasLoaded === true && this.state.fetchingFinanceXDC2Details === false) {
                  console.log("XDC 2 Details Data Load Complete: Loading OFF")
                  this.setState({
                    secondaryKpiChanged: false,
                    isLoading: false,
                    financeXDCLoadingInBackground: false
                  });
                }
              } // End User Changing Cards within Finance
              //When the user changes filters
              else if (this.state.filtersUpdated) {
                console.log('Filters Updated Finance');
                if (this.state.financeXDC1HasLoaded === true &&
                  this.state.financeXDC2HasLoaded === true) {
                  console.log('Determining to set load to off in Finance filter Change');
                  if (this.props.primaryIsLoaded && this.props.financeXDC2IsLoaded && this.props.financeSecondaryIsLoaded) {
                    console.log('SEtting Loading to off in Finance Filters Change');
                    this.setState({
                      isLoading: false, financeXDCLoadingInBackground: true, primaryLoaded: false,
                      fetchingFinanceXDC1Details: true, financeXDC1HasLoaded: true, filtersUpdated: false
                    });
                    this.props.getFinanceXDC1SecondaryData(this.props.filters);
                    this.props.updateFinanceSecondaryIsLoading(false);
                    this.props.updateFinanceXDC2IsLoading(false);
                  }
                }
              }
              break;
          }
        }
        break;
      case 1:
        console.log('Determining to set load to off in Discover');
        //When the User switches to discover from another tab
        switch (this.props.activeSecondaryCard) {
          case 4:

            if (this.state.secondaryKpiChanged === true) {
              console.log('Determining to set load off In MU Secondary KPI Change');
              // if (this.state.muHasLoaded === true && this.state.fetchingDiscoverTraffic === false && this.state.fetchingDiscoverMUDetails === false) {

              if (this.props.muIsLoaded && this.props.discoverSecondaryIsLoaded) {
                console.log("MU Details Data Load Complete in Secondary KPIT Change: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                });
                // if(this.props.activePrimaryCard===1){
                // this.props.updateMuSecondaryIsLoading(false);
                // } else {
                //   this.props.updateMuSecondaryIsLoading(true);
                // }

                if (this.state.fetchingDiscoverTrafficDetails === false && this.state.trafficHasLoaded === false) {
                  this.props.getTrafficSecondaryData(this.props.filters);
                  this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })

                }

              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated MU');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in MU filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverTraffic === false &&
                  this.state.fetchingDiscoverMUDetails === false && this.state.secondaryKpiChanged === false) {
                  console.log('SEtting Loading to off in MU Filters Change');
                  this.setState({
                    isLoading: false, primaryLoaded: false,
                    filtersUpdated: false
                  });
                  // this.props.updateMuSecondaryIsLoading(false);
                  if (this.state.fetchingDiscoverTrafficDetails === false) {
                    this.props.getTrafficSecondaryData(this.props.filters);
                    this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })
                  }
                }
              }
            } else if (this.state.subFiltersChanged) {
              console.log('Determining Load to off In MU sub Filter Change', this.state);
              if (this.props.muIsLoaded && this.state.muHasLoaded === true) {
                console.log('Setting Load to off In MU sub filter Change');
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
                // this.props.updateMuSecondaryIsLoading(false);

              }
            }
            break;
          case 5:
            // When the app loads the details for Traffic 
            if (this.state.secondaryKpiChanged === true) {
              console.log('Setting Load to off In Secondary KPI Change');
              if (this.props.trafficIsLoaded) {
                console.log("Traffic Details Data Load Complete: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                  fetchingTrafficInBackground: false
                });
                // this.props.updateTrafficSecondaryIsLoading(false);

              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated Finance');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in Traffic filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverMarketing === false &&
                  this.state.fetchingDiscoverTrafficDetails === false) {
                  console.log('SEtting Loading to off in Traffic Filters Change');
                  this.setState({
                    isLoading: false, fetchingTrafficInBackground: true, primaryLoaded: false,
                    fetchingDiscoverTrafficDetails: true, muHasLoaded: true, filtersUpdated: false
                  });
                  // this.props.updateTrafficSecondaryIsLoading(false);

                  this.props.getMarketingSecondaryData(this.props.filters);
                }
              }
            } else if (this.state.subFiltersChanged) {
              console.log('Determining Load to off In Trafic sub Filter Change', this.state);
              if (this.props.trafficIsLoaded && this.state.trafficHasLoaded === true) {
                console.log('Setting Load to off In Trafic sub filter Change');
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
                // this.props.updateTrafficSecondaryIsLoading(false);
              }
            }
            break;
          case 6:
            // When the app loads the details for Traffic 
            if (this.state.secondaryKpiChanged === true) {
              console.log('Setting Load to off In Secondary KPI Change');
              if (this.state.trafficHasLoaded === true && this.state.fetchingDiscoverTrafficDetails === false) {
                console.log("Traffic Details Data Load Complete: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                  fetchingTrafficInBackground: false
                });
                if (this.state.fetchingDiscoverTrafficDetails === false && this.state.trafficHasLoaded === false) {
                  this.props.getTrafficSecondaryData(this.props.filters);
                  this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })

                }
              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated Finance');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in Traffic filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverMarketing === false &&
                  this.state.fetchingDiscoverTrafficDetails === false) {
                  console.log('SEtting Loading to off in Traffic Filters Change');
                  this.setState({
                    isLoading: false, fetchingTrafficInBackground: true, primaryLoaded: false,
                    fetchingDiscoverTrafficDetails: true, muHasLoaded: true, filtersUpdated: false
                  });
                  // this.props.updateTrafficSecondaryIsLoading(false);

                  this.props.getMarketingSecondaryData(this.props.filters);
                }
              }
            }
            break;
          case 7:
            if (this.state.secondaryKpiChanged === true) {
              console.log('Setting Load to off In Secondary KPI Change');
              if (this.state.muHasLoaded === true && this.state.fetchingDiscoverMUDetails === false) {
                console.log("MU Details Data Load Complete: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                });
                // this.props.updateMuSecondaryIsLoading(false);

                if (this.state.fetchingDiscoverTrafficDetails === false && this.state.trafficHasLoaded === false) {
                  this.props.getTrafficSecondaryData(this.props.filters);
                  this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })

                }

              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated Finance');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in MU filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverTraffic === false &&
                  this.state.fetchingDiscoverMUDetails === false) {
                  console.log('SEtting Loading to off in MU Filters Change');
                  this.setState({
                    isLoading: false, primaryLoaded: false,
                    filtersUpdated: false
                  });
                  // this.props.updateMuSecondaryIsLoading(false);

                  if (this.state.fetchingDiscoverTrafficDetails === false) {
                    this.props.getTrafficSecondaryData(this.props.filters);
                    this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })
                  }
                }
              }
            } else if (this.state.subFiltersChanged) {
              console.log('Determining Load to off In MU sub Filter Change', this.state);
              if (this.props.muIsLoaded) {
                console.log('Setting Load to off In MU sub filter Change');
                // this.props.updateMuSecondaryIsLoading(false);

                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }
            break;
          case 8:
            if (this.state.secondaryKpiChanged === true) {
              console.log('Setting Load to off In Secondary KPI Change');
              if (this.state.muHasLoaded === true && this.state.fetchingDiscoverMUDetails === false) {
                console.log("MU Details Data Load Complete: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                });
                // this.props.updateMuSecondaryIsLoading(false);

                if (this.state.fetchingDiscoverTrafficDetails === false && this.state.trafficHasLoaded === false) {
                  this.props.getTrafficSecondaryData(this.props.filters);
                  this.setState({ fetchingTrafficInBackground: true, trafficHasLoaded: true, fetchingDiscoverTrafficDetails: true, })

                }

              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated Finance');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in MU filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverTraffic === false &&
                  this.state.fetchingDiscoverMUDetails === false) {
                  console.log('SEtting Loading to off in MU Filters Change');
                  this.setState({
                    isLoading: false, primaryLoaded: false,
                    filtersUpdated: false
                  });
                  // this.props.updateMuSecondaryIsLoading(false);

                }
              }
            } else if (this.state.subFiltersChanged) {
              console.log('Determining Load to off In MU sub Filter Change', this.state);
              if (this.props.muIsLoaded && this.state.muHasLoaded === true) {
                console.log('Setting Load to off In MU sub filter Change');
                // this.props.updateMuSecondaryIsLoading(false);

                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
              }
            }
            break;
          case 9:
            // When the app loads the details for Traffic 
            if (this.state.secondaryKpiChanged === true) {
              console.log('Setting Load to off In Secondary KPI Change');
              if (this.state.trafficHasLoaded === true && this.state.fetchingDiscoverTrafficDetails === false) {
                console.log("Traffic Details Data Load Complete: Loading OFF")
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false,
                  fetchingTrafficInBackground: false

                });
                // this.props.updateTrafficSecondaryIsLoading(false);

              }
            } // End User Changing Cards within Finance
            //When the user changes filters
            else if (this.state.filtersUpdated) {
              console.log('Filters Updated Finance');
              if (this.state.muHasLoaded === true &&
                this.state.trafficHasLoaded === true) {
                console.log('Determining to set load to off in Traffic filter Change');
                if (this.state.primaryLoaded === true && this.state.fetchingDiscoverMarketing === false &&
                  this.state.fetchingDiscoverTrafficDetails === false) {
                  console.log('SEtting Loading to off in Traffic Filters Change');
                  this.setState({
                    isLoading: false, fetchingTrafficInBackground: true, primaryLoaded: false,
                    fetchingDiscoverTrafficDetails: true, muHasLoaded: true, filtersUpdated: false
                  });
                  // this.props.updateTrafficSecondaryIsLoading(false);

                  this.props.getMarketingSecondaryData(this.props.filters);
                }
              }
            } else if (this.state.subFiltersChanged) {
              console.log('Determining Load to off In Trafic sub Filter Change', this.state);
              if ((this.props.Bounce.details.qtdw.qtd[0].value !== prevProps.Bounce.details.qtdw.qtd[0].value) && this.state.trafficHasLoaded === true) {
                console.log('Setting Load to off In Trafic sub filter Change');
                this.setState({
                  isLoading: false,
                  subFiltersChanged: false
                });
                // this.props.updateTrafficSecondaryIsLoading(false);

              }
            }
            break;
        }
        break;
      case 2:
        console.log('Determining to set load to off in Try');
        if (this.state.secondaryKpiChanged === true && this.props.tryIsLoaded) {
          this.setState({ secondaryKpiChanged: false, isLoading: false })
        } else if (this.state.filtersUpdated) {
          console.log('Filters Updated Finance');
          if (this.state.tryHasLoaded === true) {
            console.log('Determining to set load to off in Try filter Change');
            if (this.props.tryIsLoaded) {
              console.log('SEtting Loading to off in Try Filters Change');
              this.props.updateTrySecondaryIsLoading(false);
              this.setState({
                isLoading: false, primaryLoaded: false,
                filtersUpdated: false
              });

            }
          }
        }
        break;
    }

  }
  updateSecondaryLoading(newFilters) {
    this.setState({ subFiltersChanged: true })
    this.props.submitFilters(newFilters);
    switch (this.props.activeSecondaryCard) {
      case 4:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 5:
        this.props.updateTrafficSecondaryIsLoading(false);
      case 7:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 8:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 9:
        this.props.updateTrafficSecondaryIsLoading(false);
        break;
    }
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
        // activeJourneyCard={this.props.activeSecondaryCard}
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
        <FilterPanel activeCard={this.props.activePrimaryCard} window={this.props.window} />

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

  console.log("Filters Updated:", state.filters);
  // console.log(state.summaryData.secondary);
  // console.log("Filters Updated:", state.filters);
  // console.log('SUMMARY JS STATE', state);
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
    financePrimary: state.summaryData.primary[0],

    trafficPrimary: state.summaryData.primary[1],
    tryPrimary: state.summaryData.primary[2],
    buyPrimary: state.summaryData.primary[3],
    usePrimary: state.summaryData.primary[4],
    renewPrimary: state.summaryData.primary[5],

    NEwQTDW: state.summaryData.secondary[0].details.qtdw,
    NetNew: state.summaryData.secondary[0],
    Cancel: state.summaryData.secondary[2],
    Traffic: state.summaryData.secondary[5],
    Market: state.summaryData.secondary[4],
    Bounce: state.summaryData.secondary[9],
    UQFM: state.summaryData.secondary[6],
    PaidSpend: state.summaryData.secondary[7],
    PaidSourced: state.summaryData.secondary[8],
    NewUQFM: state.summaryData.secondary[10],
    Conv: state.summaryData.secondary[18],
    PaidMedia: state.summaryData.secondary[16],
    Gross: state.summaryData.secondary[19],
    commentsPackage: state.commentsPackage,
    feedbackIsOpen: state.isFeedBackDialogOpen,
    dataIsReset: state.summaryData.dataIsReset,
    primaryIsLoaded: state.summaryData.primaryIsLoaded,
    discoverSecondaryIsLoaded: state.summaryData.discoverSecondaryIsLoaded,
    financeSecondaryIsLoaded: state.summaryData.financeSecondaryIsLoaded,
    financeXDC1IsLoaded: state.summaryData.financeXDC1IsLoaded,
    financeXDC2IsLoaded: state.summaryData.financeXDC2IsLoaded,
    trafficIsLoaded: state.summaryData.trafficIsLoaded,
    muIsLoaded: state.summaryData.muIsLoaded,
    tryIsLoaded: state.summaryData.tryIsLoaded
  };
}
export default connect(
  mapStateToProps,
  actions
)(withAuth(Summary));
