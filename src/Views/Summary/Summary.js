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
import commentIconOn from "../../assets/images/comments-on.svg";
import commentIconOff from "../../assets/images/comments-off.svg";

import LoadingScreen from "../Loading/Loading.jsx";
import Navigation from "components/Navigation/Navigation";
import FilterPanel from "components/FilterPanel/FilterPanel";
import CommentPanel from "components/CommentPanel/CommentPanel";
import ReactPiwik from 'react-piwik';

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
      initialDataLoadIsComplete: false, //Once the app initially requests all the necessary data to present dashboard for first time
      isLoading: true,
      //For when the app loads data in the background
      requestingRemainingFinanceData: false,
      requestingRemainingDiscoverData: false,
      requestingRemainingRenewData: false,
      requestingRemainingBuyData: false,
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
    // this.props.fetchCommentsCount(this.props.activeSecondaryCard);

    this.props.fetchComments(this.props.activeSecondaryCard);
    // Get all the comments count

    this.props.getUpdatedAsOfDateAndQuarter();
    this.props.generateFilterData(this.props.preferences);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();



  }

  componentDidUpdate(prevProps, prevState) {
    this.checkAuthentication();

    // let filtersAreLoaded = Object(this.props.filters).hasOwnProperty('combined') && Object(prevProps.filters).hasOwnProperty('combined') === false;
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
      globalFiltersSubmitted,
      subFiltersSubmitted,
      resetFilters,
      filtersAreDefault,
      isDefaultFilters,
      buyGrossIsLoaded,
      buyMarketIsLoaded,
      buyConversionIsLoaded,
    } = this.props;
    let userChangedCards = activeSecondaryCard !== prevProps.activeSecondaryCard;

    if(activePrimaryCard !== prevProps.activePrimaryCard){
      console.log('Sending data to piwik');
      ReactPiwik.push(['setCustomVariable',3,'primaryKPI',this.props.primaryData[activePrimaryCard].category,'page']);
      
    }
    if (user !== prevProps.user) {
      ReactPiwik.push(['setUserId', `${user.given_name +' ' +  user.family_name}(${user.email.split('@')[0]})`]);
      this.props.getUserSettings(this.props.user.sub);
    }
    if (filtersAreLoaded && preferencesAreLoaded && preferencesAreAdded === false) {
      this.props.addPreferencesToActiveFilters(this.props.preferences);
    }
    if (preferencesAreAdded &&
      this.state.initialDataLoadIsComplete === false) {
      this.props.getPrimaryData(this.props.filters);
      this.props.getFinanceXDC1SecondaryData(this.props.filters);
      this.props.getFinanceSecondaryData(this.props.filters);
      this.setState({
        isLoading: true,
        initialDataLoadIsComplete: true
      });

    }
    //MAke calls if the user switches filters
    if (this.state.initialDataLoadIsComplete === undefined && (this.props.filters !== prevProps.filters)) {

      if (this.state.subFiltersChanged) {
        if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND) {
          this.setState({ isLoading: true });
          this.props.getFilteredMarketingSecondaryData(this.props.filters);
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_TRAFFIC ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_UQFM) {
          this.setState({ isLoading: true });
          this.props.getFilteredTrafficSecondaryData(this.props.filters);
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_CONVERSION) {
          this.setState({ isLoading: true });
          this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_MARKETING_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_PAID_MEDIASPEND) {
          this.setState({ isLoading: true });
          this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWARR ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWUNITS) {
          this.setState({ isLoading: true });
          this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
        }
      } else {
        if (isDefaultFilters) {
          this.props.getPrimaryData(this.props.filters);
        } else {
          this.props.getFilteredPrimaryData(this.props.filters);
        }

        this.setState({ isLoading: true, filtersUpdated: true });
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


        if (activeSecondaryCard === SUMMARY_FILTERS.FINANCE_NET_NEW_ARR ||
          activeSecondaryCard === SUMMARY_FILTERS.FINANCE_GROSS_NEW_ARR) {

          if (isDefaultFilters) {
            this.props.getFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFinanceSecondaryData(this.props.filters);
          } else {
            this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
          }

        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.FINANCE_CANCEL_ARR ||
          activeSecondaryCard === SUMMARY_FILTERS.FINANCE_RENEW_ARR) {

          if (isDefaultFilters) {
            this.props.getFinanceXDC2SecondaryData(this.props.filters);
            this.props.getFinanceSecondaryData(this.props.filters);
          } else {
            this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
          }
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND) {

          if (isDefaultFilters) {
            this.props.getMarketingSecondaryData(this.props.filters);
            this.props.getDiscoverSecondary(this.props.filters);
          } else {
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
          }

        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_TRAFFIC ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_UQFM) {

          if (isDefaultFilters) {
            this.props.getTrafficSecondaryData(this.props.filters);
            this.props.getDiscoverSecondary(this.props.filters);
          } else {
            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
          }

        }
        else if (activeSecondaryCard >= SUMMARY_FILTERS.TRY_NEW_UQFM && activeSecondaryCard <= SUMMARY_FILTERS.TRY_CUMU_UQFM_QFM) {
          this.props.getFilteredTrySecondaryData(this.props.filters);
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_CONVERSION) {
          this.setState({ isLoading: true });

          if (isDefaultFilters) {
            this.props.getBuyTrafficSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {
            this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_MARKETING_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_PAID_MEDIASPEND) {

          if (isDefaultFilters) {
            this.props.getBuyMarketSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {
            this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }
        }
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWARR ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWUNITS) {

          if (isDefaultFilters) {
            this.props.getBuyFinanceSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {
            this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }
        }
        else if (activeSecondaryCard >= SUMMARY_FILTERS.USE_PAID_USER_SUCCESS && activeSecondaryCard <= SUMMARY_FILTERS.USE_REPEAT_USER_MAU) {
          if (isDefaultFilters) {
            this.props.getUseSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredUseSecondaryData(this.props.filters);

          }
        }
        else if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM)
          || activeSecondaryCard === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
          if (isDefaultFilters) {
            this.props.getRenewCancelSecondaryData(this.props.filters);
            this.props.getRenewSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredRenewCancelSecondaryData(this.props.filters);
            this.props.getFilteredRenewSecondaryData(this.props.filters);

          }
        }
        else if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_PF)
          || (activeSecondaryCard >= SUMMARY_FILTERS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_FIN_RETAIL)) {
          if (isDefaultFilters) {
            // debugger;
            this.props.getRenewDetailsSecondaryData(this.props.filters);
            this.props.getRenewSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredRenewDetailsSecondaryData(this.props.filters);
            this.props.getFilteredRenewSecondaryData(this.props.filters);

          }
        }
      }
    }
    //Make calls if the user switches cards
    if (userChangedCards) {
      this.setState({ secondaryKpiChanged: true });
      //Finance
      if (activeSecondaryCard === SUMMARY_FILTERS.FINANCE_NET_NEW_ARR ||
        activeSecondaryCard === SUMMARY_FILTERS.FINANCE_GROSS_NEW_ARR) {
        if (this.state.requestingRemainingFinanceData === false) {

          if (!financeXDC1IsLoaded /* || this.state.requestingRemainingFinanceData === true */) {
            if (isDefaultFilters) {
              this.props.getFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFinanceSecondaryData(this.props.filters);
            } else {
              this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
              this.props.getFilteredFinanceSecondaryData(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!financeXDC1IsLoaded) {
          if (isDefaultFilters) {
            this.props.getFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFinanceSecondaryData(this.props.filters);
          } else {
            this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
            this.props.getFilteredFinanceSecondaryData(this.props.filters);
          }
          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }

      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.FINANCE_CANCEL_ARR ||
        activeSecondaryCard === SUMMARY_FILTERS.FINANCE_RENEW_ARR) {
        if (!financeXDC2IsLoaded /* || this.state.requestingRemainingFinanceData === true */) {
          if (isDefaultFilters) {
            this.props.getFinanceXDC2SecondaryData(this.props.filters);

          } else {
            this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
          }

          this.setState({ isLoading: true });
        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE ||
        activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED ||
        activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND) {
        if (this.state.requestingRemainingDiscoverData === false) {

          if (!muIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
            if (isDefaultFilters) {
              this.props.getMarketingSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              this.props.getFilteredMarketingSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!muIsLoaded) {
          if (isDefaultFilters) {
            this.props.getMarketingSecondaryData(this.props.filters);
            this.props.getDiscoverSecondary(this.props.filters);
          } else {
            this.props.getFilteredMarketingSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
          }
          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_TRAFFIC ||
        activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE ||
        activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_UQFM) {
        if (this.state.requestingRemainingDiscoverData === false) {

          if (!trafficIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
            if (isDefaultFilters) {
              this.props.getTrafficSecondaryData(this.props.filters);
              this.props.getDiscoverSecondary(this.props.filters);
            } else {
              this.props.getFilteredTrafficSecondaryData(this.props.filters);
              this.props.getFilteredDiscoverSecondary(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!trafficIsLoaded) {
          if (isDefaultFilters) {
            this.props.getTrafficSecondaryData(this.props.filters);
            this.props.getDiscoverSecondary(this.props.filters);
          } else {
            this.props.getFilteredTrafficSecondaryData(this.props.filters);
            this.props.getFilteredDiscoverSecondary(this.props.filters);
          }
          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.TRY_NEW_UQFM) {
        if (!tryIsLoaded) {
          if (isDefaultFilters) {
            this.props.getTrySecondaryData(this.props.filters);

          } else {
            this.props.getFilteredTrySecondaryData(this.props.filters);

          }
          this.setState({ isLoading: true });
        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_CONVERSION) {
        if (this.state.requestingRemainingBuyData === false) {

          if (!buyConversionIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
            if (isDefaultFilters) {
              this.props.getBuyTrafficSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!buyConversionIsLoaded) {
          if (isDefaultFilters) {
            this.props.getBuyTrafficSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {
            this.props.getFilteredBuyTrafficSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }

          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_MARKETING_SOURCED ||
        activeSecondaryCard === SUMMARY_FILTERS.BUY_PAID_MEDIASPEND) {
        if (this.state.requestingRemainingBuyData === false) {

          if (!buyMarketIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
            if (isDefaultFilters) {
              this.props.getBuyMarketSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {
              this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!buyMarketIsLoaded) {
          if (isDefaultFilters) {
            this.props.getBuyMarketSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {
            this.props.getFilteredBuyMarketSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }
          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWARR ||
        activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWUNITS) {
        if (this.state.requestingRemainingBuyData === false) {

          if (!buyGrossIsLoaded /* || this.state.requestingRemainingDiscoverData === true */) {
            if (isDefaultFilters) {
              this.props.getBuyFinanceSecondaryData(this.props.filters);
              this.props.getBuySecondaryData(this.props.filters);
            } else {

              this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
              this.props.getFilteredBuySecondaryData(this.props.filters);
            }

            this.setState({ isLoading: true });
          }
        } else if (!buyGrossIsLoaded) {
          if (isDefaultFilters) {

            this.props.getBuyFinanceSecondaryData(this.props.filters);
            this.props.getBuySecondaryData(this.props.filters);
          } else {

            this.props.getFilteredBuyFinanceSecondaryData(this.props.filters);
            this.props.getFilteredBuySecondaryData(this.props.filters);
          }

          this.setState({ isLoading: true });

        } else {
          this.setState({ isLoading: false });

        }
      }
      else if (activeSecondaryCard === SUMMARY_FILTERS.USE_PAID_USER_SUCCESS) {
        if (!useIsLoaded) {
          if (isDefaultFilters) {
            this.props.getUseSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredUseSecondaryData(this.props.filters);

          }
          this.setState({ isLoading: true });
        }
      }
      else if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM)
        || activeSecondaryCard === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
        if (!renewCancelIsLoaded) {
          if (isDefaultFilters) {
            this.props.getRenewCancelSecondaryData(this.props.filters);
            this.props.getRenewSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredRenewCancelSecondaryData(this.props.filters);
            this.props.getFilteredRenewSecondaryData(this.props.filters);

          }
          this.setState({ isLoading: true });
        }
      }
      else if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_PF)
        || (activeSecondaryCard >= SUMMARY_FILTERS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_FIN_RETAIL)) {
        if (!renewDetailsIsLoaded) {
          if (isDefaultFilters) {
            // debugger;
            this.props.getRenewDetailsSecondaryData(this.props.filters);
            this.props.getRenewSecondaryData(this.props.filters);

          } else {
            this.props.getFilteredRenewDetailsSecondaryData(this.props.filters);
            this.props.getFilteredRenewSecondaryData(this.props.filters);

          }
          this.setState({ isLoading: true });
        }
      }
    }
    /**Setting Load to False ... */
    switch (this.props.activePrimaryCard) {
      case 0:
        // When the initial load is complete
        if (primaryIsLoaded && financeSecondaryIsLoaded && financeXDC1IsLoaded && this.state.initialDataLoadIsComplete === true) {
          this.setState({
            initialDataLoadIsComplete: undefined,
            isLoading: false,
            requestingRemainingFinanceData: true,
          });
          this.props.getFinanceXDC2SecondaryData(this.props.filters);
        } else {
          //Stop Loading in either New New Or Gros New ARR
          if (activeSecondaryCard === SUMMARY_FILTERS.FINANCE_NET_NEW_ARR ||
            activeSecondaryCard === SUMMARY_FILTERS.FINANCE_GROSS_NEW_ARR) {
            if (this.state.secondaryKpiChanged === true) {

              if (financeXDC1IsLoaded === true && financeSecondaryIsLoaded === true) {
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false

                });
                if (financeXDC2IsLoaded === false) {
                  this.setState({
                    requestingRemainingFinanceData: true,
                  });
                  this.props.getFinanceXDC2SecondaryData(this.props.filters);
                } else {
                  this.setState({
                    requestingRemainingFinanceData: false,
                  });
                }
              }

            } else if (this.state.filtersUpdated === true) {

              if (primaryIsLoaded === true && (financeXDC1IsLoaded === true && financeSecondaryIsLoaded === true)) {
                this.setState({
                  isLoading: false,
                  requestingRemainingFinanceData: true,
                  filtersUpdated: false
                });
                this.props.getFilteredFinanceXDC2SecondaryData(this.props.filters);
              }
            }
          }
          //Stop Loading in either Cancellatiosn or Renewal
          else {
            if (this.state.secondaryKpiChanged === true) {
              if (financeXDC2IsLoaded === true && financeSecondaryIsLoaded === true) {
                this.setState({
                  secondaryKpiChanged: false,
                  isLoading: false
                });
                if (financeXDC1IsLoaded === false) {
                  this.setState({
                    requestingRemainingFinanceData: true,
                  });
                  this.props.getFinanceXDC1SecondaryData(this.props.filters);
                } else {
                  this.setState({
                    requestingRemainingFinanceData: false,
                  });
                }
              }
            } else if (this.state.filtersUpdated === true) {
              if (primaryIsLoaded === true && (financeXDC2IsLoaded === true && financeSecondaryIsLoaded === true)) {
                this.setState({
                  isLoading: false,
                  requestingRemainingFinanceData: true,
                  filtersUpdated: false
                });
                this.props.getFilteredFinanceXDC1SecondaryData(this.props.filters);
              }
            }
          }

        }
        break;
      case 1:
        if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_MARKETABLE_UNIVERSE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_PAID_MEDIA_SPEND) {
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
        else if (activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_TRAFFIC ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_BOUNCE_RATE ||
          activeSecondaryCard === SUMMARY_FILTERS.DISCOVER_UQFM) {

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

      case 2:
        if (this.state.secondaryKpiChanged === true || this.state.filtersUpdated === true) {
          if (tryIsLoaded === true) {

            this.setState({ isLoading: false, secondaryKpiChanged: false, filtersUpdated: false });

          }
        }
        break;
      case 3:
        if (activeSecondaryCard === SUMMARY_FILTERS.BUY_CONVERSION) {
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
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_MARKETING_SOURCED ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_PAID_MEDIASPEND) {

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
        else if (activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWUNITS ||
          activeSecondaryCard === SUMMARY_FILTERS.BUY_GROSS_NEWARR) {

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
                this.props.getBuyFinanceSecondaryData(this.props.filters);
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
      case 4:
        if (this.state.secondaryKpiChanged === true || this.state.filtersUpdated === true) {
          if (useIsLoaded === true) {

            this.setState({ isLoading: false, secondaryKpiChanged: false, filtersUpdated: false });

          }
        }
        break;
      case 5:


        if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_CANCEL && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM)
          || activeSecondaryCard === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
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
        else if ((activeSecondaryCard >= SUMMARY_FILTERS.RENEW_QTR_FIN && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_PF)
          || (activeSecondaryCard >= SUMMARY_FILTERS.RENEW_EOT_RESELLER && activeSecondaryCard <= SUMMARY_FILTERS.RENEW_QTR_FIN_RETAIL)) {
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
  updateSecondaryLoading(newFilters) {
    this.setState({ subFiltersChanged: true })
    this.props.submitFilters(newFilters);
    switch (this.props.activeSecondaryCard) {
      case 4:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 5:
        this.props.updateTrafficSecondaryIsLoading(false);
        this.props.updateBuyConversionIsLoading(false);
      case 7:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 8:
        this.props.updateMuSecondaryIsLoading(false);
        break;
      case 9:
        this.props.updateTrafficSecondaryIsLoading(false);
        this.props.updateBuyConversionIsLoading(false);


        break;
      case SUMMARY_FILTERS.BUY_MARKETING_SOURCED:
        this.props.updateBuyMarketIsLoading(false);
        break;
      case SUMMARY_FILTERS.BUY_PAID_MEDIASPEND:
        this.props.updateBuyMarketIsLoading(false);
        break;
      case SUMMARY_FILTERS.BUY_CONVERSION:
        this.props.updateBuyConversionIsLoading(false);
        this.props.updateTrafficSecondaryIsLoading(false);

        break;
      case SUMMARY_FILTERS.BUY_GROSS_NEWARR:
        this.props.updateBuyGrossIsLoading(false);
        break;
      case SUMMARY_FILTERS.BUY_GROSS_NEWUNITS:
        this.props.updateBuyGrossIsLoading(false);
        break;
      // case 27:
      //   this.props.updateRenewCancelIsLoading(false);
      //   break;
      // case 27:
      //   this.props.updateRenewCancelIsLoading(false);
      //   break;
      // case 28:
      //   this.props.updateRenewCancelIsLoading(false);
      //   break;
      // case 29:
      //   this.props.updateRenewDetailsIsLoading(false);
      //   break;
      // case 30:
      //   this.props.updateRenewDetailsIsLoading(false);
      //   break;
      // case 31:
      //   this.props.updateRenewDetailsIsLoading(false);
      //   break;
      // case 32:
      //   this.props.updateRenewCancelIsLoading(false);
      //   break;
      // case 33:
      //   this.props.updateRenewDetailsIsLoading(false);
      //   break;
      // case 34:
      //   this.props.updateRenewDetailsIsLoading(false);
      //   break;
    }
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
        this.props.updateActiveSecondaryCard(16);
        break;
      case (4):
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(21);
        break;
      default:
        this.props.updateMultichartMetric(true);
        this.props.updateActiveSecondaryCard(28);
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
    // this.props.isFetching(true);
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
        resetSecondaryList= {(index)=>this.updateActivePrimary(index)}
      />
    );
  };

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
        <FilterPanel window={this.props.window} activePrimary={this.props.activePrimaryCard} />

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
                    {/* (this.props.activePrimaryCard === 4 || this.props.activePrimaryCard === 5) ?
                      <div id="commingSoon">Coming Soon</div> : */
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

          console.log(state);

        return {
          authenticated: state.authenticated,
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
        isDefaultFilters: state.filters.isDefaultFilters
      };
    }
    export default connect(
      mapStateToProps,
      actions
    )(withAuth(Summary));
