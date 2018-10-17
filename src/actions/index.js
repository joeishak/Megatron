

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
    GET_QUERY_FILTERED_IBE_DATA,
    GET_QUERY_FILTERED_IBE_MULTICHART_DATA,
    GET_EXCEL_MULTICHART,
    UPDATE_COMMENT_BOX_VISIBILITY,
    ADD_NEW_COMMENT,
    ADD_NEW_REPLY  ,
    TOGGLE_COMMENT_CARD_VISIBILITY,
    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY,
    GET_FILTERED_JOURNEY_IBE_DATA,
    GET_FILTERED_JOURNEY_IBE_MULTICHART_DATA,
    GET_FILTERED_JOURNEY_QTD_DATA,
    MULTICHART_IS_ARR

} from 'actions/types';
import axios from 'axios';
import * as utils from '../utilities';
import { InfoburstAzure} from '../variables';

// HTTP Variables 
const token = 'Basic ' + btoa(InfoburstAzure.user + ':' + InfoburstAzure.pass);
const headers = {'Authorization': token , 'Accept': '*/*'};
let responseArray = [];
let promiseArr =[];
let quarterQuery;
let filterParams = [
    {prompt: 'quarterFilters', value: ''},
    {prompt: 'productFilters', value: ''},
    {prompt: 'geoFilters', value: ''},
    {prompt: 'subscriptionFilters', value: ''},
    {prompt: 'maFilters', value: ''},
    {prompt: 'routeFilters', value: ''},
    {prompt: 'segmentFilters', value: ''}
];
let response;
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
 
    let promiseArr1 = utils.initiateFilterDataRequests();
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
 * Get all the local data for adobe
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
 * 
 * @param {*} _parameters 
 * @param {*} availableFilters 
 */
export function getQueryFilteredIBEData(_parameters,availableFilters){

    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    promiseArr =  utils.getFinancialSummaryData(allFilters,_parameters);

      return {
          type: GET_QUERY_FILTERED_IBE_DATA,
          payload: promiseArr
      }
   

}
export function getQueryFilteredJourneyIBEData(_parameters,availableFilters){

    // responseArray= [];
    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    promiseArr = utils.getJourneySummaryData(allFilters,_parameters);
    // let filterParams = [
    //     {prompt: 'quarterFilters', value: ''},
    //     {prompt: 'productFilters', value: ''},
    //     {prompt: 'geoFilters', value: ''},
    //     {prompt: 'maFilters', value: ''},
    //     {prompt: 'routeFilters', value: ''},
    //     {prompt: 'segmentFilters', value: ''}

    // ];
    // // console.log(_parameters);
    
    // // filterParams[0].value = _parameters.quarters[0].value;
    // filterParams[1].value = _parameters.products[0].value;
    // filterParams[2].value = _parameters.geos[0].value;
    // filterParams[3].value = _parameters.markets[0].value;
    // filterParams[4].value = _parameters.routes[0].value;
    // filterParams[5].value = _parameters.segments[0].value;


    // // console.log('Filter Params: ', filterParams);
    // quarterQuery = Object.assign({},_parameters.quarters[0]);

    // // Remove First Row from all the filters 
    // // Contains All Data Filters
    // // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    // utils.generateFilterParams('journ',filterParams,allFilters,_parameters);
    // console.log(filterParams);
    // let params1 = filterParams.reduce((prev, param) => {
    //         let p = '';
    //         p = prev + '&' + param.prompt + '=' + param.value;
    //         return p;
        
    //   }, '');

    //   const response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyActualTarget  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});

    //   const multiChartResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMultiChart  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});

    //   const totalresponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});

    //   const geoResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});
    //   console.log(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1');
    //   const maResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMarketAreaQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});
    //   responseArray.push(response,multiChartResponse, totalresponse, geoResponse,maResponse);
    //   promiseArr = Promise.all(responseArray);
  
      return{
          type: GET_FILTERED_JOURNEY_IBE_DATA,
          payload: promiseArr
      }
   

}

export function getFilteredJourneyQtdData(_parameters,availableFilters){

    responseArray= [];
    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    // let filterParams = [
    //     {prompt: 'quarterFilters', value: ''},
    //     {prompt: 'productFilters', value: ''},
    //     {prompt: 'geoFilters', value: ''},
    //     {prompt: 'maFilters', value: ''},
    //     {prompt: 'routeFilters', value: ''},
    //     {prompt: 'segmentFilters', value: ''}

    // ];
    // // console.log(_parameters);
    
    // // filterParams[0].value = _parameters.quarters[0].value;
    // filterParams[1].value = _parameters.products[0].value;
    // filterParams[2].value = _parameters.geos[0].value;
    // filterParams[3].value = _parameters.markets[0].value;
    // filterParams[4].value = _parameters.routes[0].value;
    // filterParams[5].value = _parameters.segments[0].value;
    // // console.log('Filter Params: ', filterParams);
    // quarterQuery = Object.assign({},_parameters.quarters[0]);

    // // Remove First Row from all the filters 
    // // Contains All Data Filters
    // // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    // utils.generateFilterParams('journ',filterParams,allFilters,_parameters);
    // let params1 = filterParams.reduce((prev, param) => {
    //         let p = '';
    //         p = prev + '&' + param.prompt + '=' + param.value;
    //         return p;
        
    //   }, '');


    //   const response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});

    //   const geoResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});
    //   console.log(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1');
    //   const maResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMarketAreaQtd  + params1 + '&json=1', 
    //   {headers: headers, responseType: 'text'});
    //   responseArray.push(response,geoResponse,maResponse);
    //   promiseArr = Promise.all(responseArray);
    promiseArr = utils.getJourneyQtdData(allFilters,_parameters);
      return{
          type: GET_FILTERED_JOURNEY_QTD_DATA,
          payload: promiseArr
      }
   

}
export function getQueryFilteredIBEMultiChartData(_parameters,availableFilters){
   
    responseArray = [];
   
    let allFilters
     = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    // utils.getAllFilters(allFilters,availableFilters);
    

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

       
   
        response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.dataXdcID + InfoburstAzure.summaryQueryNames.FinancialMultiChart  + params1 + '&json=1', 
        {headers: headers, responseType: 'text'});
        let unitsResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.FinancialUnitsMultiChart  + params1 + '&json=1', 
        {headers: headers, responseType: 'text'});
      responseArray.push(response,unitsResponse);
      promiseArr = Promise.all(responseArray);
    return {
        type: GET_QUERY_FILTERED_IBE_MULTICHART_DATA,
        payload: promiseArr
    }
}

export function getExcelMultichartData(_parameters,availableFilters){
    return {
        type: GET_EXCEL_MULTICHART,
        payload: {}
    }
}

export function showCommentBox(){
    return {
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: true
    }
}

export function hideCommentBox(){
    return{
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: false
    }
}

export function toggleCommentBox(_toggleStatus) {
    return {
        type: TOGGLE_COMMENT_CARD_VISIBILITY,
        payload: _toggleStatus
    }
}

export function addNewCommentToMetric(activeSquareID, comment ){
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

export function addNewReplyToMetricComment(activeSquareID, commentId,reply ){
    return {
        type: ADD_NEW_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
    }
}

export function addNewJourneyComment(activeSquareID, comment){
    return {
        type: ADD_NEW_JOURNEY_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

export function addNewJourneyReply(activeSquareID,commentId,reply){
    return {
        type: ADD_NEW_JOURNEY_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
    }

}

export function updateMultichartMetric(value){
    return {
        type: MULTICHART_IS_ARR,
        payload:value
    }
}