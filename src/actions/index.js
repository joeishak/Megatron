

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
    GENERATE_GEO_FILTERS,                   
    GENERATE_MARKET_AREA_FILTERS,           
    GENERATE_PRODUCT_NAME_FILTERS,         
    GENERATE_ROUTE_TO_MARKET_FILTERS,
    GENERATE_SEGMENTS_FILTERS,
    GENERATE_SUBSCRIPTION_OFFERINGS_FILTERS,
    GENERATE_QUARTERS_FILTERS,
    GET_IBE_DATA

} from 'actions/types';
import axios from 'axios';

const token = 'Basic ' + btoa('JR' + ':' + 'ft3t7pgz');
let headers = {'Authorization': token , 'Accept': '*/*'};
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

/**
 * Generate the data that goes into the filter box
 * 
 */
export function generateFilterData() {

    //  const token = 'Basic ' + btoa('JR' + ':' + 'ft3t7pgz');
    // let headers = {'Authorization': token , 'Accept': '*/*'};
    
    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=marketAreaList&json=1', {headers: headers, responseType: 'text'}).then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    })
    return{
        type: GENERATE_FILTER_DATA,
        payload: response
    }
}

/**
 * Generate the data that goes into the Segments filter box
 * 
 */
export function generateSegmentsFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Segments&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_SEGMENTS_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Subscription Offerings filter box
 * 
 */
export function generateSubscriptionOfferingsFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Subscriptions&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_SUBSCRIPTION_OFFERINGS_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Route To Market filter box
 * 
 */
export function generateRouteToMarketFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_RouteToMarket&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_ROUTE_TO_MARKET_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Quarters filter box
 * 
 */
export function generateQuarterFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Quarters&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_QUARTERS_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Product Name filter box
 * 
 */
export function generateProductNameFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_ProductName&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_PRODUCT_NAME_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Geo Code filter box
 * 
 */
export function generateGeoFilters() {

    const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_GeoCode&json=1', {headers: headers, responseType: 'text'});
 
    return{
        type: GENERATE_GEO_FILTERS,
        payload: response
    }
 }
/**
 * Generate the data that goes into the Market Areafilter box
 * 
 */
export function generateMarketAreaFilters() {

   const response = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=marketAreaList&json=1', {headers: headers, responseType: 'text'});

   return{
       type: GENERATE_MARKET_AREA_FILTERS,
       payload: response
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

export function getIbeData() {

    const prod_connection = { 'user': 'JR', 'pass': 'ft3t7pgz' };
    const environment = { infosolApi: 'http://vm1.infosol.com:8551' };

    const endpoint = 'FinCards_Actual';
    const endpoint2 = 'FinCards_Target';
    const xdc = '447';
    const parameters = [];

    let params = parameters.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');

    const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);
    let headers = {'Authorization': token , 'Accept': '*/*'};
      
    // const request = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint + params + '&json=1', 
    //   {headers: headers, responseType: 'text'});

    const response = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint + params + '&json=1', 
    {headers: headers, responseType: 'text'}).then( (res) => { return res.data; });

    const response2 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint2 + params + '&json=1', 
    {headers: headers, responseType: 'text'}).then( (res) => { return res.data; });

    

    // console.log(response);
    const responseArr = [];
    responseArr.push(response, response2);

    return {
        type: GET_IBE_DATA,
        payload: responseArr
    }
    
}
 