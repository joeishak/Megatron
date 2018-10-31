

import {  
    CHANGE_AUTH, 
    UPDATE_OKTA_USER,
    GET_DB_USER,
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS,           
    UPDATE_USER_MULTIVALUE_SETTINGS,
    UPDATE_DEFAULT_SUMMARY_PREFERENCE,
    UPDATE_DEFAULT_FIN_KPI_PREFERENCE ,
    UPDATE_DEFAULT_JOURN_KPI_PREFERENCE,
    UPDATE_SWITCH_FILTER_VALUE,
    UPDATE_DIALOG_VISIBILITY , 
    GET_ALL_DATA,
    GENERATE_FILTER_DATA,
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,    
    HIDE_SUMMARY_VIEW_DETAILS,    
    UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
    UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD,
    GET_QUERY_FILTERED_IBE_DATA,
    GET_EXCEL_MULTICHART,
    UPDATE_COMMENT_BOX_VISIBILITY,
    ADD_NEW_COMMENT,
    ADD_NEW_REPLY  ,
    TOGGLE_COMMENT_CARD_VISIBILITY,
    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY,
    GET_FILTERED_JOURNEY_IBE_DATA,
    GET_FILTERED_JOURNEY_QTD_DATA,
    MULTICHART_IS_ARR

} from 'actions/types';
import * as utils from '../utilities';

// HTTP Variables 

let promiseArr =[];

let filterParams = [
    {prompt: 'quarterFilters', value: ''},
    {prompt: 'productFilters', value: ''},
    {prompt: 'geoFilters', value: ''},
    {prompt: 'subscriptionFilters', value: ''},
    {prompt: 'maFilters', value: ''},
    {prompt: 'routeFilters', value: ''},
    {prompt: 'segmentFilters', value: ''}
];

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

export  function updateOKTAUser(user){
    utils.addUserToDB(user);
    // let userdb = utils.getUser(user);
    return {
        type: UPDATE_OKTA_USER,
        payload: user
    }
}


export const getDbUser = (user) => {
   let  newuser = utils.getUser(user);
    return {
        type: GET_DB_USER,
        payload: newuser
    }
}
/**
 * Update the value of the Switch Filter 
 * 
 * @param {boolean} switchFilterValue 
 */


export function getUserSettings(sub){
    let res = utils.requestUserSettings(sub);
    return {
        type: GET_USER_SETTINGS,
        payload: res
    }
}

export function updateDefaultJournKpiPreference(type){

    
    return {
        type: UPDATE_DEFAULT_JOURN_KPI_PREFERENCE,
        payload: type
    }
}
export function updateDefaultFinKpiPreference(type){

    
    return {
        type: UPDATE_DEFAULT_FIN_KPI_PREFERENCE,
        payload: type
    }
}
export function updateDefaultSummaryPreference(type){

    
    return {
        type: UPDATE_DEFAULT_SUMMARY_PREFERENCE,
        payload: type
    }
}
export function updateUserSettings(activeFilters, user, defaultSummary, defaultFinKpi, defaultJournKpi,availableFilters,settingId){

    // let allFilters = {
    //     quarters: Object.values(availableFilters.quarters),
    //     geos: Object.values(availableFilters.geos),
    //     marketAreas: Object.values(availableFilters.marketAreas),
    //     products: Object.values(availableFilters.products),
    //     segments: Object.values(availableFilters.segments),
    //     subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
    //     routeToMarkets: Object.values(availableFilters.routeToMarkets)
    // }
    let stringGeo = JSON.stringify(activeFilters.geos);
    let stringProducts = JSON.stringify(activeFilters.products);
    let stringRoutes = JSON.stringify(activeFilters.routes);
    let stringMarkets = JSON.stringify(activeFilters.markets);
    let stringSubscription = JSON.stringify(activeFilters.subscriptions);
    let params = {
        quarter: activeFilters.quarters[0].value,
        segment: activeFilters.segments[0].value,
        user: user.sub,
        view: defaultSummary,
        fin: defaultFinKpi,
        journ: defaultJournKpi,
        geos: stringGeo,
        products: stringProducts,
        subscriptions: stringSubscription,
        routes: stringRoutes,
        markets: stringMarkets
    }
    console.log('Updating User Setting Params: ',params);
    let res = utils.postUserSettings(params);
    console.log(res);
    // let res2 = utils.postMultiValueSettings(activeFilters,settingId,availableFilters);

    return {
        type: UPDATE_USER_SETTINGS,
        payload: res
    }
}
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
    promiseArr =  utils.getFinancialSummaryData(allFilters, _parameters);

      return {
          type: GET_QUERY_FILTERED_IBE_DATA,
          payload: promiseArr
      }
   

}
export function getQueryFilteredJourneyIBEData(_parameters,availableFilters){

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
      return{
          type: GET_FILTERED_JOURNEY_IBE_DATA,
          payload: promiseArr
      }
   

}

export function getFilteredJourneyQtdData(_parameters,availableFilters){

    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    promiseArr = utils.getJourneyQtdData(allFilters,_parameters);
      return{
          type: GET_FILTERED_JOURNEY_QTD_DATA,
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