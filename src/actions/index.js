

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
    GET_FILTERED_IBE_DATA

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
 * Generate the data that goes into the filter box
 * 
 */
export function generateFilterData() {

    let responseArray = [];
    
    // const maResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=marketAreaList&json=1', {headers: headers, responseType: 'text'})
    // const segementsResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Segments&json=1', {headers: headers, responseType: 'text'});
    // const subscriptionResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Subscriptions&json=1', {headers: headers, responseType: 'text'});
    // const routesResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_RouteToMarket&json=1', {headers: headers, responseType: 'text'});
    // const quartersResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Quarters&json=1', {headers: headers, responseType: 'text'});
    // const productResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_ProductName&json=1', {headers: headers, responseType: 'text'});
    // const geoResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_GeoCode&json=1', {headers: headers, responseType: 'text'});
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

export function getFilteredIBEDAta(_parameters,availableFilters){
    // Infoburst Variables
    const xdc = '447';
    const responseArr = [];
    const filteredActual = 'FinCards_Actual_Filtered';
    const filteredTarget = 'FinCards_Target_Filtered';
    const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);
    let headers = {'Authorization': token , 'Accept': '*/*'};

    let newTok = 'Basic ' + btoa(InfoburstAzure.user + ':' + InfoburstAzure.pass);
    let newheaders = {'Authorization': newTok , 'Accept': '*/*'};
    // console.log(newheaders);
    // console.log(  InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2017q1' + '&json=1');

    // Action Variables
    let allFilters = 
    {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    let paramValue = [];
    let filterParams = [
        {prompt: 'quarterFilters', value: ''},
        {prompt: 'productFilters', value: ''},
        {prompt: 'geoFilters', value: ''},
        {prompt: 'subscriptionFilters', value: ''},
        {prompt: 'maFilters', value: ''},
        {prompt: 'routeFilters', value: ''},
        {prompt: 'segmentFilters', value: ''}
    ];

    
    allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
   
        let filtersApplied = utils.findIfFilterIsApplied(_parameters);
       
        // console.log('Filters Applied: ', filtersApplied);
        // console.log('All Filters: ',allFilters);
        // console.log('Active Filters: ', _parameters);
        utils.generateFilterParams(filterParams,filtersApplied, allFilters, _parameters)
        // console.log('Filter Params :', filterParams);

        // switch(filterParams[0].value)
      

    // console.log('P afeter modifying all dataa filter',p);
    let params1 = filterParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');
    // console.log(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredActual + params1 + '&json=1');
    const response1 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2017q1'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response2 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2017q2'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response3 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2017q3'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response4 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2017q4'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response5 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2018q1'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response6 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2018q2'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    const response7 = axios.get(InfoburstAzure.xdcCacheQueryURL + '\\54?q=' + '2018q3'  + params1 + '&json=1', 
    {headers: newheaders, responseType: 'text'});
    // console.log(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredActual + params1 + '&json=1');
    // const response2 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredTarget + params1 + '&json=1', 
    // {headers: headers, responseType: 'text'});

    responseArr.push(response1, response2,response3,response4,response5,response6,response7);
    let promiseArr = Promise.all(responseArr);
    // console.log(responseArr);

    return {
        type: GET_FILTERED_IBE_DATA,
        payload: promiseArr
    }
}

export function getIbeData(_parameters) {

    const endpoint = 'FinCards_Actual';
    const endpoint2 = 'FinCards_Target';
 
    
    const xdc = '447';
    let parameters = _parameters;
    const responseArr = [];

    let params = parameters.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');

    const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);
    let headers = {'Authorization': token , 'Accept': '*/*'};

    const response = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint + params + '&json=1', 
    {headers: headers, responseType: 'text'});

    const response2 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint2 + params + '&json=1', 
    {headers: headers, responseType: 'text'});

    responseArr.push(response, response2);
    let promiseArr = Promise.all(responseArr);

    return {
        type: GET_IBE_DATA,
        payload: promiseArr
    }
    
}
 