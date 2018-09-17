

import {  
    CHANGE_AUTH, 
    UPDATE_SWITCH_FILTER_VALUE,
    UPDATE_DIALOG_VISIBILITY , 
    UPDATE_MULTI_FILTER_VALUES,
    GET_ALL_DATA,
    GENERATE_FILTER_DATA,
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,    
    HIDE_SUMMARY_VIEW_DETAILS,    
    SHOW_DATA_PREFERENCES,
    HIDE_DATA_PREFERENCES,
    UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
    UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD,
    GET_IBE_DATA,
    GET_QUERY_FILTERED_IBE_DATA,
    GET_QUERY_FILTERED_IBE_MULTICHART_DATA

} from 'actions/types';
import axios from 'axios';
import * as utils from '../utilities';
import _ from 'lodash';
import {InofoburstAzure, InfoburstAzure} from '../variables';
// general use

const prod_connection = { 'user': 'JR', 'pass': 'ft3t7pgz' };
const dev_connection = { 'user': 'admin', 'pass': 'admin' };

const environment = { infosolApi: 'http://vm1.infosol.com:8551' };

// Multifilter use
// const token = 'Basic ' + btoa('JR' + ':' + 'ft3t7pgz');
let headers = {'Authorization': token , 'Accept': '*/*'};
const xdc = '447';
const responseArr = [];
const filteredActual = 'FinCards_Actual_Filtered';
const filteredTarget = 'FinCards_Target_Filtered';
const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);

let newTok = 'Basic ' + btoa(InfoburstAzure.user + ':' + InfoburstAzure.pass);
let newheaders = {'Authorization': newTok , 'Accept': '*/*'};
/**
 * Change the state of Authentication for the user.
 * 
 * @param {boolean} isLoggedIn 
 */
export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

/**
 * Update the value of the Switch Filter 
 * 
 * @param {boolean} switchFilterValue 
 */
export function updateSwitchFilterValue(switchFilterValue) {
    return {
        type: UPDATE_SWITCH_FILTER_VALUE,
        payload: switchFilterValue
    }
}

/**
 * Update the visibility of the Modal Dialog Box
 * 
 * @param {boolean} isDialogVisible 
 */
export function updateDialogVisibility(isDialogVisible) {
    return {
        type: UPDATE_DIALOG_VISIBILITY,
        payload: isDialogVisible
    }
}

/**
 * Update the values in state from the multi filter values
 * 
 * @param {array} newMultiFilterValue
 */
export function updateMultiFilterValues(newMultiFilterValue) {
    return {
        type: UPDATE_MULTI_FILTER_VALUES,
        payload: newMultiFilterValue
    }
}

/**
 * Update the status of the multi filter updating
 * 
 * @param {boolean} status
 */
export function updateMultiFilterStatus(status) {
    return {
        type: UPDATE_MULTI_FILTER_VALUES,
        payload: status
    }
}

/**
 * Generate the data that goes into the filter box
 * 
 */
export function generateFilterData() {

    let responseArray = [];
    let newTok = 'Basic ' + btoa(InfoburstAzure.user + ':' + InfoburstAzure.pass);
    let newHeaders = {'Authorization': newTok , 'Accept': '*/*'};

    const maResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=MarketFilters&json=1', {headers: newHeaders, responseType: 'text'})
    const segementsResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=SegmentFilters&json=1', {headers: newHeaders, responseType: 'text'});
    const subscriptionResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=SubscriptionFilter&json=1', {headers: newHeaders, responseType: 'text'});
    const routesResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=RouteFilters&json=1', {headers: newHeaders, responseType: 'text'});
    const quartersResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=QuarterFilter&json=1', {headers: newHeaders, responseType: 'text'});
    const productResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=ProductFilters&json=1', {headers: newHeaders, responseType: 'text'});
    const geoResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + '45?q=GeoFilters&json=1', {headers: newHeaders, responseType: 'text'});
    
    responseArray.push(quartersResponse,maResponse,productResponse,segementsResponse,subscriptionResponse,routesResponse,geoResponse);
    let promiseArr1 = Promise.all(responseArray);
    return{
        type: GENERATE_FILTER_DATA,
        payload: promiseArr1
    }
}

/**
 * Add a value to the active filters for the multi filter
 * 
 * @param {object} filter
 */

 export function addValueToActiveMultiFilter(filter) {
    return {
        type: ADD_MULTI_FILTER,
        payload: filter
    }
 }

 /**
 * Remove a value to the active filters for the multi filter
 * 
 * @param {object} filter
 */
 export function removeMultiFilter(filter){
     return {
         type: REMOVE_MULTI_FILTER,
         payload: filter
     }
 }

/**
 * Set the visibility of the Summary View Details to True
 */
export function showSummaryDetails(filter){
    return {
        type: SHOW_SUMMARY_VIEW_DETAILS,
        payload: true
    }
}

/**
 * Set the visibility of the Summary View Details to False
 */
export function hideSummaryDetails(filter){
    return {
        type: HIDE_SUMMARY_VIEW_DETAILS,
        payload: false
    }
}


/**
 * Set the visibility of the Data Preferences to True
 */
export function showDataPreferences(filter){
    return {
        type: SHOW_DATA_PREFERENCES,
        payload: true
    }
}

/**
 * Set the visibility of the Data Preferences to False
 */
export function hideDataPreferences(filter){
    return {
        type: HIDE_DATA_PREFERENCES,
        payload: false
    }
}



/***
 * Update the Financial Summary Active Card
 * @param {squareItem}
 */
export function updateFinancialSummaryActiveCard(squareItem){
    return {
        type: UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
        payload: squareItem
    }
}

/***
 * Update the Journey Summary Active Card
 * @param {squareItem}
 */
export function updateJourneySummaryActiveCard(squareItem){
    return {
        type: UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD,
        payload: squareItem
    }
}


/**
 * Get all the data for adobe
 * 
 * @param {boolean} status
 */
export function getAdobeData() {


    return {
        type: GET_ALL_DATA,
        payload: {}
    }
}
export function getQueryFilteredIBEData(_parameters,availableFilters){

    let quarterQuery;
    let responseArr = [];
    let promiseArr;
    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    let filterParams = [
        {prompt: 'quarterFilters', value: ''},
        {prompt: 'productFilters', value: ''},
        {prompt: 'geoFilters', value: ''},
        {prompt: 'subscriptionFilters', value: ''},
        {prompt: 'maFilters', value: ''},
        {prompt: 'routeFilters', value: ''},
        {prompt: 'segmentFilters', value: ''}
    ];

    filterParams[0].value = _parameters.quarters[0].value;
    filterParams[1].value = _parameters.products[0].value;
    filterParams[2].value = _parameters.geos[0].value;
    filterParams[3].value = _parameters.subscriptions[0].value;
    filterParams[4].value = _parameters.markets[0].value;
    filterParams[5].value = _parameters.routes[0].value;
    filterParams[6].value = _parameters.segments[0].value;

    quarterQuery = Object.assign({},_parameters.quarters[0]);

    // Remove First Row from all the filters 
    // Contains All Data Filters
    // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    utils.generateFilterParams(filterParams,allFilters,_parameters);
    let params1 = filterParams.reduce((prev, param) => {
            let p = '';
            p = prev + '&' + param.prompt + '=' + param.value;
            return p;
        
      }, '');

      const response = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\117?q=' + 'FinancialActualTargetQuery'  + params1 + '&json=1', 
      {headers: newheaders, responseType: 'text'});

      responseArr.push(response);
      promiseArr = Promise.all(responseArr);
  
      return {
          type: GET_QUERY_FILTERED_IBE_DATA,
          payload: promiseArr
      }
   

}



export function getQueryFilteredIBEMultiChartData(_parameters,availableFilters){
    let quarterQuery;
    let responseArr = [];
    let promiseArr;
    let response;
    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    let filterParams = [
        {prompt: 'quarterFilters', value: ''},
        {prompt: 'productFilters', value: ''},
        {prompt: 'geoFilters', value: ''},
        {prompt: 'subscriptionFilters', value: ''},
        {prompt: 'maFilters', value: ''},
        {prompt: 'routeFilters', value: ''},
        {prompt: 'segmentFilters', value: ''}
    ];

    filterParams[0].value = _parameters.quarters[0].value;
    filterParams[1].value = _parameters.products[0].value;
    filterParams[2].value = _parameters.geos[0].value;
    filterParams[3].value = _parameters.subscriptions[0].value;
    filterParams[4].value = _parameters.markets[0].value;
    filterParams[5].value = _parameters.routes[0].value;
    filterParams[6].value = _parameters.segments[0].value;

    quarterQuery = Object.assign({},_parameters.quarters[0]);

    
    // Remove First Row from all the filters 
    // Contains All Data Filters
    // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    utils.generateFilterParams(filterParams,allFilters,_parameters);
    let params1 = filterParams.reduce((prev, param) => {
            let p = '';
            p = prev + '&' + param.prompt + '=' + param.value;
            return p;
        
      }, '');

       
      if(_parameters.quarters[0].value === 'All Data'){
        response = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\117?q=' + 'FinancialMultichartAllQuarterQuery'  + params1 + '&json=1', 
        {headers: newheaders, responseType: 'text'});
    } else {
        response = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\117?q=' + 'FinancialMultichartQuery'  + params1 + '&json=1', 
        {headers: newheaders, responseType: 'text'});
    }
      responseArr.push(response);
      promiseArr = Promise.all(responseArr);
    return {
        type: GET_QUERY_FILTERED_IBE_MULTICHART_DATA,
        payload: promiseArr
    }
}